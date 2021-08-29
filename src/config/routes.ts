export const artworkPathFrom = (contractAddress: string, tokenId: string) =>
  `/artwork/?contractAddress=${contractAddress}&tokenId=${tokenId}`
export const biddingPathFrom = (contractAddress: string, tokenId: string) =>
  `/bid/?contractAddress=${contractAddress}&tokenId=${tokenId}`

export const profilePathFromAddress = (address: string) =>
  `/creator/?address=${address}`
export const profilePathFromUsername = (username: string) =>
  `/creator/?id=${username}`

export const accountPathFrom = (tokenId: string) =>
  `/account/?tokenId=${tokenId}`

export const myProfilePathFromAddress = (address: string) =>
  `/account/?address=${address}`


export const myProfilePathWithView = (view: number) => `/profile/#${view}`

export const myPlaylistsId = (id: number) => `/playList/?id=${id}`
