import { ArtworksProps, EventType } from '../../types'
import config from '../../config'
import { getAsset, getAssets, getEvents, getCollections } from './core'
import {
  getMetadataForAsset,
  getMetadataForAssets,
  getExpandedAsset,
  getExpandedAssets,
} from './asset'

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
  collectionSlug = config.OPENSEA_GALLERY_SLUG,
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
  collectionSlug = config.OPENSEA_GALLERY_SLUG
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
