import React, { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", user);
    // Add login API call here
  };

  return (
    <section>
      <main>
        <div className="section-registration">
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
              <h1 className="main-heading mb-3">Login</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
