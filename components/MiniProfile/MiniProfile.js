import React from "react";
import PropTypes from "prop-types";

const MiniProfile = () => {
  let person = {
    location: "Poland, Warszawa",
    age: "23",
    first_name: "Karina",
    last_name: "Simons",
    isOnline: true,
    intresets:
      "Cinema, dinner with friends, shoes, makeup, shopping, walks on the beach.",
    languages: [
      { name: "English", level: "conversational" },
      { name: "Polish", level: "Native" },
    ],
    distance: "256",
  };
  let user = {
    location: "Poland, Warszawa",
    age: "23",
    first_name1: "Jhoon",
    last_name1: "Sin",
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
  } = person;
  let { first_name1, last_name1 } = user;
  return (
    <>
      <div className="bg-white  mt-2 p-4 text-pink-main rounded shadow-md">
        <div className="">
          <h3 className="text-grey-main">Name, Surname, OLd</h3>
          <h2 className="font-bold text-2xl">
            {first_name} {last_name}, {age}
          </h2>
          <h2>
            Status :{" "}
            {isOnline ? (
              <span className="w-3 h-3 bg-green-500 rounded-full">hel</span>
            ) : (
              "Offline"
            )}
          </h2>
        </div>
        <div className="">
          <h3 className="text-grey-main">Location</h3>
          <div className="flex">
            <h2 className="font-bold text-lg flex-1	">{location}</h2>
            <button className="justify-end text-white bg-pink-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="23"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <h3 className="text-grey-main">intresets</h3>
          <h2 className="font-bold text-lg ">{intresets}</h2>
        </div>
        <div className="">
          <h3 className="text-grey-main">languages</h3>
          {languages.map((lang) => {
            <h2 className="font-bold text-lg ">
              {lang.name} ({lang.level})
            </h2>;
          })}
        </div>
        <button className="mt-5 bg-grey-low p-2 text-grey-main rounded w-full	hover:bg-pink-main hover:text-white hover:border-none">
          View Page Karina
        </button>
      </div>
    </>
  );
};

MiniProfile.propTypes = {};

MiniProfile.defaultProps = {};

export default MiniProfile;
