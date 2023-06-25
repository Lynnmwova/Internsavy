import ContactForm from "./components/ContactForm";

function App() {
  const user = {
    name: "pauline",
    email: "paulinemwova@gmail.com",
    country: "Kenya",
  };

  const handleSend = (values) => {
    console.log({ values });
  };
  return (
    <>
      <div>
        <h1>Contact Us!</h1>
        <ContactForm onSave={handleSend} {...{ user }} />
      </div>
    </>
  );
}

export default App;
