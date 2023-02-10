import React from 'react'

function InfoBox({ img, title }) {
  return (
    <>
      .<div className="card text-bg-dark mx-2 my-2 " style={{ maxWidth: "20rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt={title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center my-auto">{title}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoBox
