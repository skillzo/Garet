import React from "react";
import { useAuth } from "../../../Store/Context";
import { Upload } from "./Upload";
import { UploadReady } from "./UploadReady";

function UploadMain() {
  const { files } = useAuth();
  console.log(files);
  return <>{!files ? <Upload /> : <UploadReady file={files[0]?.name} />}</>;
}

export default UploadMain;
