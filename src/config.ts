const config = {
  GALLERY_NAME: process.env.GATSBY_GALLERY_NAME ?? 'MetXR',
  MARKETPLACE_IFRAME_EMBED_LINK:
    process.env.GATSBY_MARKETPLACE_IFRAME_EMBED_LINK ??
    'https://opensea.io/collection/metxr?embed=true',
  CONTACT_EMAIL: process.env.GATSBY_CONTACT_EMAIL ?? 'metxr@protonmail.com',
  AIRTABLE_EMBED_SRC:
    process.env.GATSBY_AIRTABLE_EMBED_SRC ??
    'https://airtable.com/embed/shr8HBrZjylr7c5cp?backgroundColor=gray',
  LOGO_LINK: process.env.GATSBY_LOGO_LINK ?? 'https://opensea.io/assets/metxr',
  TWITTER_LINK:
    process.env.GATSBY_TWITTER_LINK ?? 'https://twitter.com/METXROfficial',
  INSTAGRAM_LINK:
    process.env.GATSBY_INSTAGRAM_LINK ?? 'https://www.instagram.com/metxr.nft/',
  THEME_COLOR: '#e0bd70',
  TEXT_LINK_COLOR: '#bd9f5d',
  OPENSEA_API_KEY: process.env.GATSBY_OPENSEA_API_KEY,
  OPENSEA_GALLERY_ADDRESS: process.env.GATSBY_OPENSEA_GALLERY_ADDRESS,
  API_URL: process.env.GATSBY_API_URL ?? "http://localhost:3000/v1",
}

export default config
