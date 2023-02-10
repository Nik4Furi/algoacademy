import React from 'react'

function CoursesInfos() {
    return (
        <>
            <section className="container my-3">
                <h1>Course name</h1>

                {/* Section to save the img and description of the course  */}
                <div className="d-flex align-items-center my-2">
                    <div className="container-fluid">
                        <h3>Subheading</h3>
                        <p>paragram</p>
                    </div>

                    {/* Img or the video of the course  */}
                    <div>
                        <img src="img" alt="title" className="img-fluid" />
                    </div>
                </div>
            </section>

            {/* Mentors info,like first img and side the description of the mentor  */}
            <section className="container my-3">
                {/* Here we write the card side by side  */}
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-5">
                            <img src="..." className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoursesInfos
