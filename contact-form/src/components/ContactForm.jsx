import { z } from "zod";

function ContactForm() {
  const schema = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    message: z.string().min(10).max(200),
  });

  return (
    <>
      <div className="h-screen flex bg-white pg bg-cover">
        <div
          className="w-full max-w-md m-auto backdrop-blur-md bg-white rounded-lg border border-primaryBorder drop-shadow-2xl

 py-10 px-16"
        >
          <form>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900:text-white">
                {" "}
                First name
              </label>
              <input
                type="string"
                className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              ></input>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900:text-white">
                {" "}
                Second name
              </label>
              <input
                type="string"
                className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
              ></input>
            </div>
            <div className="mb-6">
              {" "}
              <label className="block mb-2 text-sm font-medium text-gray-900:text-white">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              ></input>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Select your country
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Kenya</option>
                <option>Uganda</option>
                <option>Rwanda</option>
                <option>Tanzania</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Leave us a message!"
              ></textarea>{" "}
            </div>
            <div className="flex justify-center items-center mt-6">
              <button className="px-4 py-2 text-sm text-blue-600 font-semibold rounded-full border border-blue-500 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                {" "}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
