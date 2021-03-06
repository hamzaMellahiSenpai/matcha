import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import Link from "next/link";
import { createList } from "../utils/createList";

export const login = function () {
  let fields = [
    { name: "first name", type: "text", width: "half" },
    { name: "last name", type: "text", width: "half" },
    { name: "email", type: "email", width: "half" },
    { name: "password", type: "password", width: "half" },
    {
      name: "Tags",
      type: "tags",
      options: [
        { value: "sport", label: "sport" },
        { value: "napping", label: "napping" },
        { value: "tkfat", label: "tkfat" },
      ],
    },
    { name: "Bio", type: "textarea" },
    {
      name: "Gendre",
      type: "select",
      width: "to",
      options: [
        { value: "male", label: "male" },
        { value: "female", label: "female" },
        { value: "other", label: "other (Gaaaay)" },
      ],
    },
    {
      name: "Age",
      type: "select",
      width: "to",
      options: createList(10, 90),
    },
    { name: "PROFILE Img", type: "upload", width: "to" },
  ];
  return (
    <div className="h-screen">
      <Navbar transparent />
      <section className="absolute w-full h-full bg-gray-50">
        <div
          className="absolute top-0 w-full h-full bg-gray-50"
          style={{
            backgroundImage:
              "url(https://tinder.com/static/build/m/07eef8b101ca939c978a599f508aa955.webp)",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
        </div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-50 border-0">
                <div className="rounded-t mb-0 px-6 pt-3">
                  <div className="text-center mb-3">
                    <img src={"logo1.svg"} className="w-12 mx-auto" />
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 pt-2 pb-0">
                  <div className="text-gray-500 text-center mb-3 font-bold">
                    register
                  </div>
                  <Form fields={fields} title="Sign Up" />
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
                <div className="flex ">
                  <div className="w-1/2">
                    <Link href="/ResetPassword">
                      <button
                        className="  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style={{ transition: "all .15s ease" }}
                        value="Forgot Password?"
                      >
                        Forgot Password ?
                      </button>
                    </Link>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link href="/Login">
                      <button
                        className="text-orange-main  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Already have an account?
                      </button>
                    </Link>
                  </div>
                </div>
                {/* <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-300"
                  >
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div className="w-1/2 text-right">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-300"
                  >
                    <small>Create new account</small>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
