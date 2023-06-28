import Select from "react-select";
import PropTypes from "prop-types";

import { useForm, useController } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2).max(30),
  email: z.string().email(),
  country: z.string(),
  message: z.string().min(10).max(200),
});

const countryOptions = [
  { value: "Kenya", label: "Kenya" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Uganda", label: "Uganda" },
  { value: "Rwanda", label: "Rwanda" },
];

const UserForm = ({ onSave, user = {} }) => {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: user,
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const { field } = useController({ name: "country", control });

  const handleSelectChange = (option) => {
    field.onChange(option.value);
  };

  const handleSave = (formValues) => {
    onSave(formValues);
  };

  return (
    <div>
      <div className="h-screen flex bg-white pg bg-cover">
        <div
          className="w-full max-w-md m-auto backdrop-blur-md bg-white rounded-lg border border-primaryBorder drop-shadow-2xl

 py-10 px-16"
        >
          <form onSubmit={handleSubmit(handleSave)}>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900:text-white">
                {" "}
                Name
              </label>{" "}
              <input
                {...register("name")}
                name="name"
                className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
              <div style={{ color: "red" }}>{errors.name?.message}</div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900:text-white">
                {" "}
                Email{" "}
              </label>
              <input
                {...register("email")}
                name="email"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <div style={{ color: "red" }}>{errors.email?.message}</div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Select your country
              </label>
              <Select
                value={countryOptions.find(
                  ({ value }) => value === field.value
                )}
                onChange={handleSelectChange}
                options={countryOptions}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                name="message"
                /*onChange={handleChange}*/
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Leave us a message!"
              ></textarea>
            </div>
            <div
              className="flex justify-center items-center mt-6"
              style={{ marginTop: "12px" }}
            >
              <button
                type="submit"
                className="px-4 py-2 text-sm text-blue-600 font-semibold rounded-full border border-blue-500 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default UserForm;
