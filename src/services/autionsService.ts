import auctionsMockup from './mockups/auctions'
import accountInfo from './mockups/account'
import { paginatedQuery } from '../Utils'
import { getAssetsByCollectionSlug } from './opensea'
import { ArtworksProps, CreatorProps } from '../types'

export async function getCreators(): Promise<{ creators: CreatorProps[] }> {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({
        creators: auctionsMockup.map(artwork => artwork.creator),
      })
    }, 250)
  })
}

export async function getArtworkAuctions() {
  return await getAssetsByCollectionSlug('superchiefgallery-nifty')
}

export async function getArtworkAuctionsPaginated() {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve(paginatedQuery(auctionsMockup))
    }, 250)
  })
}

export async function getArtwork(
  id: String
): Promise<{ artwork: ArtworksProps }> {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({
        artwork:
          auctionsMockup[
            auctionsMockup.findIndex(auctions => auctions.id === id)
          ],
      })
    }, 250)
  })
}

export async function getHeroArtwork(
  id: String
): Promise<{ artwork: ArtworksProps }> {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({
        artwork:
          auctionsMockup[Math.floor(Math.random() * auctionsMockup.length)],
      })
    }, 250)
  })
}

export async function getCreator({
  creatorId,
}): Promise<{ creator: CreatorProps }> {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({
        creator:
          auctionsMockup[
            auctionsMockup.findIndex(
              artwork =>
                artwork.creator.username.toLowerCase() ===
                creatorId.toLowerCase()
            )
          ]?.creator,
      })
    }, 250)
  })
}

export async function getAccount(
  contractAddress: String
): Promise<{ account: CreatorProps }> {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({
        account: accountInfo[0],
      })
    }, 250)
  })
}
