import React from 'react';
 import {useSelector} from 'react-redux'

function About() {

   const empState = useSelector((state)=> state.empState)
   const {employee}=empState;


  return (
      <>
    <div className="text-center ">
    <h1  >About Us Page</h1>
     <h4>In our Company there are  {employee.length} employees</h4> 
     
    <div className='text-center' ><p>Some text about who we are and what we do.</p>
    <p>Resize the browser window to see that this page is responsive by the way.</p></div>
  </div>
  
  </>
  )
}

export default About