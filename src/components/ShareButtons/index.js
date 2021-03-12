import React from 'react'
import siteConfig from '../../../data/site-config'
import { EmailShareButton, FacebookShareButton, RedditShareButton, TwitterShareButton, LinkedinShareButton, EmailIcon, FacebookIcon, RedditIcon, TwitterIcon, LinkedinIcon } from 'react-share'

import './styles.scss'

const ShareButtons = ({ location }) => {
  return (
    <div className='share-buttons-wrap'>
      {siteConfig.shareButtons.email && (
        <EmailShareButton url={location}>
          <EmailIcon round size={32} />
        </EmailShareButton>
      )}
      {siteConfig.shareButtons.facebook && (
        <FacebookShareButton url={location}>
          <FacebookIcon round size={32} />
        </FacebookShareButton>
      )}
      {siteConfig.shareButtons.twitter && (
        <TwitterShareButton url={location}>
          <TwitterIcon round size={32} />
        </TwitterShareButton>
      )}
      {siteConfig.shareButtons.reddit && (
        <RedditShareButton url={location}>
          <RedditIcon round size={32} />
        </RedditShareButton>
      )}
      {siteConfig.shareButtons.linkedIn && (
        <LinkedinShareButton url={location}>
          <LinkedinIcon round size={32} />
        </LinkedinShareButton>
      )}
    </div>
  )
}

export default ShareButtons
