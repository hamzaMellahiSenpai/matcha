import React from "react";
import Select from "react-select";

export default function CustomTagsInput({options}) {
  return (
    <Select
      // defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="tags"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
}
