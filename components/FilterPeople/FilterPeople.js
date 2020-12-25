import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import Slider from "../Slider/Slider";

const FilterPeople = () => (
  <>
    <div className="bg-white p-4 text-pink-main rounded shadow-md">
      <div className="flex border-b-2 pb-4">
        <div className="flex-1 font-bold text-xl">
          <h3>Filter Search</h3>
        </div>
        <button className=" justify-end ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="30"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
          </svg>
        </button>
      </div>
      <div>
        {/* <i className="fas fa-mars"></i> */}
        {/* <FA name="rocket" /> */}
        <label
          for="first_name"
          className="block text-sm font-medium text-gray-400 text-bold text-xl my-3"
        >
          Location
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pl-3 text-3xl flex items-center pointer-events pr-3">
            <svg
              className="h-8 w-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            name="first_name"
            id="first_name"
            autocomplete="given-name"
            placeholder="Enter Location"
            className="p-4 mt-1 focus:ring-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-700 rounded-md bg-gray-300 text-white text-bold text-8xl"
          />
        </div>
        <h1 className="text-gray-400 text-bold text-xl  my-3">
          Who are u intreseted In?
        </h1>
        <div className="flex text-4xl">
          <button className="mr-12 bg-grey-low p-2 text-grey-main rounded w-full	hover:bg-pink-main hover:text-white hover:border-none">
            <FontAwesomeIcon icon={faMars} />
          </button>
          <button className="bg-grey-low p-2 text-grey-main rounded w-full	hover:bg-pink-main hover:text-white hover:border-none">
            <FontAwesomeIcon icon={faMars} />
          </button>
        </div>
      </div>
      <label
        for="first_name"
        className="block text-sm font-medium text-gray-400 text-bold text-md my-3"
      >
        Indicate the age period
      </label>
      <Slider />
    </div>
  </>
);

FilterPeople.propTypes = {};

FilterPeople.defaultProps = {};

export default FilterPeople;
