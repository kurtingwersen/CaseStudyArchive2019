import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
<div>
  <div className="Hero">
    <div className="HeroGroup">
      <h1>Case Study archive</h1>
      <p>Please use these case studies as inspiration</p>
      <Link to="/page-2/">Watch the video</Link>
      <div className="Logos">
        <img src={require('../images/logo-sketch.png')} width="50" />  
        <img src={require('../images/logo-figma.png')} width="50" />  
        <img src={require('../images/logo-studio.png')} width="50" />  
        <img src={require('../images/logo-framer.png')} width="50" />  
        <img src={require('../images/logo-react.png')} width="50" />  
        <img src={require('../images/logo-swift.png')} width="50" />  
      </div>
      <Wave />
    </div>
  </div>
  <div className="Cards">
    <h2>11 courses, more coming</h2>
    <div className="CardGroup">
      <Card 
        title="React for designers"
        text="12 sections"
        image={require('../images/wallpaper.jpg')}
      />
      <Card 
        title="Other thing"
        text="12 sections"
        image={require('../images/wallpaper2.jpg')}
      />
      <Card 
        title="Doodleburger"
        text="12 sections"
        image={require('../images/wallpaper3.jpg')}
      />
      <Card 
        title="Killswitch Engage"
        text="12 sections"
        image={require('../images/wallpaper4.jpg')}
      />
    </div>
  </div>
  <Section 
    image={require('../images/wallpaper2.jpg')}
    logo={require('../images/logo-react.png')}
    title="React for Designers"
    text="Slow-carb pork belly heirloom poutine wayfarers selfies chillwave ethical roof party everyday carry kitsch. Pug pabst synth DIY meditation. Freegan hexagon hoodie austin offal direct trade vegan, vape four loko waistcoat. Yuccie palo santo swag, wolf sriracha jean shorts food truck cliche ennui man bun. Asymmetrical wolf gastropub lo-fi."
  />
</div>
)

export default IndexPage

