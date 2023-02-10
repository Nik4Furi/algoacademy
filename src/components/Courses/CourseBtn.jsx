import React, { useState } from 'react'

function CourseBtn({ cats, active, handleBtnClick }) {

  return (
    <>
      {cats.map(ele => { return <button onClick={() => handleBtnClick(ele)} key={ele} className={`btn btn-danger mx-2 my-2 ${active === ele ? 'btn-active' : ''}`}>{ele}</button> })}

    </>
  )
}

export default CourseBtn
