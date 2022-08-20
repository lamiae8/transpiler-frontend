import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG"];

function DragDropFile() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    console.log(file)
    setFile(file);
  };

  const chidrenElem=<p className="">drag and drop<br/>{file==null ? '' : file.name}</p>
  return (
    <FileUploader maxSize="4" children={chidrenElem} classes="w-full" handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDropFile;