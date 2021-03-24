import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin, faMedium, faDev } from '@fortawesome/free-brands-svg-icons'
import HeaderIcon from '../HeaderIcon'
import ProgressBar from './ProgressBar'

import siteConfig from '../../../data/site-config'
import styleConfig from '../../../data/style-config'

const Header = ({ siteTitle, showTitle, isPostTemplate }) => {
  return (
    <StyledMainHeader className='main-header'>
      {/* Google AdSense */}
      {siteConfig.googleAdSenseId && siteConfig.googleAdSenseId !== '' && <script data-ad-client={siteConfig.googleAdSenseId} async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' />}

      {isPostTemplate && siteConfig.useScrollIndicator && <ProgressBar />}

      <StyledMainHeaderInner className='main-header-inner'>
        <h1 style={{ fontSize: '1.5rem' }}>{showTitle && <Link to='/'>{`${siteTitle}`}</Link>}</h1>

        <StyledMediaIcons>
          <HeaderIcon accountInfo={siteConfig.socialMediaLinks.devto} preHref={'https://dev.to/'} mediaName={'dev'} icon={faDev} />
          <HeaderIcon accountInfo={siteConfig.socialMediaLinks.github} preHref={'https://github.com/'} mediaName={'github'} icon={faGithub} />
          <HeaderIcon accountInfo={siteConfig.socialMediaLinks.email} mediaName={'email'} preHref={'mailto:'} icon={faEnvelope} />
          <HeaderIcon accountInfo={siteConfig.socialMediaLinks.facebook} mediaName={'facebook'} preHref={'https://facebook.com/'} icon={faFacebook} />
          <HeaderIcon accountInfo={siteConfig.socialMediaLinks.instagram} mediaName={'instagram'} preHref={'https://instagram.com/'} icon={faInstagram} />
          <HeaderIcon accountInfo={siteConfig.socialMediaLinks.twitter} mediaName={'twitter'} preHref={'https://twitter.com/'} icon={faTwitter} />
          <HeaderIcon accountInfo={siteConfig.socialMediaLinks.linkedIn} mediaName={'linkedin'} preHref={'https://linkedin.com/'} icon={faLinkedin} />
          <HeaderIcon accountInfo={siteConfig.socialMediaLinks.medium} mediaName={'medium'} preHref={'https://medium.com/@'} icon={faMedium} />
        </StyledMediaIcons>
      </StyledMainHeaderInner>
    </StyledMainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default withTheme(Header)

const StyledMainHeader = styled.header`
  font-family: ${styleConfig.fontMain + styleConfig.fontsBackUp};
  height: 55px;
  margin-top: ${siteConfig.useScrollIndicator ? '-5px' : '0'};
  margin-bottom: 1rem;
`

const StyledMainHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidthSite}px;
  padding: 0.6rem;
  h1 {
    font-weight: 400;
  }
`

const StyledMediaIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  * {
    font-size: 1.7rem;
  }

  @media (max-width: 400px) {
    * {
      margin: 0 0.15rem;
    }
  }
`
