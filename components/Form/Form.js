import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";
import CustomSelectMenu from "../SelectMenu/SelectMenu";
import CustomRadioInput from "../CustomRadioInput/CustomRadioInput";
import CustomImgUpldoad from "../CustomImgUpldoad/CustomImgUpldoad";
import CustomTagsInput from "../CustomTagsInput/CustomTagsInput";

const schema = yup.object().shape({
  email: yup.string().required().max(20),
  password: yup.string().required().min(8).max(20),
  // age: yup.number().positive().integer().required(),
});

const grid = {
  half: "md:col-span-3",
  to: "md:col-span-2",
};
const Form = ({ fields, title }) => {
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors.email?.message);
  };
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(fields);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-6 gap-6">
          {fields.map((field) => (
            <div
              key={field.name}
              className={
                (field.width ? grid[field.width] : "col-span-6") +
                " col-span-6 relative mb-3"
              }
            >
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                {field.name}
              </label>
              {field.type == "select" ? (
                <CustomSelectMenu options={field.options} />
              ) : // ) : field.type == "checkbox" ? (
              //   <CustomRadioInput options={field.options} />
              field.type == "upload" ? (
                <CustomImgUpldoad />
              ) : field.type == "tags" ? (
                <CustomTagsInput options={field.options} />
              ) : field.type == "textarea" ? (
                <textarea
                  ref={register}
                  name={field.name}
                  maxlength="150"
                  className="resize-none px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                />
              ) : (
                <input
                  ref={register}
                  type={field.type}
                  name={field.name}
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder={field.name}
                  style={{ transition: "all .15s ease" }}
                />
              )}
              {errors[field.name]?.message}
            </div>
          ))}
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              id="customCheckLogin"
              type="checkbox"
              className="form-checkbox text-gray-800 ml-1 w-5 h-5"
              style={{ transition: "all .15s ease" }}
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Remember me
            </span>
          </label>
        </div>

        <div className="text-center mt-6">
          <input
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
            type="submit"
            style={{ transition: "all .15s ease" }}
            value={title}
          />
          {/* Sign In
        </button> */}
        </div>
      </form>
    </>
  );
};
// setLocale({
//   mixed: {
//     default: "Não é válido",
//   },
//   number: {
//     min: "password muse be more then ${min} char",
//   },
// });

// const schema = yup.object().shape({
//   email: yup.string().required().max(20),
//   password: yup.string().required().min(8).max(20),
//   // age: yup.number().positive().integer().required(),
// });

// function Form() {
//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = (data, errors) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" name="email" ref={register} />
//       <p>{errors.email?.message}</p>
//       <input type="text" name="password" ref={register} />
//       <p>{errors.password?.message}</p>
//       <input type="submit" />
//     </form>
//   );
// }
Form.propTypes = {};

Form.defaultProps = {};

export default Form;
