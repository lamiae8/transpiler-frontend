import React from "react";

import fleche from '../images/icons8-chevron-droit-64.png';
import fileImg from '../images/icons8-fichier-64.png';
import contractIcon from '../images/smart-contract.png';

const panelFile =() =>{
  
    return(
        <>
       <div className=" panel  border-2 border-sky-600   ">
       <div className="flex title">
            <img src={fileImg} alt="" className="ml-14 h-14"/>
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
            <div class="flex justify-center items-center w-full ">
                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-96  cursor-pointer ">
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop your file</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">(.docx) or (.pdf)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 
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

export default panelFile ;
