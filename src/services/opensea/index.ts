import { getAsset, getAssets, getEvents, getCollections } from './core'
import {
  getMetadataForAsset,
  getMetadataForAssets,
  getExpandedAsset,
  getExpandedAssets,
} from './asset'
import { ArtworksProps, EventType } from '../../types'

// Core

export { getAsset, getAssets, getEvents, getCollections }

// Asset

export {
  getMetadataForAsset,
  getMetadataForAssets,
  getExpandedAsset,
  getExpandedAssets,
}

// Other Non-Core

export const getAssetsByCollectionSlug = async (
  collectionSlug = 'superchief-gallery-nifty',
  { sort_by = 'listing_date', order_direction = 'desc', limit = 9 } = {}
): Promise<ArtworksProps[]> => {
  const assets = await getAssets({
    collection: collectionSlug,
    sort_by,
    order_direction,
    limit,
  })
  return assets
}

export const getEventsByCollectionSlug = async (
  collectionSlug = 'superchief-gallery-nifty'
  // {  } = {}
): Promise<EventType[]> => {
  // asset_contract_address, token_id, account_address, event_type
  // only_opensea: false
  // offset, limit
  // occurred_before, occurred_after
  const events = getEvents({
    collection_slug: collectionSlug,
  })
  return events
}
