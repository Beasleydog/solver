import React, { useRef } from "react";
import "./FileUpload.css";
function FileUpload({ onFileContent }) {
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      onFileContent(content);
    };
    reader.readAsText(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "text/plain") {
      handleFile(droppedFile);
    }
  };

  const onChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const onClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className="dropzone"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={onClick}
    >
      <input
        type="file"
        accept=".txt"
        onChange={onChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <p>Give me the pyramid .txt file! 🐪</p>
    </div>
  );
}

export default FileUpload;
