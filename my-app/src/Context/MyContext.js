import React from "react";
import MyNote from "./Context";

const MyContext=(props)=>{ 
const data={
    name:"sona"
}
 return(
     <div>
      <MyNote.Provider value={data}>
         {props.children}
      </MyNote.Provider>

     </div>
 )
}
export default MyContext;




