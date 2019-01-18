import styled from 'styled-components'

interface BoxContainerProps{
  isSpace?: boolean 
}

const BoxContainer = styled.div<BoxContainerProps>`
  width: 100px;
  height: 100px;
  box-sizzing: border-box;
  border-radius: 4px;
  color: grey;
  ${props => props.isSpace && `
  background-color: #000000;
  `}

`

export {BoxContainer}