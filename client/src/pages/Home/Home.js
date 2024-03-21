import React from 'react'
import Introtext from '../../components/Home/IntroText'
import "./Home.css"
import Randompicture from '../../components/Home/Randompicturewithinfo'
const Home = () => {
  return (
  
    <div>
      <Randompicture/>
      <Introtext/>
    </div>
  )
}

export default Home