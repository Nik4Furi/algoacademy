import React, { useState } from 'react'

//------Imports spefic methods used here or Global Methods--------X
import data from '../../config/data.json'
import { FilterBtnData, FilterContent } from '../../config';

//------Imports or require the 'Courses' Components---------X
import CourseBtn from '../Courses/CourseBtn'
import CourseCard from '../Courses/CourseCard'

function CoursesLists() {

  //-------Global variables or methods used here --------X
  const details = FilterContent(data); //Filter the data form 'data.json'
  const categories = FilterBtnData(data);  //Filter the categories form 'data.json'
  // console.log(details,categories);


  //------Start to create states, methods for specific modules ----X
  const [active, setActive] = useState('softwares');

  let filterData = details.filter(ele => ele.cate === active) //Return the category button , related data by default
  const [content, setContent] = useState(filterData);

  const [cates, setCates] = useState(categories);

  //According to the category of button, changing the data-----X
  const handleBtnClick = (val) => {

    //Filter the data which is matched by the given category
    let filterDataByCates = details.filter(ele => { return ele.cate === val });

    setContent(filterDataByCates);

    setActive(val)
  }

  return (
    <>
      {/* Here we grab all the uniques buttons which is configured by uniques categories  */}
      <div className="container my-3">
        <div className="d-flex align-items-center justify-content-between">

          {/* Here we show the buttons  */}
          <CourseBtn cats={cates} active={active} handleBtnClick={handleBtnClick} />
        </div>
      </div>

      {/* Start to print all the courses cards according click on the buttons  */}
      <div className="container my-3">
        <div className="row">

          {/* Here we print all the courses cards according button click 'categories' */}
          {content.map((ele) => {
            return <CourseCard key={ele.img} title={ele.title} description={ele.description} img={ele.img} />
          })}

        </div>
      </div>
    </>
  )
}

export default CoursesLists
