import React from "react";
import {Link} from "react-router-dom"

const switchButtonFile =() =>{
    
    return(
        <>
        <div className="ml-20 my-4 " >
<Link to="/"><button 
className=" text-blue-800 font-medium border border-indigo-400 border-l-2 border-t-2 rounded-md  bg-indigo-200  hover:text-gray-900 shadow-sm drop-shadow-md hover:drop-shadow-xl shadow-indigo-100/50  h-16 w-40 ">
    Transpile a Text <br/> <span className="text-xs">Alfa language</span> </button></Link>
<Link to="/file"><button  className="rounded-b-none border-b-4 border-b-gray-800 text-gray-900  font-medium border-2 border-gray-400 rounded-md  bg-indigo-200   shadow-md drop-shadow-lg  shadow-indigo-100/30 ml-2 h-16 w-40" > Transpile a file <br/> <span className="text-xs">.pdf / .docx</span></button></Link>


</div>
        </>


 );

}
export default switchButtonFile;
