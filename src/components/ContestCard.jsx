import React from 'react'
import { Link } from 'react-router-dom'

function ContestCard({ title, description, img, link }) {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="card mx-2 p-0" style={{ width: "20rem", background: "transparent" }}>
            <img src={img} className="card-img-top" alt={title} style={{ maxHeight: "170px", minHeight: "170px" }} />

            <div className="card-body">
                <h5 className="card-title text-capitalize f1">{title}</h5>
                <p className="card-text">{description}...</p>
            </div>

            {/* Footer of the card - To provide such features  */}
            <div className="card-footer p-0">
                <Link to={link} className={`${!localStorage.getItem('token') ? 'disabled' : ''}`} > <button className={`btn btn-danger my-2 mx-2 f1 `}>Join Contest</button></Link>
            </div>

        </div>
    )
}

export default ContestCard
