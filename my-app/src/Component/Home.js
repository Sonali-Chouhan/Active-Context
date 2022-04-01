import React from "react";
import { useDispatch } from "react-redux";
import { getdata } from "../Redux/Action/action";

const Home = () =>{

const dispatch =useDispatch();

const call = () =>{
    dispatch(getdata())
}
    return(
        <div>
            <h1>Home Component</h1>
            <button onClick={call}>clcik</button>
        </div>
    )
}

export default Home;