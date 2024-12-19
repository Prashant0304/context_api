import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Test =({children})=>{
    const data=useContext(ThemeContext);
    console.log("DATA2",data);
    return(
        <div>{children}</div>
    )
}

export default Test;