const config = {
  GALLERY_NAME: process.env.GATSBY_GALLERY_NAME,
  IFRAME_EMBED_LINK: process.env.GATSBY_IFRAME_EMBED_LINK || 'https://opensea.io/collection/superchief-gallery-nft?embed=true&default=true',
  CONTACT_EMAIL: process.env.GATSBY_CONTACT_EMAIL || 'superchiefgallerynft@gmail.com',
  AIRTABLE_EMBED_SRC: process.env.GATSBY_AIRTABLE_EMBED_SRC || 'https://airtable.com/embed/shrfdT9wSh4jZWuNy?backgroundColor=gray&default=true'
}

export default config;
