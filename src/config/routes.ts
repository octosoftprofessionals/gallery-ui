export const artworkPathFrom = (contractAddress: string, tokenId: string) =>
  `/artwork/?contractAddress=${contractAddress}&tokenId=${tokenId}`
export const biddingPathFrom = (contractAddress: string, tokenId: string) =>
  `/bid/?contractAddress=${contractAddress}&tokenId=${tokenId}`
export const profilePathFromAddress = address => `/creator/?address=${address}`
export const accountPathFrom = (tokenId: string) =>
  `/account/?tokenId=${tokenId}`
