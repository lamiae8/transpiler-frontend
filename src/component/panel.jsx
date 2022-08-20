import React from "react";
import fleche from "../images/icons8-chevron-droit-64.png";
import textIcon from "../images/icons8-google-traduction-64.png";
import contractIcon from "../images/smart-contract.png";
import DragDropFile from "./DragDropFile";
import copyIcon from '../images/icons8-copy-64.png';
import downloadIcon from '../images/icons8-downloading-updates-64.png';
import deployIcon from '../images/icons8-blockchain-technology-64.png';


const panel = (props) => {
  return (
    <>
      <div className=" panel  border-2 border-sky-600   ">
        <div className="flex title">
          <img src={textIcon} alt="" className="ml-14 h-14" />
          <div className="   text-xl text-bold text-sky-700 m-4 ">
            Access control policies
          </div>

          <div className="w-1/6"></div>
          <img src={contractIcon} alt="" className="ml-36 h-10 mt-2" />
          <div className=" text-xl text-bold  text-sky-700 panelchild m-4  ">
            Smart contract
          </div>
        </div>

        <div class="flex h-96 ">

          {/* panel to show */}
          {
            props.switchType === 'text'
            &&
            <div className="w-5/6 flex panelchild mr-3 ml-3 border-2 border-sky-600">
              <textarea
                className="w-full textarea  resize-none  panelchild "
                placeholder="Copy and past your code here..."
              ></textarea>
            </div>
          }

          {
            props.switchType === 'file'
            &&
            <div className=" cursor-pointer ml-3 mr-3 w-5/6 h-full panelchild border-2 border border-sky-600 rounded-3xl">
              <DragDropFile />
            </div>
            // <div className="w-5/6 flex panelchild mr-3 ml-3 border-2 border-sky-600">
            //     <textarea
            //     className="w-full textarea  resize-none  panelchild "
            //     placeholder="file bruv"
            //     ></textarea>
            // </div>
          }


          <img class="w-1/6 place-self-center h-8 w-12" src={fleche} />


          <div class="w-5/6 rounded-3xl  mr-3 ml-3 border-2 border-sky-600 ">
            <div className=" flex mb-4 h-80 ">
              <textarea id="idTextarea" className=" w-full textarea rounded-t-3xl  rounded-b-none    resize-none  "></textarea></div>
            <div className="flex">
              {
                props.switchType === 'text'
                &&
                <button className=" flex ml-80 w-20 h-8 pl-1 rounded border border-dashed border-sky-600  " onClick={() => { navigator.clipboard.writeText(document.getElementById('idTextarea').value) }}><img src={copyIcon} alt="" className=" w-7 " /> Copy</button>

              }
              {
                props.switchType === 'file'
                &&
                <button className=" flex ml-80 w-28 h-8 pl-1 rounded border border-dashed border-sky-600  "><img src={downloadIcon} alt="" className=" w-7 " /> Download</button>

              }

              <button className=" flex ml-6 w-24 pl-1 h-8  rounded border border-dashed border-indigo-500  "> <img src={deployIcon} className="w-7" /> Deploy</button></div>

          </div>



        </div>



      </div>
    </>
  );
};

export default panel;
