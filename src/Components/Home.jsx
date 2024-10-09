import React from 'react'
import Slider from './Slider'
import Stunning from './Stunning'
import Review from './Review'
import Stunning2 from './Stunning2'
import Stunning3 from './Stunning3'
import Workprocess from './Workprocess'
import Inspirational from './Inspirational'
import Team from './Team'
import Designpost from './Designpost'


function Home(props) {
  return (
    <div>
      <Slider sdata={props.slider}/>
      <Stunning/>
      <Review reviews={props.feed}/>
      <Stunning2 data={props.interior}/>
      <Stunning3/>
      <Workprocess/>
      <Inspirational inspiration={props.inspiration2}/>
      <Team teamdata={props.team}/>
      <Designpost/>
    </div>
  )
}

export default Home
