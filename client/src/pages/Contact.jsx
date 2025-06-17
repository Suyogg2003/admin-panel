import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // lets tackle out handelinput

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/*contact page main */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/contact.png" alt="contact img" />
          </div>

          {/* actual contact form  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username "
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email "
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
