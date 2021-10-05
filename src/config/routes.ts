export const artworkPathFrom = (contractAddress: string, tokenId: string) =>
  `/artwork/?contractAddress=${contractAddress}&tokenId=${tokenId}`
export const biddingPathFrom = (contractAddress: string, tokenId: string) =>
  `/bid/?contractAddress=${contractAddress}&tokenId=${tokenId}`

export const profilePathFromAddress = (address: string) =>
  `/creator/?address=${address}`
export const profilePathFromUsername = (username: string) =>
  `/creator/?id=${username}`

export const myProfilePathWithView = (view: number) => `/profile/#${view}`
export const myProfilePathWithViewPlaylistOpen = (view: number) =>
  `/profile/?open=true&#${view}`

export const myPlaylistsId = (id: number) => `/playList/?id=${id}`

export const exhibitionSelected = (id: number) => `/exhibition/?titleId=${id}`

export const linkOpensea = (contractAddress: string, tokenId: string) =>
  `https://opensea.io/assets/${contractAddress}/${tokenId}`
