import React from "react";
import { AiFillSetting } from "react-icons/ai";

const Header = () => {
  return (
    <div
      className="flex px-5 items-center justify-center h-[60px]
     bg-white fixed top-0 z-50 shadow-md w-full"
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-center gap-6">
          <img
            className="w-[30px]"
            src="data:image/png;base64,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"
            alt=""
          />
          <h1 className="text-gray-600 text-[23px]">chrome web store</h1>
        </div>
        <div className="flex items-center justify-center gap-6">
          <AiFillSetting
            size={23}
            className="cursor-pointer text-gray-500
           hover:text-blue-500"
          />
          <p
            className="cursor-pointer text-gray-600
           hover:text-blue-600"
          >
            sign in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
