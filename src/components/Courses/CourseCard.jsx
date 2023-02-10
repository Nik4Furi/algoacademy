import React from 'react'

function CourseCard({ title, description, img }) {
    return (
        <>
            <div data-aos="zoom-in" data-aos-duration="1000" className="card mx-2 p-0" style={{ width: "20rem", background: "transparent" }}>

                <img src={img} className="card-img-top" alt={title} style={{ maxHeight: "170px", minHeight: "170px" }} />

                <div className="card-body">
                    <h5 className="card-title text-highlight text-capitalize f1">{title}</h5>
                    <p className="card-text">{description}...</p>
                </div>

                {/* Footer of the card - To provide such features  */}
                <div className="card-footer p-0">
                    <div className="d-flex align-items-center justify-content-between">
                        <button className={`btn btn-purple my-2 mx-2 f1`}>Preview</button>
                        <button className={`btn btn-danger my-2 mx-2 f1 ${!localStorage.getItem('token') ? 'disabled' : ''}`}>Enroll</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CourseCard
