import * as React from 'react'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'

interface Props {}

export class AboutUs extends React.PureComponent<Props>{
  render() {
    return (
      <div>
        I did craete a Box Component
        <Box isSpace={true}/>
        <Link to='/'>
          <button style={{border: '1px solid grey' , borderRadius: '4px'}}>Go TO Home</button>
        </Link>
      </div>
    )
  }
}

export default AboutUs