import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterIcon = ({ accountInfo, mediaName, preHref, icon }) => {
  const accountName = accountInfo.accountName ? accountInfo.accountName : accountInfo.emailAddress

  return (
    <>
      {accountName && accountName && accountInfo.showFooterIcon && (
        <a className='icon-fa-link' href={`${preHref}${accountName}`} target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon className={`icon-${mediaName} icon-fa`} icon={icon} />
        </a>
      )}
    </>
  )
}

FooterIcon.propTypes = {
  accountInfo: PropTypes.object.isRequired,
  mediaName: PropTypes.string,
  preHref: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
}

export default FooterIcon
