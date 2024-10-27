import React, { useState } from "react";
import "./App.css";
import { parseInput, solvePyramid } from "./solver";
import FileUpload from "./FileUpload";
import Tree from "./Tree";

function App() {
  const [fileContent, setFileContent] = useState("");

  const handleFileContent = (content) => {
    setFileContent(content);
  };

  const handleGoBack = () => {
    setFileContent("");
  };

  return (
    <div className="App">
      {fileContent ? (
        <Display fileContent={fileContent} onGoBack={handleGoBack} />
      ) : (
        <FileUpload onFileContent={handleFileContent} />
      )}
    </div>
  );
}

function Display({ fileContent, onGoBack }) {
  const { target, pyramid } = parseInput(fileContent);
  console.log(pyramid, target);
  const solution = solvePyramid(pyramid, target);
  return (
    <div className="file-content">
      {solution === "" ? (
        <h2>No solution found</h2>
      ) : (
        <>
          <Tree levels={pyramid} path={solution} />
          <h2>Solution:</h2>
          <pre>{solution}</pre>
        </>
      )}
      <button className="go-back-button" onClick={onGoBack}>
        Another pyramid 🐪
      </button>
    </div>
  );
}

export default App;
