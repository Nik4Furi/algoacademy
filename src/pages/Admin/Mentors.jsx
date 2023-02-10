import React from 'react'
import MentorsInfo from '../../components/Admins/MentorsInfo'

function Mentors() {
  return (
    <>
     {localStorage.getItem('token') &&
      <section className="container my-3">
        <h2>All <span className="text-highlight">Mentors</span>, who work with us, and their courses</h2>

        <div className="container">
            <div className="d-flex align-items-center">

                {/* Here we show all the mentors who work with us, with their courses counts  */}
                <MentorsInfo title={"Harry Potter"} description={"No description yet, adding early"} img={'/img/Admin/mentors.png'} CoursesCount={23} />
                <MentorsInfo title={"Harry Potter"} description={"No description yet, adding early"} img={'/img/Admin/mentors.png'} CoursesCount={23} />
                <MentorsInfo title={"Harry Potter"} description={"No description yet, adding early"} img={'/img/Admin/mentors.png'} CoursesCount={23} />
            </div>
        </div>
      </section>}
    </>
  )
}

export default Mentors
