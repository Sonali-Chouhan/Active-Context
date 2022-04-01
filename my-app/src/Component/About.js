import React, { useContext } from 'react'
import MyNote from "../Context/Context"

const About = () => {   

  
const DATA= useContext(MyNote);
  return ( 
    <div>
       

      <p>{DATA.name}</p>

    </div>
  )
}

export default About