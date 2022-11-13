import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/metalogo.jpg";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-[8rem]">
      <img src={Logo} alt="METAMASK LOGO" className="w-[100px] " />

      <div className="flex flex-col items-center justify-center mt-[3rem]">
        <h1 className="text-[25px] font-semibold">Welcome to MetaMask</h1>
        <p className="text-medium mt-[1rem]">
          Connecting you to Ethereum and the Decentralized Web.
        </p>
        <p className="mt-[1rem]">We’re happy to see you.</p>
      </div>
      <Link
        className="bg-blue-500 rounded-full py-2 px-12 mt-12 text-white"
        to="/user-wallet-choice"
      >
        Get started
      </Link>
    </div>
  );
};

export default Welcome;
