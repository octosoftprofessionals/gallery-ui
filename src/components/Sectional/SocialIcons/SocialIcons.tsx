import React from "react"

import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaInstagram,
  FaDiscord,
  FaMedium,
  FaLinkedin,
  FaPodcast,
} from "react-icons/fa"
import IconLink from "../../IconLink/IconLink"

import classes from "./SocialIcons.module.css"

const SocialIcons: React.FC = () => {
  return (
    <div className={classes.SocialIcons}>
     
    
      <IconLink
        icon={FaTwitter}
        to="https://twitter.com/SUPERCHIEFTV"
        externalLink={true}
      />
      <IconLink
        icon={FaYoutube}
        to="https://www.youtube.com/channel/UCNZ91jvRGk58hJGLTvABPAw"
        externalLink={true}
      />
      <IconLink
        icon={FaFacebook}
        to="https://www.facebook.com/SuperchiefGalleryLA/"
        externalLink={true}
      />
      <IconLink
        icon={FaInstagram}
        to="https://www.instagram.com/superchiefgallery/"
        externalLink={true}
      />

    </div>
  )
}

export default SocialIcons
