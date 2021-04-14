import React from "react";
// import ImageCropper from "./component/imageCropper/imageCropper";
// import { Example } from "./component/reactToPrint";
import "./App.css";
import ReactImageCrop from "./component/aNewReactImageCrop/reactImageCrop";

function App() {
  return (
    <div>
      {/* <Example />/// */}
      {/* <ImageCropper src={require("./bigWhy.jpeg")} /> */}
      <ReactImageCrop />
    </div>
  );
}

export default App;
