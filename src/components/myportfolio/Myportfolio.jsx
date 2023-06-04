import React from 'react'
import './myportfolio.css'
const Myportfolio = () => {
  return (
    <section id='myportfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
           <div className="portfolio__item-image">

           </div>

           <h3>this is a portfolio item title  </h3>
           <a href="https://github.com/NsemConfident" className='btn'>Github</a>
           <a href="https:dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> 
           

        </article>
      </div>
      </section>
  )
}

export default Myportfolio