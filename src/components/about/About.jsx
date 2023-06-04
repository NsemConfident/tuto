import React from 'react'
import './about.css'
import ME from '../../assets/mycool.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
    return ( 
    <section id='about'>
         <h5>Get to know</h5>
         <h2>About me</h2>
         <div className="container about__container">
         <div className="about__me">
         <div className="about__me-image">
         <img src={ME} alt='about me'/>
         </div>

         </div>


         <div className="about__content">
         <div className="about__cards">

            <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience </h5>
            <small>2+ years Working </small>
            </article>

            <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Clients </h5>
            <small>15o+ Worldwide </small>
            </article>

            <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>projects </h5>
            <small>80+ Completed</small>
            </article>

         </div>
         <p>
         <b><i>NSEM CONFIDENT</i>.</b> is a highly skilled Software Engineer
           and a software Enthusiast. with years of working experiencce
         working on enormous projects, Nsem Confident has extablished himself
          experienced in the field of software i have worked with highly  
          rated media companies such <a href='https://chrome.google.com'>Google
          </a></p>

         <a href='#contact' className='btn btn-primary'> Let's talk</a>

         </div>
         </div>
         
    </section>
    )
}

export default about