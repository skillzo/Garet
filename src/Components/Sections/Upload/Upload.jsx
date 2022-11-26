import { useRef } from "react";
import document from "../../../Components/Assest/Img/document.png";
import { useAuth } from "../../../Store/Context";

export const Upload = () => {
  const { dragHandler, dropHandler, setFiles } = useAuth();
  const inputRef = useRef();

  return (
    <div className="space-y-[1em] w-full mt-[20%] lg:mt-[10%] flex flex-col items-center  ">
      <h1 className="font-bold text-2xl ">Upload Account Statement</h1>
      <div
        onDrop={dropHandler}
        onDragOver={dragHandler}
        className="flex flex-col items-center p-[1em] space-y-[2em] w-full md:w-[60%] lg:w-[40%] border border-dashed border-black"
      >
        <img
          src={document}
          alt="document"
          className="w-[100px] h-[130px] object-fill"
        />
        <div className="text-center  space-y-[0.5em]">
          <h2 className="font-semibold text-[#344054] text-lg">
            Drop your account statement in here
          </h2>
          <p className="text-sm text-[#98A2B3]">
            You can upload PDF and Word DOC files Only
          </p>
        </div>
      </div>
      <input
        type="file"
        hidden
        ref={inputRef}
        onChange={(e) => setFiles(e.target.files)}
      />

      <button
        onClick={() => inputRef.current.click()}
        className="bg-[#2E90FA] text-white px-[1.5em] py-[0.8em] rounded-md "
      >
        Browse File Here
      </button>
    </div>
  );
};