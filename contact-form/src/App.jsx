import ContactForm from "./components/ContactForm";
import UseForm from "./components/UserForm";

function App() {
  const user = {
    name: "Pauline Mwova",
    email: "paulinemwova@gmail.com",
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
        <UseForm onSave={handleSend} {...{ user }} />
      </div>
    </>
  );
}

export default App;
