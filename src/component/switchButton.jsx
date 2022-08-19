import React from "react";


const switchButton =() =>{
  
    return(
        <>
        <div className="ml-20 my-4 " >
<button className="text-black font-medium border border-indigo-400 border-l-2 border-t-2 rounded-md  bg-indigo-200  hover:bg-blue-200 shadow-md drop-shadow-lg hover:drop-shadow-xl shadow-indigo-500/50   h-16 w-40 ">Transpile a Text <br/> <span className="text-xs">Alfa language</span> </button>
<button  className="text-black font-medium border border-indigo-400 border-l-2 border-t-2 rounded-md  bg-indigo-200  hover:bg-blue-200 shadow-md drop-shadow-lg hover:drop-shadow-xl shadow-indigo-500/50 ml-2 h-16 w-40" > Transpile a file <br/> <span className="text-xs">.pdf .doc</span></button>


</div>
        </>


 );

}
export default switchButton;
