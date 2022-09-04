import axios from "axios";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { saveAs } from "file-saver";
import fileimg from "../images/icons8-fichier-64.png";
import { data } from "autoprefixer";

//const API="http://localhost:8080/"
const API = "http://18.170.43.93/"; //AWS INSTANCE
var y = "";

function DragDropFile(props) {


  const fileTypes = ["alfa"];
  const UploadFile = (File) => {
    const data = new FormData();
    data.append("file", File);
    axios.post(API + "uploadFileAPI", data).then((res) => {
      // then print response status
      console.log(res.data);
      //createContract(res.data)
      y = res.data;
      console.log(y);
      props.setCanDownload(true)
    });
  };

  if (props.clicked === true) {
    const blob = new Blob([y], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "result/output.sol");
  }

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    // console.log(file)
    setFile(file);
    UploadFile(file);
  };
  const chidrenElem = (
    <>
      <div className="flex flex-col justify-center items-center pt-5 pb-6 cursor-pointer h-96 ">
        <svg
          aria-hidden="true"
          className="mb-3 w-10 h-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop your file
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">(.alfa)</p>
        <br />
        {file == null ? "" : file.name}
      </div>
    </>
  );
  return (
    <>
      <FileUploader
        maxSize="4"
        children={chidrenElem}
        classes="justify-center items-center w-full"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
    </>
  );
}

export default DragDropFile;
