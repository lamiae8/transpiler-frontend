import React from "react";
import fleche from '../images/icons8-chevron-droit-64.png';
import textIcon from '../images/icons8-google-traduction-64.png';
import contractIcon from '../images/smart-contract.png';
const panel =() =>{
  
    return(
        <>
       <div className=" panel  border-2 border-sky-600   ">
       <div className="flex title">
            <img src={textIcon} alt="" className="ml-14 h-14"/>
            <div className="   text-xl text-bold text-sky-700 m-4 ">
            Access control policies
            
            </div> 
        
         <div className="w-1/6"></div>
         <img src={contractIcon} alt="" className="ml-36 h-10 mt-2"/>
            <div className=" text-xl text-bold  text-sky-700 panelchild m-4  ">
               Smart contract
            
         </div> 
</div>

     <div class="flex h-96 ">
        
         
            <div className="w-5/6 flex   panelchild mr-3 ml-3 border-2 border-sky-600">
                 <textarea className="w-full textarea  resize-none  panelchild " placeholder="Copy and past your code here..."></textarea>
            </div>
         
        
         <img class="w-1/6 place-self-center h-8 w-12" src={fleche}/>
        
        <div class="w-5/6 rounded-3xl  mr-3 ml-3 border-2 border-sky-600 ">
           <div className=" flex mb-4 h-80 "> <textarea className=" w-full textarea rounded-t-3xl  rounded-b-none    resize-none  "></textarea></div>
           <div><button className=" ml-96 "> Copy</button> <button className=" ml-6"> Deploy</button></div>
           
         </div>
    
    </div>


    </div>
        </>
    );
}

export default panel ;
