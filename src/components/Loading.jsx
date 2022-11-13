import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div
      role="status"
      className="flex w-screen h-screen items-center justify-center"
    >
      <div
        className="border-[2rem] h-[40rem] w-[40rem] border-l-[2rem] border-l-[#5E72E4] loader
          sm:border-[1rem] sm:h-[18rem] sm:w-[18rem] border-cyan-400   rounded-full mt-[2rem]"
      ></div>
    </div>
  );
};

export default Loading;
