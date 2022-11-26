import React from "react";
import { useNavigate } from "react-router-dom";
import signedDocument from "../../../Components/Assest/Img/signed document.png";
import useFetch from "../../../Store/Apifolder/useFetch";
import { useAuth } from "../../../Store/Context";
import axios from "axios";
export const UploadReady = (props) => {
  const { files } = useAuth();

  console.log(files);
  const url = `https://dev-kcjp.onrender.com/upload`;
  const options = {
    method: "POST",
    header: {
      "Content-Type": "multipart/form-data",
    },
  };

  const getData = async () => {
    axios
      .post(url, files, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  const uploadHandler = () => {
    getData();
  };
  const navigate = useNavigate();
  return (
    <div className="space-y-[1em] w-full mt-[20%] lg:mt-[10%] flex flex-col items-center ">
      <h1 className="font-bold text-2xl ">Ready for Upload</h1>
      <div className="upload flex flex-col items-center p-[1em] space-y-[2em] w-full md:w-[60%] lg:w-[40%]">
        <img
          src={signedDocument}
          alt="document"
          className="w-[120px] h-[120px] object-fill"
        />
        <div className="text-center  space-y-[0.5em]">
          <h2 className="font-semibold text-[#344054] text-lg">
            File Selected: "{props.file}"
          </h2>
          <div className="text-sm text-[#98A2B3]">
            <p>You are almost set</p>
            <p>
              <span className="text-[#53B1FD] ">click here</span> to upload a
              different file
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={uploadHandler}
        className="bg-[#2E90FA] text-white px-[1.5em] py-[0.8em] rounded-md "
      >
        Upload here
      </button>
    </div>
  );
};