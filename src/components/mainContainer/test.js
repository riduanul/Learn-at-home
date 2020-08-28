//    <Enroll></Enroll>
           
<div className="items">
<div className="container">
   <div className="heading">
        <h5><strong>Programming Courses:</strong></h5>
   </div>
   <div className="courses">
       
      {
          data.map(crse => <Courses course0={crse} fee={crse.fee} handleAddCourse = {handleAddCourse}></Courses>)
      }
      
  </div>
</div>
  <div className="container1">
      <div className="heading1">
           <h5><strong>Language Courses:</strong></h5>
      </div>
      <div className="courses1">
          {
       data2.map(crse => <LanguageCourse course1={crse} fee={crse.fee} handleAddCourse = {handleAddCourse}></LanguageCourse>)
          }
      </div>
  </div>

  <div className="container2">
      <div className="heading2">
           <h5><strong>Personal Skill Development Courses:</strong></h5>
      </div>
      <div className="courses2">
          {
       data1.map(crse => <PersonalDevelopment course2 = {crse} fee={crse.fee} handleAddCourse = {handleAddCourse}></PersonalDevelopment>)
          }
      </div>
  </div>
  <div className="container2">
      <div className="heading2">
           <h5><strong>Personal Skill Development Courses:</strong></h5>
      </div>
      <div className="courses2">
          {
       data3.map(crse => <PersonalDevelopment course2 = {crse} fee={crse.fee} handleAddCourse = {handleAddCourse}></PersonalDevelopment>)
          }
      </div>
  </div>

</div>


   // <div className="cart">
   //     <h5>Enrolled courses</h5>
   //     <p> Total Course Enrolled:{cart}</p>
   //     <p> Total Course Fee:$ </p>
   // </div>
