function ContactForm() {
  return (
    <>
      <form>
        <div>
          <label> First name:</label>
          <input type="string"></input>
          <label> Second name:</label>
          <input type="string"></input>
        </div>
        <div>
          {" "}
          <label>Email</label>
          <input></input>
        </div>
        <div>
          {" "}
          <label> Country </label>
          <input></input>
        </div>
        <div>
          <label>Message</label>
          <input type="string"></input>
        </div>
        <div>
          <button> Submit</button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
