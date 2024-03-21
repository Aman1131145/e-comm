import React from 'react'
import './Body.scss'
import Carousel from './carousel/Carousel'

function Body() {
  return (
      <div className='Body'>
          <div className="heading">
              <h1>Featured Products</h1>
              <p>Explore and discover a variety of products</p>
          </div>
          <div className="carousel-section">
              <Carousel/>
          </div>
    </div>
  )
}

export default Body