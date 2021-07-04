const imgUrls = [
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
]

const name = [
  'Chayenne Alvarez',
  'Luis Miguel',
  'Ricardo Mollo',
  'Esteban Furtado',
]

const opinion = [
  '“My own success in the crypto art space has afforded me the opportunity to support artists whose work lights me up, which has been just as exciting my own art practice. ',
  '“Punk has taught me that there’s always a work-around for any obstacle. You just have to push through and make it happen… With NFTs, I want to push at what’s possible myself. ”',
  '“For web3 to flourish, you need creative individuals. Programmers built the technical infrastructure and economic framework, but artists also have an important role to play. ”',
  '“I want people to experience what I feel when I collect another artist’s work, which is a feeling of interdependence, optimism, and hope.”',
]
const authorsNames = [
  'Asimov',
  'Lovecraft',
  'Poe',
  'Williams',
  'Dickens',
  'DaVinci',
]

const position = [
  'Frontend Developer',
  'Account Manager',
  'Communications Director',
  'Senior Brand Designer',
  'Community Sspecialist',
  'Cofounder CEO',
  'Head of Operations',
]

const randImgUrl = () => {
  return imgUrls[Math.floor(Math.random() * imgUrls.length)]
}
const randAuthorName = () => {
  return authorsNames[Math.floor(Math.random() * authorsNames.length)]
}
const randOpinion = () => {
  return opinion[Math.floor(Math.random() * opinion.length)]
}
const randName = () => {
  return name[Math.floor(Math.random() * name.length)]
}
const randPosition = () => {
  return position[Math.floor(Math.random() * position.length)]
}

type ReviewCard = {
  creatorImageUrl: String
  creatorUsername: String
  opinion: String
  imageUrl: String
  userName: String
  position: String
}

function fillReviewCard(size): ReviewCard[] {
  const reviewCard: ReviewCard[] = []
  for (let i = 0; i < size; i++) {
    reviewCard.push({
      creatorImageUrl: randImgUrl(),
      creatorUsername: randAuthorName(),
      opinion: randOpinion(),
      imageUrl: randImgUrl(),
      userName: randName(),
      position: randPosition(),
    })
  }
  return reviewCard
}
export default fillReviewCard(6)
