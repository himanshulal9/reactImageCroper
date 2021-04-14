import React, { Component } from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import "./imageCropper.css";

export default class ImageCropper extends Component {
  constructor() {
    super();
    this.state = {
      imageDestination: "",
    };
    this.imageElement = React.createRef();
  }

  componentDidMount() {
    const cropper = new Cropper(this.imageElement.current, {
      zoomable: false,
      scalable: false,
      aspectRatio: [4, 3],
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        this.setState({ imageDestination: canvas.toDataURL("image/png") });
      },
    });
  }
  render() {
    return (
      <div>
        <div className="img-container">
          <img ref={this.imageElement} src={this.props.src} alt={"source"} />
        </div>
        <img
          alt={"cropeed"}
          className="img-preview"
          src={this.state.imageDestination}
        />
      </div>
    );
  }
}
