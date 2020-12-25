import React, { Component } from "react";
import FilterPeople from "../components/FilterPeople/FilterPeople";
import MiniProfile from "../components/MiniProfile/MiniProfile";
import ImgsSlider from "../components/ImgsSlider/ImgsSlider";

export class SuggestedPeople extends Component {
  render() {
    return (
      <>
        <div className="col-span-7 md:col-span-3 ...">
          <ImgsSlider />
        </div>
        <div className="col-span-7 md:col-span-2 mt-16 md:mt-0">
          <FilterPeople />
          <MiniProfile />
        </div>
      </>
    );
  }
}

export default SuggestedPeople;
