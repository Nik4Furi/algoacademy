import React,{useState} from 'react'

//-------Imports or require 'Courses Component' into Course Page------X
import CoursesLists from '../components/Courses/CoursesLists';

function Courses() {
    //---------Starts to create state, methods and configurations only this modules-----X
   
  return (
    <>
      {/* Here we show the Courses in form of the Lists  */}
      <main className="container my-3">
        {/* CourseLists component to show buttons and our courses according to click on them  */}
        <CoursesLists />
      </main>
    </>
  )
}

export default Courses
