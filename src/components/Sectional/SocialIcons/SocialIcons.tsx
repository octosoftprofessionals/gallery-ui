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
        icon={FaTelegram}
        to="http://t.me/X"
        externalLink={true}
      />
      <IconLink
        icon={FaTwitter}
        to="https://twitter.com/X"
        externalLink={true}
      />
      <IconLink
        icon={FaYoutube}
        to="https://www.youtube.com/channel/X?sub_confirmation=1"
        externalLink={true}
      />
      <IconLink
        icon={FaFacebook}
        to="https://www.facebook.com/X"
        externalLink={true}
      />
      <IconLink
        icon={FaMedium}
        to="https://medium.com/@X"
        externalLink={true}
      />
      <IconLink
        icon={FaDiscord}
        to="https://discord.com/channels/X"
        externalLink={true}
      />
      <IconLink
        icon={FaInstagram}
        to="https://www.instagram.com/X"
        externalLink={true}
      />
      <IconLink
        icon={FaLinkedin}
        to="https://www.linkedin.com/groups/X"
        externalLink={true}
      />
      <IconLink
        icon={FaPodcast}
        to="https://X"
        externalLink={true}
      />
    </div>
  )
}

export default SocialIcons
