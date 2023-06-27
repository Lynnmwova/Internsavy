import { useState } from "react";
import validator from "validator";
import Select from "react-select";

const countryOptions = [
  { value: "Kenya", label: "Kenya" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Uganda", label: "Uganda" },
  { value: "Rwanda", label: "Rwanda" },
];

const UseForm = ({ onSave, user = {} }) => {
  const [userData, setUserData] = useState(user);
  const [errors, setErrors] = useState({});

  const { name, email, country, message } = userData;
  const validateData = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!validator.isEmail(email)) {
      errors.name = "A valid email is required";
    }
    return errors;
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSelectChange = (option) => {
    setUserData((prevData) => ({ ...prevData, country: option }));
  };
  const handleSave = () => {
    const errors = validateData();
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    setErrors({});
    console.log({ userData });
    onSave(userData);
  };
  return (
    <div>
      <div className="h-screen flex bg-white pg bg-cover">
        <div
          className="w-full max-w-md m-auto backdrop-blur-md bg-white rounded-lg border border-primaryBorder drop-shadow-2xl

 py-10 px-16"
        >
          <form>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900:text-white">
                {" "}
                Name
              </label>{" "}
              <input
                name="Name"
                value={name}
                onChange={handleChange}
                className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              />
              <div style={{ color: "red" }}>{errors.name}</div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900:text-white">
                {" "}
                Email{" "}
              </label>
              <input
                name="email"
                value={email}
                onChange={handleChange}
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <div style={{ color: "red" }}>{errors.name}</div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Select your country
              </label>
              <Select
                value={countryOptions.find(({ value }) => value === country)}
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
                value={message}
                name="message"
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Leave us a message!"
              ></textarea>
            </div>
            <div
              className="flex justify-center items-center mt-6"
              style={{ marginTop: "12px" }}
            >
              <button
                onClick={handleSave}
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

export default UseForm;
