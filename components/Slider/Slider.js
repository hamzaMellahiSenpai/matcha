import React from "react";
import PropTypes from "prop-types";

const Slider = () => {
  return (
    <>
      <div className="flex w-64 m-auto items-center h-32 justify-center">
        <div className="py-1 relative min-w-full">
          <div className="h-2 rounded-full">
            <div
              className="absolute h-2 rounded-full bg-teal-600 w-0"
              // style="width: 24.1935%; left: 11.2903%;"
              style = {{width: '24.1935%', left : "11.2903%"}}
            ></div>
            <div
              className="absolute h-4 flex items-center justify-center w-4 rounded-full shadow border  -ml-2 top-0 cursor-pointer"
              unselectable="on"
              onselectstart="return false;"
              // style="left: 11.2903%;"
              style = {{left : "11.2903%"}}
            >
              <div className="relative -mt-2 w-1">
                <div
                  className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                  // style="margin-left: -25px;"
                  style = {{marginLleft : "-25px"}}
                >
                  <div className="relative shadow-md">
                    <div className="bg-gray-800 -mt-8 text-white truncate text-xs rounded py-1 px-4">
                      $ 15
                    </div>
                    <svg
                      className="absolute text-black  w-full h-2 left-0 top-100"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      // xml:space="preserve"
                    >
                      <polygon
                        className="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      ></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
              unselectable="on"
              onselectstart="return false;"
              // style="left: 35.4839%;"
              style={{left: "35.4839%"}}
            >
              <div className="relative -mt-2 w-1">
                <div
                  className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
                  // style="margin-left: -25px;"
                  style={{marginLeft: "-25px"}}
                >
                  <div className="relative shadow-md">
                    <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                      $ 30
                    </div>
                    <svg
                      className="absolute text-black w-full h-2 left-0 top-100"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      // xml:space="preserve"
                    >
                      <polygon
                        className="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      ></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">
              $ 8
            </div>
            <div className="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">
              $ 70
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
