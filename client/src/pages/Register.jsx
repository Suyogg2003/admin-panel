import { useState } from "react";
import "../styles/register.css";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // handling the input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, // this sprade becoz this stores previous vlaues as it is and user is a array
      [name]: value, // used squre brackets for dynamic values
    });
  };

  // handling the form submition
  const handeleSubmit = (e) => {
    e.preventDefault(); // this is used bcoz on submiting the butten page refresh takes place , so this statement prevent this
    console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <h1 className="main-heading">Register Now</h1>
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="images/registration.png"
                  alt="registration img"
                  width="400"
                  height="400"
                />
              </div>
              <div className="registration-form">
                {/* <h1 className="main-heading mb-3">registration form</h1> */}
                <br />

                <form onSubmit={handeleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="uername"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="enter your mobile number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
