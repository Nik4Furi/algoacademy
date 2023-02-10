import React from 'react'

function MentorsInfo({ img, title, description, CoursesCount }) {
    return (
        <>
            <div className="card mx-2 my-2 " style={{ width: "18rem;" }}>
                <img src={img} className="card-img-top" alt={title} style={{ maxHeigth: "150px", minHeigth: "250px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Courses</strong>{CoursesCount}</li>
                </ul>
            </div>
        </>
    )
}

export default MentorsInfo
