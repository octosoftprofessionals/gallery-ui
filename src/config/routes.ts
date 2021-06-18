export const artworkPathFrom = (contractAddress: string, tokenId: string) =>
  `/artwork/?address=${contractAddress}&tokenId=${tokenId}`
export const biddingPathFrom = (contractAddress: string, tokenId: string) =>
  `/bid/?address=${contractAddress}&tokenId=${tokenId}`
export const profilePathFromAddress = address => `/creator/?address=${address}`
export const accountPathFrom = (tokenId: string) =>
  `/account/?tokenId=${tokenId}`
