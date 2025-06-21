import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import this , this hook is use for navigate from one page to another

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // 👈 useNavigate hook

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", user);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user), // converts obj into json
      });
      console.log(response);
      if (response.ok) {
        alert("login successful");
        setUser[{ email: "", password: "" }];
        navigate("/");
      } else alert("invalid credentials");
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <h1 className="main-heading">Login Now</h1>
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
