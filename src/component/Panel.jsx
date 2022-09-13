import React, { useEffect, useState } from "react";
import axios from "axios";
import fleche from "../images/icons8-chevron-droit-64.png";
import textIcon from "../images/icons8-google-traduction-64.png";
import contractIcon from "../images/smart-contract.png";
import DragDropFile from "./DragDropFile";
import copyIcon from "../images/icons8-copy-64.png";
import downloadIcon from "../images/icons8-downloading-updates-64.png";
import deployIcon from "../images/icons8-blockchain-technology-64.png";
import submitIcon from '../images/icons8-en-cours-64.png';
// import { UploadFile } from "./DragDropFile";

function Panel(props) {
  const [result, setResult] = useState();
 // const [text, setText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [canDownload, setCanDownload] = useState(false);
  const createContract = () => {
    setClicked(true);
    setCanDownload(false)
  };
  //const API="http://localhost:8080/"
  const API = "http://18.170.2.144/"; //AWS INSTANCE

  useEffect(() => {
    setCanDownload(false)
  }, []);

const submitText= () =>{
  let text = document.getElementById("textarea").value
  if(text){
    console.log("-----------CHANGED CHANGED-------------");
    axios
      .post(API + "transpileText", { text })
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    setResult("");
  }
};
  
 // useEffect(() => {
  //  submitText();
  //}, );


  return (
    <>
      <div className=" Ml:m-auto Ml:mt-8  panel Ml:h-96 border-2 border-sky-600 relative  ">
        <div className=" flex Ml:inline-block title right-2 ">
         <div className="w-3/6 flex lg:w-full Ml:pb-0 mt-1 Ml:my-0 ml-4 Ml:ml-6">
          <img src={textIcon} alt="" className=" h-14 sm:h-6" />
          <div className=" md:text-sm md:m-1 text-xl text-bold text-sky-700 m-3 ">
            Access control policies
          </div>
        </div>
        <div className="w-1/6 "></div>
          <div className="w-3/6 h-1/6 mt-3 Ml:mt-0 flex md:w-full Ml:absolute Ml:bottom-28  Ml:left-6">
          <img src={contractIcon} alt="" className="  h-10 sm:h-5  " />
          <div className=" md:text-sm ml-4 mt-1 text-xl text-bold  text-sky-700  panelchild ">
            Smart contract
          </div>
          </div>

        </div>

        <div className=" w-full mt-4 sm:mt-0 sm:mb-0 flex Ml:inline-block h-5/6  p-1 ">
          {/* panel to show */}
          <div className=" w-3/5 w-full Ml:mt-0 Ml:w-full static rounded-3xl   border-2 border-sky-600 ">
          {props.switchType === "text" && (
            <>
       {/*     <div className="w-5/6 flex panelchild mr-3 ml-3 border-2 border-sky-600"> 
       <div className=" w-5/6 rounded-3xl  mr-3 ml-3 border-2 border-sky-600 ">*/}
            <div className=" h-flex  Ml:h-36 h-fit relative">
              <textarea
              id="textarea"
                className=" h-80 Ml:h-28 w-full  Ml:text-sm textarea rounded-t-3xl resize-none rounded-b-none "
                placeholder="Copy and past your code here..."
                // onChange={transpileText}
               // onChange={(event) => setText(event.target.value)}
              ></textarea>
            
            <div className="flex absolute relative">
               <button onClick={submitText} className="flex absolute w-20 pl-1 h-6 right-10  rounded border border-dashed border-indigo-500  ">
               
                <img src={submitIcon} className="w-5 " /> Submit
              </button>  
           </div>
             </div>
          
           
           
       </>   )}

          {props.switchType === "file" && (
          
              <DragDropFile setCanDownload={setCanDownload} clicked={clicked} />
          
          )}
          </div>
          <img className=" Ml:rotate-90 Ml:my-0  Ml:mx-auto place-self-center h-8 w-8" src={fleche} />

          <div className=" w-3/5 w-full Ml:w-full Ml:mt-4 static rounded-3xl   border-2 border-sky-600 ">
            <div className="h-flex  Ml:h-36  h-fit relative  ">
              {props.switchType === "text" && (
                <textarea
                  readOnly
                  value={result}
                  id="idTextarea"
                  className="  w-full h-80 Ml:h-28 Ml:text-sm textarea rounded-t-3xl  rounded-b-none    resize-none  "
                ></textarea>
              )}
               {props.switchType === "file" && (
                <>{!canDownload && 
                 
                  <p className=" flex w-full flex-col  h-80 Ml:h-28  justify-center items-center  text-md "></p>}
                  </>
                  
              )}
              {props.switchType === "file" && (
                <>{canDownload && 
                 
                  <p className=" flex w-full flex-col  h-80  Ml:h-28  justify-center items-center text-center  text-md sm:text-sm "> <button onClick={createContract} ><img src={downloadIcon} alt="" className=" " /></button>Your file is ready to download!! </p>}
                  </>
                  
              )}
            <div className=" w-flex flex absolute relative">
              {props.switchType === "text" && (
          
                <button
                  className=" absolute right-32 sm:right-24 flex  w-16  h-6  rounded border border-dashed border-sky-600  "
                  onClick={() => {
                    navigator.clipboard.writeText(
                      document.getElementById("idTextarea").value
                    );
                  }}
                >
                  <img src={copyIcon} alt="" className=" w-5 " /> Copy
                </button>
              )}
              {props.switchType === "file" && (
                <button
                  onClick={createContract}
                  className="absolute right-32 sm:right-20   flex sm:inline-block Ml:flex  w-28  Ml:w-24 sm:w-20 sm:text-sm   Ml:h-6  sm:h-9   sm:pl-0 pl-2   rounded border border-dashed border-sky-600  "
                >
                  <img src={downloadIcon} alt="" className=" w-5 sm:w-4 sm:ml-8 Ml:ml-2 " /> Download
                </button>
              )}
              {props.switchType === "file" && (
              <button className=" absolute right-8 sm:right-2 flex sm:inline-block Ml:flex  w-20 sm:w-16  pl-1 Ml:pl-0 Ml:h-6  sm:h-9 sm:text-sm  rounded border border-dashed border-indigo-500  ">
                {" "}
                <img src={deployIcon} className="w-5 sm:w-4 sm:ml-5 Ml:ml-0" /> Deploy
              </button>
              )}
              {props.switchType === "text" && (
                 <button className=" absolute right-8 sm:right-2 flex w-20 pl-1   sm:text-sm  rounded border border-dashed border-indigo-500  ">
                 {" "}
                 <img src={deployIcon} className="w-5 " /> Deploy
               </button>
              )}
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* <UploadFile /> */}
    </>
  );
}

export default Panel;
