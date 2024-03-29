import { ArtworksProps } from '../../types'

const videoUrls = [
  'https://fnd.fleek.co/fnd-prod/QmWLWhYZyjTe13BF22SpSo6RdnAoA2LsPuBgzFbdmuSvcg/nft.mp4',
  'https://fnd.fleek.co/fnd-prod/QmWgrXjKUXs8Eo5ceFar4EqsVn9G88y7BXte6iMRRYjNrH/nft.mp4',
  'https://fnd.fleek.co/fnd-prod/QmbFEbfMmaofj6X4vkjTWALGcXzoptVxb3gCFjXd3G4phe/nft.mp4',
]

const videoPreview =
  'https://fnd.fleek.co/fnd-prod/QmZrUYz2xNKiRoKa4ecgjekyMs8ohV3zYKYH1FFS7gkcUA/nft_preview.mp4'

const gifUrls = [
  'https://f8n-production.imgix.net/creators/profile/0x46whfhj-fcrgb-1000x1000-gif-19nh67.gif',
  'https://f8n-production.imgix.net/creators/profile/fcusz42mh-obs-gif-4i7ctk.gif',
  'https://f8n-production.imgix.net/creators/profile/y06tgrj7i-background-SuperChief-gif-pnvm71.gif',
  'https://f8n-production.imgix.net/creators/profile/c8gley51s-nyan-cat-large-gif-gif-mbf1sa.gif',
]

const stateArt = ['auction', 'reserve', 'sold']

const createdInArt = [
  '2021/06/19 11:43:00 AM',
  '2019/07/17 11:43:00 PM',
  '2021/09/18 01:13:30 PM',
  '2020/08/26 11:39:50 AM',
  '2021/08/26 11:39:50 AM',
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

const randVideoUrls = () => {
  return videoUrls[Math.floor(Math.random() * videoUrls.length)]
}

const randImgUrl = () => {
  return imgUrls[Math.floor(Math.random() * imgUrls.length)]
}

const randAllImgGifUrl = () => {
  const allImgGifUtls = imgUrls.concat(gifUrls)
  return allImgGifUtls[Math.floor(Math.random() * allImgGifUtls.length)]
}

const randAuthorName = () => {
  return authorsNames[Math.floor(Math.random() * authorsNames.length)]
}

const randArtworkTitle = () => {
  return artworkTitles[Math.floor(Math.random() * artworkTitles.length)]
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

let mimeTypeAsset = ''

const randAsset = () => {
  const assetIPFSPath = imgUrls.concat(videoUrls)
  if (Math.floor(Math.random() * assetIPFSPath.length) % 2 === 0) {
    mimeTypeAsset = 'video/mp4'
    return randVideoUrls()
  } else {
    mimeTypeAsset = 'img'
    return randImgUrl()
  }
}

function fillAuctions(size): ArtworksProps[] {
  const auctions: ArtworksProps[] = []
  for (let i = 0; i < size; i++) {
    auctions.push({
      id: `${i}`,
      name: randArtworkTitle(),
      description: randBioArt(),
      assetIPFSPath: randAsset(),
      assetIPFSPreview: `${videoPreview}`,
      metadataIPFSPath:
        'QmYnFsNTQ3v9wSnEHPmP1uPQfB6zEDvxzYTV6831zdCYMD/metadata.json',
      width: 1280,
      height: 1920,
      duration: randEndingInArt(),
      mimeType: mimeTypeAsset,
      mintTxHash: `${randPublicKey()}mP1uPQfB6zEsNTQ3v9`,
      muxStatus: 'SUCCESS',
      muxMaxResolution: 'high',
      muxPlaybackId: randIDs(),
      assetId: randPublicKey(),
      assetProcessor: 'COCONUT',
      assetStatus: randStateArt(),
      muxId: randIDs(),
      tokenId: randFollowersArt(),
      status: randStateArt(),
      deletedAt: 'null',
      moderationStatus: 'ACTIVE',
      hiddenAt: 'null',
      creator: {
        bio: randBioArt(),
        coverImageUrl: randAllImgGifUrl(),
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
        profileImageUrl: randAllImgGifUrl(),
        userIndex: i,
        followers: randFollowersArt(),
        following: randFollowersArt(),
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
      price: randPriceArt(),
    })
  }
  return auctions
}

const allAuctions = fillAuctions(60)
export default allAuctions
