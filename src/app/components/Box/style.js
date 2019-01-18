import styled from 'styled-components';

const BoxContainer = styled.div`
  width: 100px;
  height: 100px;
  box-sizzing: border-box;
  border-radius: 4px;
  color: grey;
  ${((isSpace) => isSpace && `

  `)}
`

export {BoxContainer}