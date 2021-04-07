import React from 'react'

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
} from 'react-icons/fa'
import IconLink from '../IconLink'

import config from '../../config'

const SocialIcons: React.FC = () => {
  return (
    <>
      {
        config.TWITTER_LINK &&
        <IconLink
          icon={FaTwitter}
          to={config.TWITTER_LINK}
          externalLink={true}
        />
      }
      {
        config.YOUTUBE_LINK &&
        <IconLink
          icon={FaYoutube}
          to={config.YOUTUBE_LINK}
          externalLink={true}
        />
      }
      {
        config.FACEBOOK_LINK &&
        <IconLink
          icon={FaFacebook}
          to={config.FACEBOOK_LINK}
          externalLink={true}
        />
      }
      {
        config.INSTAGRAM_LINK &&
        <IconLink
          icon={FaInstagram}
          to={config.INSTAGRAM_LINK}
          externalLink={true}
        />
      }
    </>
  )
}

export default SocialIcons
