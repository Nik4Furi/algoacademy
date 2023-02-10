import React from 'react'
import { Link } from 'react-router-dom'

function MentorDashboard() {
  return (
    <>
     {localStorage.getItem('token') &&
      <div className="container-fluid p-0 m-0">
      {/* Only show the users specfic courses  */}

        {/* Only show no course are you join*/}
        <div className="container my-3">

          {/* Writting the content to checking the link of side bar matched  */}

          <div className="d-flex align-items-center justify-content-between">
            <h2 className="text-highlight">MentorDashboard</h2>
            <h2 className="text-highlight">{}</h2>
          </div>

          <div>
            <h2 className="my-2">No courses are you choosing or in enroll </h2>
            . <div className="d-flex align-items-center my-2 justiy-content-center">
              <div className='d-block mx-auto my-2'>
                <img src="/img/nocourse.jfif" alt="courses" className="img-fluid " />
              </div>
            </div>

          </div>
        </div>
      </div>}
      
    </>
  )
}

export default MentorDashboard
