import {
  GetObjectCommand,
  ListObjectsCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { useState } from "react";
import styles from "./NewPost.module.css";
import { useNavigate } from "react-router-dom";

export const NewPost = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // My region and bucket
    const AWSregion = "eu-west-1";
    const AWSbucket = "my-london-diary";

    const keyId = process.env.REACT_APP_AWS_S3_KEY_ID;
    const accessKey = process.env.REACT_APP_AWS_S3_ACCESS_KEY;

    console.log(keyId);
    console.log(accessKey);

    const formData = new FormData(e.target);
    const file = formData.get("img");
    if (file?.name) {
      // We will prepend the file name with a date stamp so it's unique, the regexp will replace any odd characters with an `_`.
      // If it's not unique, the file will be overridden if the same filename get's uploaded twice.
      // The regexp makes sure the file will be accessible in the browser.
      // AWSKey is the name of the file stored in the bucket
      const AWSkey = `${Date.now()}-${file.name.replace(/[^\w.]|_/g, "_")}`;

      const client = new S3Client({
        credentials: {
          accessKeyId: keyId,
          secretAccessKey: accessKey,
        },
        region: AWSregion,
      });

      const command = new PutObjectCommand({
        Bucket: AWSbucket,
        Body: file,
        Key: AWSkey,
      });

      await client.send(command);

      // when the upload has been successfull, we don't need to receive the URL,
      // we can build it ourselves like this 👇
      const imgUrl = `https://${AWSbucket}.s3.${AWSregion}.amazonaws.com/${AWSkey}`;

      await fetch("http://localhost:3001/diary-entries/new", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.get("title"),
          description: formData.get("description"),
          img: imgUrl,
        }),
      });
      setIsLoading(false);
      navigate("/");
    }
  };

  return (
    <form action="#" className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formContent}>
        <div className={styles.formField}>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Enter your message"
            name="title"
          />
        </div>
        <div className={styles.formField}>
          <textarea
            className={styles.formTextArea}
            placeholder="Enter your message"
            name="description"
          ></textarea>
        </div>
        <div className={styles.fileUpload}>
          <input type="file" id="img" name="img" accept="image/*" required />
        </div>
        <div className={styles.formField}>
          <button
            type="submit"
            className={styles.formButton}
            disabled={isLoading}
          >
            {isLoading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </form>
  );
};
