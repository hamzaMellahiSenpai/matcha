import React, { Component } from "react";
import PropTypes from "prop-types";
// import {TweenMax} from "gsap";

export class ImgsSlider extends Component {
  state = {
    distance : 30
  }
  componentDidMount()
  {
    var heart = document.getElementById("test");


  
  // TweenMax.fromTo(heart,.6,
  //   {
  //     visible:true,
  //     scale:1
  //   },
  //   {
  //     scale:1.4,
  //     repeat: -1,
  //     //ease: RoughEase.ease,
  //     //ease: Elastic.easeOut,
  //     //ease: Elastic.easeOut.config(1.75, 1),
  //     yoyo: true
  // });
  
  }


  render() {
    let {distance} = this.state;
    return (
      <>
      <div
        style={{
          backgroundImage: "url(girl.jfif)",
          height: "600px",
        }}
        className="relative text-white bg-gray-700 bg-no-repeat 		 bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black  flex flex-col">
          <div className="">
            <div className="flex text-white top-5 left-5 absolute">
              {/* <svg
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
              </svg> */}
              <i class="fas fa-location-arrow text-3xl pr-3"></i>
              <h3 className="text-xl  font-black	pt-2">{distance}km</h3>
            </div>
            <div className="text-white absolute top-5 right-5">
              <div className="w-4 h-4 mb-2 bg-grey-main rounded"></div>
              <div className="w-4 h-4 mb-2 bg-grey-main rounded"></div>
              <div className="w-4 h-4 mb-2 bg-grey-main rounded"></div>
              <div className="w-4 h-4 mb-2 bg-orange-main rounded"></div>
            </div>
            <div className=" bottom-5 absolute left-5">
              <button className="text-grey-main bg-white p-2 text-gray-50 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="50"
                  className="heart"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="bottom-5 absolute right-1/2 pr-4">
              <button className=" bg-pink-main p-2 text-gray-50 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="50"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="bottom-5	 absolute left-1/2	pl-4">
              <button className=" bg-orange-main p-2 text-gray-50 rounded">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="bottom-5 absolute right-5 ">
              <button className="text-grey-main bg-white p-2 text-gray-50 rounded">
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
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

ImgsSlider.propTypes = {};

ImgsSlider.defaultProps = {};
export default ImgsSlider
