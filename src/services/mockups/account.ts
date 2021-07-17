import { CreatorProps } from '../../types'

const imgUrls = [
  'https://f8n-ipfs-production.imgix.net/Qme7ShWfH2GHnbKHo9Vb41PxMwLunLxgKGebF94RzjGhCs/nft.png',
  'https://cdn.cultofmac.com/wp-content/uploads/2011/10/youngstevejobs.jpg',
  'https://f8n-ipfs-production.imgix.net/QmTf4rxGkyryv6Vnm9mFJxWTEXcqjmtgxQXz7m5cqmLFsv/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/QmeFJYbYeN6cfojypwzyAUYNyDFxFUD5tvjTG23LEF6xNY/nft.jpg',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
]

const bannerUrls = [
  'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80',
  'https://images.unsplash.com/photo-1465060810938-30bbe7c40e76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=815&q=80',
  'https://images.unsplash.com/photo-1598029018509-3cceeec6faba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
  'https://images.unsplash.com/photo-1620120966883-d977b57a96ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
  'https://f8n-ipfs-production.imgix.net/Qme6A7qARnvZsn5RNSuJS8MyZjzzev4afcr6JVJxjciUvB/nft.png',
  'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg',
]

const externalLink = ['https://imps.me']

const name = [
  'Paul Cézanne',
  'Salvador Dalí',
  'Pablo Picasso',
  'Wassily Kandinsky',
]

const address = [
  '0xf766b3e7073f5a6483e27de20ea6f59b30b28f87',
  '0xf766b3e7073f5a6483e27de20ea6f59b30b28f88',
  '0xf766b3e7073f5a6483e27de20ea6f59b30b28f89',
  '0xf766b3e7073f5a6483e27de20ea6f59b30b28f90',
]

const owner = [106625, 106626, 106627, 106628]

const description = [
  '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  '“Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.”',
  '“Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim.”',
  '“Iaculis eu non diam phasellus vestibulum.”',
]
const accountNames = [
  'asimov',
  'lovecraft',
  'poe',
  'williams',
  'dickens',
  'daVinci',
]

const randImgUrl = () => {
  return imgUrls[Math.floor(Math.random() * imgUrls.length)]
}
const randBannerUrl = () => {
  return bannerUrls[Math.floor(Math.random() * bannerUrls.length)]
}
const randAddress = () => {
  return address[Math.floor(Math.random() * address.length)]
}
const randAccountName = () => {
  return accountNames[Math.floor(Math.random() * accountNames.length)]
}
const randDescription = () => {
  return description[Math.floor(Math.random() * description.length)]
}
const randName = () => {
  return name[Math.floor(Math.random() * name.length)]
}

const randOwner = () => {
  return owner[Math.floor(Math.random() * owner.length)]
}

function fillAccount(size): CreatorProps[] {
  const account: CreatorProps[] = []
  for (let i = 0; i < size; i++) {
    account.push({
      address: randAddress(),
      created_date: '2018-07-17T13:09:06.212381',
      name: randName(),
      owner: randOwner(),
      description: randDescription(),
      external_link: externalLink[0],
      image_url: randImgUrl(),
      username: randAccountName(),
      collection: {
        banner_image_url: randBannerUrl(),
        description: randDescription(),
        discord_url: 'https://discord.com/',
        external_url: externalLink[0],
        safelist_request_status: 'verified',
        image_url: randImgUrl(),
        short_description: randDescription(),
        telegram_url: 'https://telegram.org/',
        twitter_username: randAccountName(),
        instagram_username: randAccountName(),
        wiki_url: 'https://discord.com/',
        display_data: {
          images: [randImgUrl(), randImgUrl(), randImgUrl(), randImgUrl()],
        },
      },
    })
  }
  return account
}

const accountInfo = fillAccount(1)
export default accountInfo
