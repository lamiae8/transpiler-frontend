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
  const API = "http://3.8.234.85/"; //AWS INSTANCE

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
      <div className=" panel  border-2 border-sky-600 w-full  ">
        <div className="flex h-1/6 title right-2 ml-8">
         <div className="w-3/6 flex ">
          <img src={textIcon} alt="" className=" h-14" />
          <div className="   text-xl text-bold text-sky-700 m-4 ">
            Access control policies
          </div>
        </div>
        <div className="w-1/6"></div>
          <div className="w-3/6 flex">
          <img src={contractIcon} alt="" className="  h-10 mt-2" />
          <div className=" text-xl text-bold  text-sky-700  panelchild ">
            Smart contract
          </div>
          </div>

        </div>

        <div className="flex-none w-fit md:w-full sm:flex h-5/6 p-1 sm:p-1">
          {/* panel to show */}
          <div className="ml-auto sm:ml-0 sm:mb-2 w-full  md:w-3/5  static rounded-3xl   border-2 border-sky-600 ">
          {props.switchType === "text" && (
            <>
       {/*     <div className="w-5/6 flex panelchild mr-3 ml-3 border-2 border-sky-600"> 
       <div className=" w-5/6 rounded-3xl  mr-3 ml-3 border-2 border-sky-600 ">*/}
            <div className=" h-52 sm:h-80 h-flex h-fit ">
              <textarea
              id="textarea"
                className=" h-44 sm:h-80 w-full textarea rounded-t-3xl resize-none rounded-b-none "
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
          <img className=" w-0.5/5 place-self-center h-8 w-8" src={fleche} />

          <div className="mb-3 w-full sm:w-3/5 static rounded-3xl   border-2 border-sky-600 ">
            <div className="h-flex h-fit  mb-4  ">
              {props.switchType === "text" && (
                <textarea
                  readOnly
                  value={result}
                  id="idTextarea"
                  className=" w-full h-80 textarea rounded-t-3xl  rounded-b-none    resize-none  "
                ></textarea>
              )}
               {props.switchType === "file" && (
                <>{!canDownload && 
                 
                  <p className=" flex w-full flex-col  h-80  justify-center items-center  text-md "></p>}
                  </>
                  
              )}
              {props.switchType === "file" && (
                <>{canDownload && 
                 
                  <p className=" flex w-full flex-col  h-80  justify-center items-center  text-md "> <button onClick={createContract} ><img src={downloadIcon} alt="" className=" " /></button>Your file is ready to download!! </p>}
                  </>
                  
              )}
            <div className=" w-flex flex  absolute relative">
              {props.switchType === "text" && (
          
                <button
                  className=" absolute right-32 flex  w-16  h-6  rounded border border-dashed border-sky-600  "
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
                  className="absolute right-32  flex  w-28 pl-2  rounded border border-dashed border-sky-600  "
                >
                  <img src={downloadIcon} alt="" className=" w-5 " /> Download
                </button>
              )}

              <button className=" absolute right-8  flex  w-20 pl-1 h-6  rounded border border-dashed border-indigo-500  ">
                {" "}
                <img src={deployIcon} className="w-5" /> Deploy
              </button>
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
