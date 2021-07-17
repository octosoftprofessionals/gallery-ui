export type MetamaskAccountType = {}

export type Exhibition = {
  id: number
  title: string
  description: string
  artist: string
  priority: number
  deliverydate: Date
}

export type ExhibitionArtworks = {
  id: number
  name: string
  artist_wallet_address: string
  asset_contract_address: string
  asset_token_id: string
  priority: number
  exhibitionid: number
}

export type FollowData = {
  id: number
  user_name: string
  artist_name: string
  artist_id: number
}

export type ArtworksProps = {
  id: string
  name: string
  description: string
  assetIPFSPath: string
  assetIPFSPreview: string
  metadataIPFSPath: string
  width: number
  height: number
  duration: Date
  mimeType: string
  mintTxHash: string
  muxStatus: string
  muxMaxResolution: string
  muxPlaybackId: string
  assetId: string
  assetProcessor: string
  assetStatus: string
  muxId: string
  tokenId: number
  status: string
  hiddenAt: string
  deletedAt: string
  moderationStatus: string
  price: string
  creator: CreatorProps
}

export type CreatorProps = {
  address: string
  username?: string
  imageUrl?: string
  profileUrl?: string
  description?: string
  userIndex?: number
  publicKey?: string
  profileImageUrl?: string
  coverImageUrl?: string
  name?: string
  bio?: string
  isApprovedCreator?: boolean
  moderationStatus?: string
  joinedWaitlistAt?: string
  createdAt?: Date
  firstName?: string
  lastName?: string
  isAdmin?: boolean
  followers?: number
  following?: number
  links?: LinksProps
  created_date?: string
  owner?: number
  external_link?: string
  image_url?: string
  collection?: CollectionProps
}

export type LinksProps = {
  tiktok: {
    handle: string
    platform: string
  }
  twitch: {
    handle: string
    platform: string
  }
  discord: {
    handle: string
    platform: string
  }
  twitter: {
    handle: string
    platform: string
  }
  website: {
    handle: string
    platform: string
  }
  youtube: {
    handle: string
    platform: string
  }
  facebook: {
    handle: string
    platform: string
  }
  snapchat: {
    handle: string
    platform: string
  }
  instagram: {
    handle: string
    platform: string
  }
}

export enum GalleryItemStatus {
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

  // collection
  collectionSlug: string
  collectionPayoutAddress: string
  collectionName: string
  collectionImageUrl: string

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

export enum HistoryItemEventType {
  minted = 'minted',
  approved = 'approved',
  transferred = 'transferred',
  listed = 'listed',
  offer_placed = 'offer_placed',
  unlisted = 'unlisted',
  sold = 'sold',
}

export type HistoryItem = {
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

export type User = {
  // creator and/or collector
  address: string
  username: string
  imageUrl: string
  profileUrl: string
  description?: string
}

export type Account = {
  address: string
  user: User
  profile_img_url: string
}

export type TransactionType = {
  from_account: Account
  to_account: Account
  timestamp: string
  transaction_hash: string
}

export type EventType = {
  event_type?:
    | 'approve'
    | 'transfer'
    | 'created'
    | 'offer_entered'
    | 'cancelled'
    | 'successful'
  bid_amount?: number
  payment_token?: TokenType
  total_price?: number
  from_account?: Account
  to_account?: Account
  winner_account?: Account
  transaction?: TransactionType
  created_date?: string
  duration?: number
  starting_price?: number
  ending_price?: number
}

export type AssetType = {
  asset_contract_address?: string
  asset_contract?: {
    address?: string
  }
  token_id?: string
  owner?: {
    address?: string
  }
  last_sale?: EventType
}

export type TokenType = {
  decimals: number
  eth_price: number
  usd_price: number
}

export type account = {
  address: string
  created_date: string
  name: string
  owner: number
  description: string
  external_link: string
  image_url: string
  username: string
  collection: CollectionProps
}

export type CollectionProps = {
  banner_image_url: string
  description: string
  discord_url: string
  external_url: string
  safelist_request_status: string
  image_url: string
  short_description: string
  telegram_url: string
  twitter_username: string
  instagram_username: string
  wiki_url: string
  display_data: imagesData
}

export type imagesData = {
  images: Array<string>
}
