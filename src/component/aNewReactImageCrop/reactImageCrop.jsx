import React, { useState, Fragment } from "react";
import ReactCrop from "react-image-crop";
import { makeStyles, Grid, Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import "react-image-crop/dist/ReactCrop.css";

export default function ReactImageCrop() {
  //declaring style
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      margin: "50px",
    },
    button: {
      padding: "7px 14px",
      color: "#fff",
      backgroundColor: blue[700],
      margin: "10px auto",
    },
    uploadedImg: {
      width: "100%",
      height: "auto",
      maxWidth: "480px",
    },
    resultedImg: {
      width: "auto",
      maxWidth: "250px",
      height: "250px",
      margin: "20px auto",
    },
  }));
  const [src, selectFile] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const classes = useStyles();

  //handling the input type file change.
  const handleFileChange = (e) => {
    const uploadImage = e.target.files[0];
    selectFile(URL.createObjectURL(uploadImage));
  };

  //setting the default nature of image.
  const [crop, setCrop] = useState({
    unit: "px", // default, can be 'px' or '%'
    aspect: 1 / 1,
    width: 250,
  });

  //getting cropped image.
  function getCroppedImage() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    setResult(base64Image);
  }

  return (
    <Grid container>
      <Grid item xs={"4"}>
        {/* //upload button  */}
        <input type="file" accept="image/" onChange={handleFileChange} />
      </Grid>
      <Grid item xs={"8"}>
        {src && (
          <Fragment>
            <ReactCrop
              className={classes.uploadedImg}
              src={src}
              onImageLoaded={setImage}
              crop={crop}
              onChange={setCrop}
            />
            <br />
            <p>
              <Button
                variant="contained"
                className={classes.button}
                onClick={getCroppedImage}
              >
                {" "}
                Crop Image
              </Button>
            </p>
          </Fragment>
        )}
      </Grid>
      {/* rendering resulted image  */}
      {result && (
        <Grid item sm={12}>
          {<img src={result} alt="result" className={classes.resultedImg} />}
        </Grid>
      )}
    </Grid>
  );
}
