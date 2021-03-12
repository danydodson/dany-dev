import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import siteConfig from '../../../data/site-config'
import RSS from '../../../static/media/svgs/rss.svg'
import { setThemeVars } from '../../util/theme-helper'

const Footer = () => {
  return (
    <StyledFooter className='main-footer'>
      <div />
      <div>
        <span>© {new Date().getFullYear()} </span>
        <StyledA href={siteConfig.footerLink} target='_blank' rel='noopener noreferrer'>
          {siteConfig.author}
        </StyledA>
      </div>
      <Link to='/rss.xml'>
        <StyledRSS />
      </Link>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  margin-top: 1rem;
  padding: 1rem;

  @media (max-width: 500px) {
    font-size: 0.77rem;
  }
`
const StyledA = styled.a``

const StyledRSS = styled(RSS)`
  width: 20px;
  height: 20px;
  fill: ${() => setThemeVars('#aaa', '#888')};
`
