import React , {Component} from 'react'

class Profile extends Component (){
  render (){
    return (
      <div>
     <div className="container"> 
   <div className="Bio"> 
    <h3>Abdul Mukit Al Mehedy</h3> 
    <p>Junior Frontend Developer</p> 
   </div> 
   <div className="Skills"> 
    <h4>Skills</h4> 
    <ul> 
     <li>Python</li> 
     <li>Javascript</li> 
    </ul> 
   </div> 
   <div className="Links"> 
    <h4>Social Link</h4> 
    <ul> 
     <li><a href="#">Facebook</a></li> 
     <li><a href="#">Instagram</a></li> 
     <li><a href="#">Github</a></li> 
    </ul> 
   </div> 
  </div>
      </div>
    )
  }
}
export default Profile