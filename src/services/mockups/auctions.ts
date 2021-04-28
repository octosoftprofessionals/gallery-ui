const videoUrls = ['http://localhost:8000/float.mp4']
const stateArt = ['auction', 'reserve', 'sold']

const createdInArt = [
  '2020/06/19 11:43:00 AM',
  '2020/04/17 11:43:00 PM',
  '2020/04/18 01:13:30 PM',
  '2020/04/26 11:39:50 AM',
]

const endingInArt = [
  '2021/06/19 11:43:00 AM',
  '2021/05/17 11:43:00 PM',
  '2021/06/18 01:13:30 PM',
  '2021/07/26 11:39:50 AM',
]
const followersArt = [13, 45, 123, 509582]
const priceArt = [
  '5.567',
  '15.234',
  '0.11',
  '0.521',
  '0.1520',
  '2.1020',
  '1.670',
  '4.240',
  '0.001',
  '',
]

const bioArt = [
  'Eiusmod veniam Lorem anim aliquip reprehenderit proident mollit adipisicing aute labore et. Lorem dolor elit enim culpa anim. Fugiat pariatur proident occaecat dolor enim aute duis. Pariatur dolore nostrud cillum ullamco. Et incididunt veniam qui excepteur irure dolore quis do. Do Lorem amet deserunt do exercitation cillum eu. Sit cillum nostrud qui pariatur aliqua.',

  'Cillum sunt anim ut irure fugiat irure occaecat sint anim ullamco est elit minim commodo. Ullamco ea duis labore culpa sint culpa reprehenderit dolor irure ea aute ex reprehenderit. Officia ex ex occaecat adipisicing ullamco fugiat sit fugiat ex consectetur voluptate aliquip. Aute irure veniam non ipsum esse ullamco dolore duis in eu consequat culpa deserunt cupidatat. Dolore cupidatat dolore tempor excepteur ea. Esse nisi officia ullamco velit labore consequat. Dolore labore reprehenderit aute qui enim voluptate irure anim consectetur ea et elit nostrud exercitation.',

  'Eiusmod aliquip labore sint ex magna incididunt labore. Ipsum tempor culpa nisi qui consectetur labore irure aute dolor veniam nisi cillum fugiat voluptate. Aliquip ut dolor do magna dolor voluptate reprehenderit ea magna excepteur in.',
]

const imgUrls = [
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
]

const authorsNames = [
  'Asimov',
  'Lovecraft',
  'Poe',
  'Williams',
  'Dickens',
  'DaVinci',
]

const artworkTitles = [
  'Asimov',
  'Lovecraft',
  'Poe',
  'Williams',
  'Dickens',
  'DaVinci',
]

const randPublicKey = () => {
  return 'XxdXXXXXXXXXX4XXXyXXXXXXXXXXXXXXX'.replace(/[Xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'X' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const randIDs = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const randUserIndex = index => {
  return followersArt[Math.floor(Math.random() * index * followersArt.length)]
}

const randCreatedDate = () => {
  const createdIn =
    createdInArt[Math.floor(Math.random() * createdInArt.length)]
  return new Date(createdIn)
}

const randEndingInArt = () => {
  const endingIn = endingInArt[Math.floor(Math.random() * endingInArt.length)]
  return new Date(endingIn)
}

const randAsset = () => {
  const assetUrls = imgUrls.concat(videoUrls)
  return assetUrls[Math.floor(Math.random() * assetUrls.length)]
}

const randImgUrl = () => {
  return imgUrls[Math.floor(Math.random() * imgUrls.length)]
}

const randAuthorName = () => {
  return stateArt[Math.floor(Math.random() * authorsNames.length)]
}

const randArtworkTitle = () => {
  return stateArt[Math.floor(Math.random() * artworkTitles.length)]
}

const randStateArt = () => {
  return stateArt[Math.floor(Math.random() * stateArt.length)]
}

const randPriceArt = () => {
  return priceArt[Math.floor(Math.random() * priceArt.length)]
}

const randBioArt = () => {
  return bioArt[Math.floor(Math.random() * bioArt.length)]
}

const randFollowersArt = () => {
  return followersArt[Math.floor(Math.random() * followersArt.length)]
}

type ArtworksProps = {
  id: String
  name: String
  description: String
  assetIPFSPath: String
  metadataIPFSPath: String
  width: Number
  height: Number
  duration: Number
  mimeType: String
  mintTxHash: String
  muxStatus: String
  muxMaxResolution: String
  muxPlaybackId: String
  assetId: String
  assetProcessor: String
  assetStatus: String
  muxId: String
  tokenId: Number
  status: String
  hiddenAt: String
  deletedAt: String
  moderationStatus: String
}

type CreatorProps = {
  userIndex: Number
  publicKey: String
  username: String
  profileImageUrl: String
  coverImageUrl: String
  name: String
  bio: String
  isApprovedCreator: boolean
  moderationStatus: String
  joinedWaitlistAt: String
  createdAt: Date
  firstName: String
  lastName: String
  isAdmin: boolean
  followers: Number
  links: LinksProps
}

type LinksProps = {
  tiktok: {
    handle: String
    platform: String
  }
  twitch: {
    handle: String
    platform: String
  }
  discord: {
    handle: String
    platform: String
  }
  twitter: {
    handle: String
    platform: String
  }
  website: {
    handle: String
    platform: String
  }
  youtube: {
    handle: String
    platform: String
  }
  facebook: {
    handle: String
    platform: String
  }
  snapchat: {
    handle: String
    platform: String
  }
  instagram: {
    handle: String
    platform: String
  }
}

type AuctionProps = {
  auction_id: String
  type: String
  created_date: Date
  state: String
  current_bid: String
  ends_at: Date
  creator: CreatorProps
  artworks: ArtworksProps[]
}

function fillArtworks(size): ArtworksProps[] {
  const artworks: ArtworksProps[] = []
  artworks.push({
    id: randIDs(),
    assetIPFSPath: randAsset(),
    assetId: randPublicKey(),
    assetProcessor: 'COCONUT',
    assetStatus: 'SUCCESS',
    deletedAt: 'null',
    description: randBioArt(),
    duration: 16.458332,
    height: 1920,
    width: 1280,
    hiddenAt: 'null',
    metadataIPFSPath:
      'QmYnFsNTQ3v9wSnEHPmP1uPQfB6zEDvxzYTV6831zdCYMD/metadata.json',
    mimeType: 'video/mp4',
    mintTxHash: `${randPublicKey()}mP1uPQfB6zEsNTQ3v9`,
    moderationStatus: 'ACTIVE',
    muxId: randIDs(),
    muxMaxResolution: 'high',
    muxPlaybackId: randIDs(),
    muxStatus: 'SUCCESS',
    name: randArtworkTitle(),
    status: randStateArt(),
    tokenId: randFollowersArt(),
  })
  return artworks
}

function fillAuctions(size): AuctionProps[] {
  const auctions: AuctionProps[] = []
  for (let i = 0; i < size; i++) {
    auctions.push({
      auction_id: `auction_id_${i}`,
      type: 'LIVE',
      created_date: randCreatedDate(),
      current_bid: randPriceArt(),
      ends_at: randEndingInArt(),
      creator: {
        bio: randBioArt(),
        coverImageUrl: randImgUrl(),
        createdAt: randCreatedDate(),
        firstName: randAuthorName(),
        isAdmin: false,
        isApprovedCreator: true,
        joinedWaitlistAt: null,
        lastName: randAuthorName(),
        name: randAuthorName(),
        publicKey: randPublicKey(),
        moderationStatus: 'ACTIVE',
        username: randAuthorName(),
        profileImageUrl: randImgUrl(),
        userIndex: randUserIndex(i),
        followers: randFollowersArt(),
        links: {
          discord: { handle: `${randArtworkTitle()}`, platform: 'discord' },
          facebook: { handle: `${randArtworkTitle()}`, platform: 'facebook' },
          instagram: { handle: `${randArtworkTitle()}`, platform: 'instagram' },
          snapchat: { handle: `${randArtworkTitle()}`, platform: 'snapchat' },
          tiktok: { handle: `${randArtworkTitle()}`, platform: 'tiktok' },
          twitch: { handle: `${randArtworkTitle()}`, platform: 'twitch' },
          twitter: { handle: `${randArtworkTitle()}`, platform: 'twitter' },
          website: { handle: `${randArtworkTitle()}`, platform: 'website' },
          youtube: { handle: `${randArtworkTitle()}`, platform: 'youtube' },
        },
      },
      artworks: fillArtworks(6),
      state: randStateArt(),
    })
  }
  return auctions
}

export default fillAuctions(60)
