import React from 'react'
import Layout from '../../components/Layout'
import PlaylistPage from '../../components/PlaylistPage'

const imgUrls = [
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
]
const randImgUrl = () => {
  return imgUrls[Math.floor(Math.random() * imgUrls.length)]
}
const randIDs = () => {
  return 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
function fillartworkCardAddPlayList(size) {
  const artworkCardAddPlayList = []
  for (let i = 0; i < size; i++) {
    artworkCardAddPlayList.push({
      id: `${randIDs()}`,
      imageUrl: randImgUrl(),
      videoUrl: null,
      inPlaylist: false,
    })
  }
  return artworkCardAddPlayList
}

const name = [
  'Paul Cézanne',
  'Salvador Dalí',
  'Pablo Picasso',
  'Wassily Kandinsky',
]
const randName = () => {
  return name[Math.floor(Math.random() * name.length)]
}

const ObjetArrayPlaylist = {
  Itemss: fillartworkCardAddPlayList(6),
  description:
    'Velit laboris magna laborum occaecat. Tempor exercitation veniam est fugiat irure dolor ipsum commodo anim consectetur consectetur irure nisi fugiat. Id qui ad exercitation reprehenderit sit ipsum in ipsum sit sunt esse magna laboris magna laborum occaecat. Tempor exercitation veniam est fugiat irure dolor ipsum commodo anim consectetur consectetur irure nisi fugiat. Id qui ad exercitation reprehenderit sit ipsum in ipsum sit sunt esse magna.',
  title: randName(),
}

const playListPage = () => {
  return (
    <Layout>
      <PlaylistPage
        Itemss={ObjetArrayPlaylist.Itemss}
        title={ObjetArrayPlaylist.title}
        description={ObjetArrayPlaylist.description}
      />
    </Layout>
  )
}

export default playListPage
