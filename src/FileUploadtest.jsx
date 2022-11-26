import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./Store/Context";

function FileUploadtest() {
  const { file, setFile } = useAuth();
  const [dFile, setDFile] = useState([]);
  const [showOn, setShowOn] = useState(false);

  const url = `http://accountpal.hng.tech:8000/upload_statement`;
  const url1 = `http://accountpal.hng.tech:8000/upload_record`;
  //   const url1 = `https://httpbin.org/post`;
  //   const url2 = `https://jsonplaceholder.typicode.com/posts`;
  //   const url3 = `https://dev-kcjp.onrender.com/`;

  const fileChangeHandler = (e) => {
    const file1 = e.target.files;
    console.log(file1[0]);
    setFile(file1[0]);
  };

  const getData = async () => {
    const formData = new FormData();
    formData.append("file", file);
    // to post the data

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => setDFile(JSON.parse(res?.data)))
      .catch((e) => console.log(e));
  };

  // /////////////////////
  const uploadHandler = (e) => {
    e.preventDefault();
    getData();
    setShowOn(true);
  };
  console.log(file);
  console.log("Api Response Here", dFile);

  return (
    <>
      <form action="" method="post">
        <input type="file" onChange={(e) => fileChangeHandler(e)} />
        <button type="submit" onClick={uploadHandler}>
          Upload
        </button>
      </form>

      {!file ? (
        <p>Data is Loading</p>
      ) : (
        <div>
          {dFile?.map((nFIle) => {
            return <p>{nFIle.Details}</p>;
          })}
        </div>
      )}
    </>
  );
}

export default FileUploadtest;
