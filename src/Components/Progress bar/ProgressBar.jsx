import React from "react";

function ProgressBar() {
  return (
    <div className="flex flex-col gap-1">
      <div className="w-full bg-gray-200 rounded-sm h-4 dark:bg-gray-700">
        <div className="bg-[#12B76A] h-full rounded-sm w-[40%]"></div>
      </div>
      <div className="flex justify-between mt-3">
        <span className="text-sm w-full font-medium text-center dark:text-white">
          40%
        </span>
      </div>
      <button className="bg-transparent progressButton w-[60%] mx-auto  my-5">
        Cancel
      </button>
    </div>
  );
}

export default ProgressBar;
