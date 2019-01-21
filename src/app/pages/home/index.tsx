import * as React from 'react'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'

interface Props {}

export class Home extends React.PureComponent<Props>{
  render() {
    return (
      <div>
        Project is at Home page<br/>
        <Link to='/about'>
        <button style={{border: '1px solid grey' , borderRadius: '4px'}}>Go TO AboutUs</button>
        </Link>
      </div>
    )
  }
}

export default Home