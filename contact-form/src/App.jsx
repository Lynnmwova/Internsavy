import UserForm from "./components/UserForm";

function App() {
  console.log("This Works");
  const user = {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    country: "Kenya",
    message: "I love your website!",
  };

  const handleSend = (values) => {
    console.log({ values });
  };
  return (
    <>
      <div>
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-blue-600">
                    Contact Us!
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    How can we help?
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Get in touch with us today and let us help you achieve your
                    goals. Contact us now and we’ll be happy to answer any
                    questions you may have!
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <UserForm onSave={handleSend} {...{ user }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
