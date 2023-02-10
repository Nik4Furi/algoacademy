import React from 'react'
import SideBar from '../../components/Admins/SideBar'

// ---------Start to imports the admins components 
import InfoBox from '../../components/Admins/InfoBox'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    {localStorage.getItem('token') &&
      <div className="container-fluid p-0 m-0">
      {/* Writing the aside bar and container to write according to aside link refered  */}

        {/* Creating or dividing the parts of our page into aside and content containers  */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 p-0">
              <SideBar />   {/*Aside bar, where we writing the side content links */}
            </div>

            {/* Writting the content to checking the link of side bar matched  */}
            <div className="col-9">
              <h2 className="text-highlight">Dashboard</h2>

              {/* Give some basics info related to our mentors,courses infos  */}
              <div className="d-flex align-items-center my-2 justiy-content-center">
                <InfoBox img={'/img/Admin/mentors.png'} title={'23 Mentors'} />
                <InfoBox img={'/img/Admin/courses.png'} title={'23 Courses'} />
              </div>

              {/* Here we show most demanded or most famous viewed courses or mentors courses  */}
              <div>
                <h2 className="text-highlight">Most Demanding or viewed,courses and  mentors </h2>
              . <div className="d-flex align-items-center my-2 justiy-content-center">
                <InfoBox img={'/img/Admin/mentors.png'} title={'23 Mentors'} />
                <InfoBox img={'/img/Admin/courses.png'} title={'23 Courses'} />
              </div>
              <Link to="/admin/mentors"> <button className="btn btn-danger mx-auto d-block">See More</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>  }
    </> 
  )
}

export default Dashboard
