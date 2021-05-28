import { last, sortBy } from 'lodash'
import { DateTime } from 'luxon'

import config from '../../config'

import { getAsset, getEvents } from './core'
import { priceFromPriceData } from './util'

const GALLERY_ADDRESS = config.OPENSEA_GALLERY_ADDRESS ?? ''

// Asset

export const getMetadataForAsset = async (asset = {}) => {
  const assetContractAddress =
    asset?.asset_contract_address ?? asset?.asset_contract?.address
  const assetTokenId = asset?.token_id
  const events = await getEventsForAsset({ assetContractAddress, assetTokenId })
  const status = assetStatusFrom({ asset, events })
  const expiration = assetExpirationDateTime({ asset, events })
  const { price_eth, price_usd } = assetPrice({ asset, events }) ?? {}
  return {
    asset,
    events,
    status,
    expiration,
    price_eth,
    price_usd,
  }
}

export const getMetadataForAssets = async (assets = []) => {
  const hydratedAssets = await Promise.all(assets.map(getMetadataForAsset))
  return hydratedAssets
}

// Use when you need more fields than those returned by a getAssets query
export const getExpandedAsset = async (asset = {}) => {
  const expandedAsset = await getAsset({
    assetContractAddress: asset?.asset_contract?.address,
    assetTokenId: asset?.token_id,
  })
  return expandedAsset
}

// Use when you need more fields than those returned by a getAssets query
export const getExpandedAssets = async (assets = []) => {
  const expandedAssets = await Promise.all(assets.map(getExpandedAsset))
  return expandedAssets
}

export const getEventsForAsset = async ({
  assetContractAddress,
  assetTokenId,
}) => {
  const events = await getEvents({
    asset_contract_address: assetContractAddress,
    token_id: assetTokenId,
  })
  return events
}

// Helpers

const orderByTimestamp = (events = []) => sortBy(events, 'created_date')

const mostRecentEvent = (events = []) => last(orderByTimestamp(events))

// status: reserve, listed, sold

// event_type     |   status
// =====================================================
// approve        |   owner === gallery ? reserve : sold
// transfer       |   owner === gallery ? reserve : sold
// created        |   listed
// bid_entered    |   listed
// offer_entered  |   listed
// cancelled      |   owner === gallery ? reserve : sold
// successful     |   owner === gallery ? reserve : sold

const RESERVE_OR_SOLD_EVENT_TYPES = [
  'approve',
  'transfer',
  'cancelled',
  'successful',
]
const LISTED_EVENT_TYPES = ['created', 'bid_entered']
const STATUS_DETERMINING_EVENT_TYPES = RESERVE_OR_SOLD_EVENT_TYPES.concat(
  LISTED_EVENT_TYPES
)

const BID_EVENT_TYPES = ['bid_entered', 'offer_entered']
export const isBidOrOfferEvent = (event = {}) =>
  BID_EVENT_TYPES.includes(event?.event_type)

const NULL_ADDRESS = '0x0000000000000000000000000000000000000000'

export const assetStatusFrom = ({ asset = {}, events = [] }) => {
  //   - special case: transfer after auction created?
  //     - seems like yes, but what happens? is it still on auction?
  //   - special case: can bids & offers be entered after an auction is cancelled?
  //   - special case: can offers be entered for an unlisted item?

  const status_determining_events = events.filter(e =>
    STATUS_DETERMINING_EVENT_TYPES.includes(e?.event_type)
  )
  const last_determining_event_type = mostRecentEvent(status_determining_events)
    ?.event_type

  if (RESERVE_OR_SOLD_EVENT_TYPES.includes(last_determining_event_type)) {
    return [GALLERY_ADDRESS, NULL_ADDRESS].includes(asset?.owner?.address)
      ? 'reserve'
      : 'sold'
  }

  if (LISTED_EVENT_TYPES.includes(last_determining_event_type)) {
    return 'listed'
  }

  return null
}

// status       |   pricing event type    |   price
// ================================================
// reserve,sold |   successful            |   total_price,payment_token
//
// listed       |   created               |   auction_type,starting_price,ending_price,payment_token
//              |   offer_entered         |   bid_amount,payment_token

const assetPriceData = ({ asset = {}, events = [] }) => {
  const status = assetStatusFrom({ asset, events })
  if (status === 'listed') {
    return (
      highestOpenBidOrOfferPriceData({ asset, events }) ??
      mostRecentBidOrOfferPriceData(events) ??
      mostRecentListingPriceData(events)
    )
  }
  return mostRecentSalePriceData({ asset, events })
}

export const assetPrice = ({ asset = {}, events = [] }) => {
  const { price, token } = assetPriceData({ asset, events }) ?? {}
  if (price == null) {
    return null
  }
  const { price_eth, price_usd } = priceFromPriceData({ price, token })
  return { price_eth, price_usd }
}

const assetExpirationDateTime = ({ asset = {}, events = [] }) => {
  const most_recent_listing_event = mostRecentEvent(
    events.filter(e => e?.event_type === 'created')
  )

  const { created_date: created_at, duration: duration_seconds } =
    most_recent_listing_event ?? {}

  const created_at_datetime = DateTime.fromISO(created_at)
  const end = created_at_datetime.plus({
    seconds: duration_seconds,
  })

  return end.toISO()
}

// Helpers

const highestOpenBidOrOfferPriceData = ({ asset = {}, events = [] }) => {
  // This is difficult to determine because:
  //   - how do we know which offers are open?
  //   - have to get the latest events that occurred after the most recent
  //     auction has been completed or canceled
  //   - but also we can have offers before the first auction is created
  //   - and what about transfers??

  // TODO
  // const sorted = orderByTimestamp(events)
  // if (assetStatusFrom({ asset, events }) !== 'listed') {
  //   const latest = takeRightWhile(sorted, e => e?.event_type !== 'offer_entered')
  // }
  // const latest = takeRightWhile(sorted, e => ![''].includes(e?.event_type))
  // const bid_and_offer_events = events.filter(isBidOrOfferEvent)
  // const highest

  return null
}

const bidOrOfferPriceData = event => {
  if (event == null || !isBidOrOfferEvent(event)) {
    return null
  }
  return {
    price: event?.bid_amount,
    token: event?.payment_token,
  }
}

const mostRecentBidOrOfferPriceData = (events = []) => {
  const most_recent_bid_event = mostRecentEvent(
    events.filter(isBidOrOfferEvent)
  )
  return bidOrOfferPriceData(most_recent_bid_event)
}

const salePriceData = event => {
  if (event == null || event?.event_type !== 'successful') {
    return null
  }
  return {
    price: event?.total_price,
    token: event?.payment_token,
  }
}

const mostRecentSalePriceData = ({ asset = {}, events = [] }) => {
  const asset_last_sale = asset?.last_sale
  const most_recent_sale_event = mostRecentEvent(
    events.filter(e => e?.event_type === 'successful')
  )
  const sale_event = most_recent_sale_event ?? asset_last_sale
  return salePriceData(sale_event)
}

export const listingPriceData = event => {
  if (event == null || event?.event_type !== 'created') {
    return null
  }
  return {
    price: event?.starting_price ?? event?.ending_price,
    token: event?.payment_token,
  }
}

const mostRecentListingPriceData = (events = []) => {
  const most_recent_listing_event = mostRecentEvent(
    events.filter(e => e?.event_type === 'created')
  )
  return listingPriceData(most_recent_listing_event)
}
