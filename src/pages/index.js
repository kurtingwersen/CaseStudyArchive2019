import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
<div>
  <div className="Hero">
    <div className="HeroGroup">
      <h1>Here's a list of <br />Case Studies</h1>
      <p>Please use these case studies as inspiration</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Watch the video</Link>
    </div>
  </div>
</div>
)

export default IndexPage
