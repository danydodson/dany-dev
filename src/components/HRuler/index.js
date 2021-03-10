import React from 'react'
import styled from 'styled-components'

const HRuler = ({ verticalMargin, widthInPercent, ...otherProps }) => {
  // Set defaults
  const width = widthInPercent ? `${widthInPercent}%` : '100%'
  const margin = verticalMargin ? `${verticalMargin} auto` : '0.5rem auto'
  return <StyledHRuler className='custom-hr' width={width} margin={margin} {...otherProps} />
}

export default HRuler

const StyledHRuler = styled.hr`
  display: block;
  height: 1;
  border: 0;
  border-top: 1px;
  border-top-style: solid;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`
