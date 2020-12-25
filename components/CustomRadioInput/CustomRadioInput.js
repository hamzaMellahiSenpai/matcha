import { ref } from "yup";

import React from "react";

const CustomRadioInput = ({options}) => {
  return (
    <fieldset>
      <div className="mt-4 space-y-4 ">
        {options.map((option) => (
          <div className="flex items-center">
            <input
              id={option}
              name={option}
              type="radio"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label
              htmlFor={option}
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default CustomRadioInput;
