import {
  getAsset,
  getAssetsByCollectionSlug,
  getMetadataForAsset,
  getMetadataForAssets,
} from './opensea'
import { isBidOrOfferEvent, listingPriceData } from './opensea/asset'
import { priceFromPriceData } from './opensea/util'

// Types

enum GalleryItemStatus {
  reserve = 'reserve',
  listed = 'listed',
  sold = 'sold',
}

export type GalleryItem = {
  // identifiers
  // contract & token reference metadata
  assetId: string
  assetContractAddress: string
  assetTokenId: string

  // core item metadata
  title: string
  description: string

  // media
  imageUrl: string
  videoUrl?: string

  // creator
  creatorUsername: string
  creatorImageUrl: string
  creatorAddress: string

  // owner
  ownerUsername: string
  ownerImageUrl: string
  ownerAddress: string

  // status
  status: GalleryItemStatus

  // price
  priceEth?: string
  priceUsd?: string

  // history
  historyItems: HistoryItem[]

  // open offers
  // - offers

  // auction
  expiration: string // iso8601
  // - highest bid
  // - all bids
}

enum HistoryItemEventType {
  minted = 'minted',
  approved = 'approved',
  transferred = 'transferred',
  listed = 'listed',
  offer_placed = 'offer_placed',
  unlisted = 'unlisted',
  sold = 'sold',
}
type HistoryItem = {
  galleryItemAssetId: string
  galleryItemAssetContractAddress: string
  galleryItemAssetTokenId: string

  timestamp: string // iso8601

  eventType: HistoryItemEventType

  amountEth: string
  amountUsd: string

  eventFromAddress: string
  eventFromUsername: string
  eventFromImageUrl: string

  eventToAddress: string
  eventToUsername: string
  eventToImageUrl: string

  txHash: string
}

type User = {
  // either creator or collector
}

// Core Queries

export const featuredItemsQuery = async (): Promise<GalleryItem[]> => {
  // TODO: filter by featured
  const collectionAssets = await getAssetsByCollectionSlug()
  const hydratedAssets = await getMetadataForAssets(collectionAssets)
  const collectionItems = hydratedAssets.map(galleryItemFromHydratedAsset)
  // const pricedCollectionItems = collectionItems.map(pricedItemFromGalleryItem)
  return collectionItems
}

export const galleryItemQuery = async ({
  assetContractAddress,
  assetTokenId,
}): Promise<GalleryItem> => {
  const asset = await getAsset({ assetContractAddress, assetTokenId })
  const hydratedAsset = await getMetadataForAsset(asset)
  const galleryItem = galleryItemFromHydratedAsset(hydratedAsset)
  const historyItems = historyItemsFrom({ galleryItem, hydratedAsset })
  return Object.assign({}, galleryItem, { historyItems })
}

// Helper Methods

const galleryItemFromHydratedAsset = ({
  asset,
  events,
  status,
  expiration,
  price_eth,
  price_usd,
}): GalleryItem => {
  const galleryItem = {
    assetId: asset?.id,
    assetContractAddress: asset?.asset_contract?.address,
    assetTokenId: asset?.token_id,

    title: asset?.name,
    description: asset?.description,

    imageUrl:
      asset?.image_url ?? asset?.image_original_url ?? asset?.image_preview_url,
    videoUrl: asset?.animation_url ?? asset?.animation_original_url,

    creatorUsername: asset?.creator?.user?.username,
    creatorImageUrl: asset?.creator?.profile_img_url,
    creatorAddress: asset?.creator?.address,

    ownerUsername: asset?.owner?.user?.username,
    ownerImageUrl: asset?.owner?.profile_img_url,
    ownerAddress: asset?.owner?.address,

    status,

    priceEth: price_eth == null ? null : price_eth.toString(),
    priceUsd: price_usd == null ? null : price_usd.toString(),

    historyItems: [],

    expiration,

    // endingIn: '',
  }

  // const { price_eth: priceEth, price_usd: priceUsd } = priceFromPriceData(
  //   priceDataFrom({ galleryItem, ev })
  // )

  return Object.assign({}, galleryItem, {
    historyItems: historyItemsFrom({
      galleryItem,
      hydratedAsset: {
        asset,
        events,
        status,
        expiration,
        price_eth,
        price_usd,
      },
    }),
  })
}

const HistoryItemEventTypeByOpenSeaEventType = {
  approve: HistoryItemEventType.approved,
  transfer: HistoryItemEventType.transferred,
  created: HistoryItemEventType.listed,
  offer_entered: HistoryItemEventType.offer_placed,
  cancelled: HistoryItemEventType.unlisted,
  successful: HistoryItemEventType.sold,
}

const historyItemEventTypeFrom = ({ event: { event_type } }) =>
  HistoryItemEventTypeByOpenSeaEventType[event_type] ?? null

const priceDataFrom = ({ galleryItem, event, historyItemEventType }) => {
  if (event?.event_type === 'created') {
    return listingPriceData(event)
  }
  // bid_entered, offer_entered
  if (isBidOrOfferEvent(event?.event_type)) {
    return { price: event?.bid_amount, token: event?.payment_token }
  }
  if (event?.event_type === 'successful') {
    return { price: event?.total_price, token: event?.payment_token }
  }
  return null
}

const historyItemFrom = ({ galleryItem, event }): HistoryItem => {
  const historyItemEventType = historyItemEventTypeFrom({ event })
  const from_account = event?.from_account ?? event?.transaction?.from_account
  const to_account = event?.to_account ?? event?.transaction?.to_account
  const { price, token } =
    priceDataFrom({
      galleryItem,
      event,
      historyItemEventType,
    }) ?? {}
  const { price_eth, price_usd } = priceFromPriceData({ price, token }) ?? {}
  return {
    galleryItemAssetId: galleryItem?.assetId,
    galleryItemAssetContractAddress: galleryItem?.assetContractAddress,
    galleryItemAssetTokenId: galleryItem?.assetTokenId,

    timestamp: event?.created_date ?? event?.transaction?.timestamp,

    eventFromAddress: from_account?.address,
    eventFromUsername: from_account?.user?.username,
    eventFromImageUrl: from_account?.profile_img_url,

    eventToAddress: to_account?.address,
    eventToUsername: to_account?.user?.username,
    eventToImageUrl: to_account?.profile_img_url,

    eventType: historyItemEventType,

    amountEth: price_eth == null ? null : price_eth.toString(),
    amountUsd: price_usd == null ? null : price_usd.toString(),

    txHash: event?.transaction?.transaction_hash,
  }
}

const historyItemsFrom = ({ galleryItem, hydratedAsset }): HistoryItem[] =>
  (hydratedAsset?.events ?? []).map(event =>
    historyItemFrom({ galleryItem, event })
  )
