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
        <h1>Contact Us!</h1>
        <UserForm onSave={handleSend} {...{ user }} />
      </div>
    </>
  );
}

export default App;
