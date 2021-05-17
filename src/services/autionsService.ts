// import { auctions } from '../config/api'
import auctionsMockup from './mockups/auctions'
import { paginatedQuery } from '../Utils'

// TODO: replace with API Call
// async function getArtworkAuctions(
//   page: number,
//   type: string,
//   size: number = 12,
// ) {
//   const res = await auctions.get(
//     `/auctions/${type}?offset=${page}&limit=${size}`,
//   );

//   const {data} = res;

//   if (res.status === 200) {
//     return data;
//   } else {
//     return Promise.reject(data);
//   }
// }

// export async function getArtworkAuctions(
//   page: number,
//   type: string,
//   size: number = 12
// ) {
//   return new Promise(resolve => {
//     setTimeout(function () {
//       resolve({
//         content: {
//           data: {
//             artworks: auctionsMockup.slice(page * size, page + size),
//           },
//         },
//         pageable: {
//           sort: {
//             sorted: false,
//             unsorted: true,
//             empty: true,
//           },
//           page: page,
//           page_number: page,
//           page_size: size,
//           paged: true,
//           unpaged: false,
//         },
//         last: true,
//         total_pages: Math.floor(auctionsMockup.length / size),
//         total_elements: auctionsMockup.length,
//         number_of_elements: auctionsMockup.slice(page * size, page + size)
//           .length,
//         size: size,
//         first: true,
//         number: 0,
//         sort: {
//           sorted: false,
//           unsorted: true,
//           empty: true,
//         },
//       })
//     }, 250)
//   })
// }

export async function getArtworkAuctions() {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({
        artworks: auctionsMockup,
      })
    }, 250)
  })
}

export async function getArtworkAuctionsPaginated() {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve(paginatedQuery(auctionsMockup))
    }, 250)
  })
}

export async function getArtwork(id: String) {
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

export async function getHeroArtwork(id: String) {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({
        artwork:
          auctionsMockup[Math.floor(Math.random() * auctionsMockup.length)],
      })
    }, 250)
  })
}

export async function getCreator(id: String) {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve({
        creator:
          auctionsMockup[
            auctionsMockup.findIndex(auctions => auctions.id === id)
          ].creator,
      })
    }, 250)
  })
}
