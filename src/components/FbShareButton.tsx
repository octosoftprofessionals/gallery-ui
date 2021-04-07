import React from 'react'

const FbShareButton = () => {
  return (
    <iframe
      src="https://www.facebook.com/plugins/share_button.php?href=XXXXXXXXXXXXXXX%2F&layout=button&size=large&width=77&height=28&appId"
      width="77"
      height="28"
      style={{ border: 'none', overflow: 'hidden', display: 'inline-block' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
    ></iframe>
  )
}

export default FbShareButton
