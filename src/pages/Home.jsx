import React from 'react'
import { Link } from 'react-router-dom'

//-------Import the configured variables ------X
import courses from '../config/courses.json'

//--------Imports or requiring the modules or global 'css' files--------X
import Styles from '../styles/Home.module.css'

//---------Imports the components from 'Courses' or other Components--------X
import CourseCard from '../components/Courses/CourseCard'
import Testimonials from '../components/Testimonials'

function Home() {
  
  return (
    <>
      <header className={`${Styles.header} container-fluid p-0 m-0`}>
        {/* Main Container of the home page  */}
        <main id="main" className="container p-0 ">

          <div className="d-flex align-items-center my-2">
            {/* Right side - to show the content or some description about us */}
            <div className='container'>
              <h2><span className="text-highlight">AlgoAcademy</span> is the large community to providing the knowledge or sharp the skills sets of the users</h2>
              <p>We are providing all the joiners, free skills and growing the vital role in their propective criteria, so join us to grow or go ahead in your career</p>
             <button className="btn btn-danger my-2 mx-auto d-block"><Link className='text-light text-decoration-none' to="/login" >Join Now</Link></button>
            </div>

            {/* Left side - to show the img or video for telling about us  */}
            <div className='container'>
              <img src="img/header.jpg" alt="header" className="w-75 border border-danger rounded-pill my-2" />
            </div>
          </div>

        </main>
      </header>

      {/* Provide info our courses  */}
      <div className={`${Styles.clip_2} container-fluid position-relative p-0 m-0"`}>
        {/* Providing courses container to providing the info  */}
        <section className="container">
          <div className="row">
            {/* Show only 3 cards to know about us  */}
            {courses.map((ele, index) => {
              return <CourseCard key={index} title={ele.title} description={ele.description} img={ele.img} />
            })}
          </div>
        </section>
      </div>

      {/* Some queries question creation like - why join us, how can we perfect etc..  */}
      <section className="container my-2">
        <div className="d-flex align-items-center w-100">
          <div className='w-50'>
            <h2 className='f1'>Why Should <span className="text-highlight">YOU</span> Join US?</h2>
            <p>In Last Year 2022, We are 200+ expreience users placed in their dream companies.Also in present, we are helping or guiding in their career, because we are not left the hand of our user. So don't be worry to joining us, If you have any query <Link to='#contact' className='text-uppercase text-decoration-none'> contact us</Link></p>
            <p className='text-secondary'>We providing every first user discount, and if they are student, then adding the discount in their enrollment fees</p>

          </div>

          {/* To show something img like  */}
          <div data-aos="flip-right" className='w-50'>
            <img src="img/joinus.jpg" alt="joinus" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* We providing our testimonials which is effective or not */}
      <section className="container my-2">
        <div className="row">

          {/* Testimonials section to writting our testimonials */}
          <Testimonials name="Yash" review="Hello everyone, I am Yash, When my friend tell about this plateform, then I am visiting here, After spending my time, and money. I realize that This worth it." />

          <Testimonials name="Nikhil" review="I am profession web develope, Basically I know the what the use of the editing softwares, techniques. But when I am enroll this courses I realize that this help it to peek my skills" />

          <Testimonials name="Priyanka" review="I am enthusiast about the web desgining so that I am completing my courses, But this courses are never compares with others courses contents." />
        </div>
      </section>
    </>
  )
}

export default Home
