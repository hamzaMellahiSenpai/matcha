import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { userFriends } from "@fortawesome/fontawesome-svg-core";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  let user = {
    location: "Poland, Warszawa",
    age: "23",
    first_name: "Jhoon",
    last_name: "Sin",
    isOnline: true,
    intresets:
      "Cinema, dinner with friends, shoes, makeup, shopping, walks on the beach.",
    languages: [
      { name: "English", level: "conversational" },
      { name: "Polish", level: "Native" },
    ],
  };
  let {
    location,
    isOnline,
    intresets,
    languages,
    first_name,
    age,
    last_name,
    distance,
  } = user;
  return (
    <div className="col-span-7 md:col-span-2">
      <div className="shadow-xl bg-gray-50 rounded p-3 ">
        <div className="flex border-b-2	border-gray-200	pt-3 pb-6">
          <div className="flex-1">
            <img src="men.jfif" className="h-16 w-full rounded-2xl	  pr-3 " />
          </div>
          <div className="flex-2 pt-2">
            <h2 className="font-bold">
              {first_name} {last_name}
            </h2>
            <p>
              Status :{" "}
              <strong>
                <a href="" className="text-pink-main">
                  Without Premium
                </a>
              </strong>
            </p>
          </div>
          <div className="flex-1 text-grey-main pl-3 pt-3">
            <button>
              <svg
                className="w-20 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-5">
          <div className="col-span-1 flex my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="38"
              className="text-orange-main mr-2"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <p className="my-auto text-bold text-xl">257</p>
          </div>
          <div className="col-span-2 text-center">
            <button className="flex bg-pink-main p-2 text-gray-50 rounded w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="40"
                className="ml-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h2 className="pt-2">Get Premium</h2>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.activeTab + " flex text-gray-500 mt-8"}>
        {/* <FontAwesomeIcon icon={userFriends} /> */}
        <svg
          //  className={styles.activeTab}
          width="50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <h1 className="ml-6 flex-1 mt-3">Begin Encounters</h1>
        <button className="bg-orange-main text-white px-4 text-gray-50 rounded font-bold text-xl m-1">
          24
        </button>
      </div>
      <div className={"flex text-gray-500 mt-4"}>
        <svg
          //  className={styles.activeTab}
          width="50"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <h1 className="ml-6 flex-1 mt-3">Messages</h1>
        <button className="bg-orange-main text-white px-4 text-gray-50 rounded font-bold text-xl m-1">
          24
        </button>
      </div>
      <div className="flex text-gray-500 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          />
        </svg>
        <h1 className="ml-6 flex-1 mt-3">Nearby People</h1>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
