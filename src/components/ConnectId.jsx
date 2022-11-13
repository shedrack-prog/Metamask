import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

import { FaDownload } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";

import Logo from "../assets/metalogo.jpg";

const ConnectId = () => {
  return (
    <div
      className=" items-center py-4 px-4 sm:max-w-[100vw]  lg:max-w-[70vw] lg:mx-auto
      sm:mx-auto"
    >
      <Link to="/">
        <div className="flex items-center ">
          <img src={Logo} alt="METAMASK LOGO" className="w-[30px] " />
          <h1 className="text-[1.5rem] font-semibold">METAMASK</h1>
        </div>
      </Link>
      <div className="flex justify-center flex-col w-full mt-[8rem]">
        <h1 className="text-center text-[1.5rem] mb-[1rem]">
          New to MetaMask?
        </h1>

        <div
          className="flex mt-[3rem] 
        flex-col md:flex-row items-center
       "
        >
          <div
            className="flex flex-col items-center justify-center
          border-2 border-gray-300 p-6 w-[400px] mr-[2rem] "
          >
            <FaDownload size={26} className="text-gray-400" />
            <p className="font-medium mb-2">
              No,I already have a secret Recovery Phrase
            </p>
            <span className="text-center">
              import your existing wallet using a secret Recovery Phrase
            </span>

            <Link
              to="/import-wallet"
              className="text-white bg-blue-500 rounded-2xl px-7 mt-3 py-1"
            >
              Import wallet
            </Link>
          </div>

          <div
            className="flex flex-col items-center justify-center
          border-2 border-gray-300 p-6  w-[400px]"
          >
            <GrAdd size={26} className="text-gray-400 font-bold" />
            <p className="font-medium mb-2">Yes, let's set get set up</p>
            <span className="text-center">
              This will create a new wallet and secret Recovery Phrase
            </span>

            <Link
              to=""
              className="text-white bg-blue-500 rounded-2xl px-7 mt-3 py-1"
            >
              Create a wallet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectId;
// template_667j1sm
// 4ASmkqi_k8DD1IbGu
// service_nxych5i
