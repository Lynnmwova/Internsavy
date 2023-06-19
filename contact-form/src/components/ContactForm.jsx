function ContactForm() {
  return (
    <>
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900:text-white">
            {" "}
            First name:
          </label>
          <input
            type="string"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          ></input>
          <label className="block mb-2 text-sm font-medium text-gray-900:text-white">
            {" "}
            Second name:
          </label>
          <input
            type="string"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          ></input>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Select your country
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-orange-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
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
            placeholder="leave us a message!"
          ></textarea>{" "}
        </div>
        <div>
          <button> Submit</button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
