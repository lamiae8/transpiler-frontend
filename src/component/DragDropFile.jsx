import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import fileimg from '../images/icons8-fichier-64.png'

const fileTypes = ["alfa"];

function DragDropFile() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    console.log(file)
    setFile(file);
  };

  const chidrenElem= <>
  <div class="flex flex-col justify-center items-center pt-5 pb-6 cursor-pointer h-96 ">
                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop your file</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">(.alfa)</p><br/>{file==null ? '' :  file.name }
                    </div>
  </>
  return (
    <FileUploader maxSize="4" children={chidrenElem} classes="justify-center items-center w-full" handleChange={handleChange} name="file" types={fileTypes} />
    
  );
}

export default DragDropFile;