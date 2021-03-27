const config = {
  GALLERY_NAME: process.env.GATSBY_GALLERY_NAME || 'Superchief Gallery',
  MARKETPLACE_IFRAME_EMBED_LINK: process.env.GATSBY_MARKETPLACE_IFRAME_EMBED_LINK || 'https://opensea.io/assets/superchief-gallery-nifty?search[sortAscending]=false&search[toggles][0]=ON_AUCTION&search[resultModel]=ASSETS&embed=true',
  CONTACT_EMAIL: process.env.GATSBY_CONTACT_EMAIL || 'superchiefgallerynft@gmail.com',
  AIRTABLE_EMBED_SRC: process.env.GATSBY_AIRTABLE_EMBED_SRC || 'https://airtable.com/embed/shrfdT9wSh4jZWuNy?backgroundColor=gray',
  LOGO_LINK: process.env.GATSBY_LOGO_LINK || 'https://opensea.io/assets/superchief-gallery-nifty?search[resultModel]=ASSETS&search[sortAscending]=false&search[toggles][0]=BUY_NOW',
}

export default config;
