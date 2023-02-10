import React from 'react'

function SideBar() {
  return (
    <>
      <div className="container-fluid  w-100 p-0 m-0">
        <div className="d-flex align-items-center flex-column text-bg-dark">
            <div className="d-flex align-items-center p-2 ">
                <h4>Admin </h4>
                <img src="admin" alt="amdn" className="img-fluid mx-2 fs-5" />
            </div>
            <ul className='text-bg-dark list-group p-1'>
                <li className='list-group-item text-highlight'>Mentors</li>
                <li className='list-group-item text-highlight'>Courses </li>
                <li className='list-group-item text-highlight'>Students </li>
                
            </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar
