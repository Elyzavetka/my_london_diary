import {
  GetObjectCommand,
  ListObjectsCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { useState } from "react";
import "./newPost.css";

// const convertToBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// };

const keyId = process.env.REACT_APP_AWS_S3_KEY_ID;
const accessKey = process.env.REACT_APP_AWS_S3_ACCESS_KEY;

console.log(keyId);
console.log(accessKey);

export const NewPost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("img"));

    const client = new S3Client({
      credentials: {
        accessKeyId: "",
        secretAccessKey: "",
      },
      region: "eu-west-1",
    });
    const command = new PutObjectCommand({
      Bucket: "my-london-diary",
      Key: data.get("img").name,
      Body: data.get("img"),
    });

    const res = await client.send(command);
    const foocommand = new GetObjectCommand({
      Bucket: "my-london-diary",
      Key: data.get("img").name,
    });
    const res1 = await client.send(foocommand);

    console.log(res1);

    // const [file, setFile] = useState(null);

    // // Function to upload file to s3
    // const uploadFile = async () => {
    //   // S3 Bucket Name
    //   const S3_BUCKET = "my-london-diary";

    //   // S3 Region
    //   const REGION = "region";

    //   // S3 Credentials
    //   AWS.config.update({
    //     accessKeyId: "youraccesskeyhere",
    //     secretAccessKey: "yoursecretaccesskeyhere",
    //   });
    //   const s3 = new AWS.S3({
    //     params: { Bucket: S3_BUCKET },
    //     region: REGION,
    //   });

    //   // Files Parameters

    //   const params = {
    //     Bucket: S3_BUCKET,
    //     Key: file.name,
    //     Body: file,
    //   };

    //   // Uploading file to s3

    //   var upload = s3
    //     .putObject(params)
    //     .on("httpUploadProgress", (evt) => {
    //       // File uploading progress
    //       console.log(
    //         "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
    //       );
    //     })
    //     .promise();

    //   await upload.then((err, data) => {
    //     console.log(err);
    //     // Fille successfully uploaded
    //     alert("File uploaded successfully.");
    //   });
    // };
    // // Function to handle file and store it to file state
    // const handleFileChange = (e) => {
    //   // Uploaded file
    //   const file = e.target.files[0];
    //   // Changing file state
    //   setFile(file);
    // };

    // const base64String = await convertToBase64(data.get("img"));
    await fetch("http://localhost:3001/diary-entries/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.get("title"),
        description: data.get("description"),
        img: "",
      }),
    });
  };

  return (
    <form action="#" className="form-container" onSubmit={handleSubmit}>
      <div className="form-content">
        <div className="form-field">
          <input
            type="text"
            className="form-input"
            placeholder="Enter your message"
            name="title"
          />
        </div>
        <div className="form-field">
          <textarea
            className="form-textarea"
            placeholder="Enter your message"
            name="description"
          ></textarea>
        </div>
        <div>
          <input type="file" id="img" name="img" accept="image/*" />
        </div>
        <div className="form-field">
          <button type="submit" className="form-button">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
