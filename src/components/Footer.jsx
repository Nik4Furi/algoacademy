import React from 'react'

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>

        {/* All the columns are settle in which we use all useful links  */}
        <div className="container-fluid text-center p-2">
          <div className="container-fluid">

            <div className="row mt-3">
              {/* Grid column  */}
              <div className="col- -3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content  */}
                <h6 className="text-uppercase fw-bold">AlgoAcademy</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>A startup, which make your career kick start</p>
                <p><strong className="text-highlight">AlgoAcademy</strong> is providing free* courses, and help the users to make their career in dream skills and jobs.</p>
              </div>
              {/* Grid column  */}

              {/* Providing such courses links which are demanding by such users, Its maybe in future can by display using database views  */}
              <div className="col- -2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Top Demanding Courses</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p> <a href="#!" className="text-white"> Bootstrap</a> </p>
                <p> <a href="#!" className="text-white"> WordPress</a> </p>
                <p> <a href="#!" className="text-white">Machine Learning</a> </p>
                <p> <a href="#!" className="text-white">Angular</a> </p>
              </div>


              {/* Providing the users can interact with us and get such more info with us  */}
              <div className="col- -3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Providing Scalability</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p> <a href="#!" className="text-white">About US</a> </p>
                <p> <a href="#!" className="text-white">Terms & Condi.</a> </p>
                <p> <a href="#!" className="text-white">Privacy</a> </p>
                <p> <a href="emailTo:algoacademyhelp@gmail.com" className="text-white">Help</a> </p>
              </div>

              {/* Our company such, can help the users to impact on the users thinkness about the company  */}
              <div className="col- -4 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><i className="fas fa-home mr-3"></i> Rajasthan, IND</p>
                <p><i className="fas fa-envelope mr-3"></i> algoacademyhelp@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 91 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 91 234 567 88</p>
              </div>

            </div>

          </div>
        </div>

        {/* Copyright  */}
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 Copyright:
          <a className="text-white" href="https://www.algoacademy.com/">www.algoacademy.com</a>
        </div>
        {/* Copyright  */}
      </footer>
      {/* Footer  */}

    </>
  )
}

export default Footer
