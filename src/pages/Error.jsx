import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <div className="containr my-3">
        <div className="d-flex align-items-center justify-content-center flex-column">
            <img src="img/error.png" alt="error" style={{maxWidth:"56%"}}/>
            <Link to="/"><button className="btn btn-danger">Go Home</button></Link>
        </div>
      </div>
    </>
  )
}

export default Error
