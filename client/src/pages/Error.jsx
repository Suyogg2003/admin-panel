import { NavLink } from "react-router-dom";
import "../styles/error.css";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>sorry! page not found</h4>
          <p>
            Oops! it seems like the page you're trying to access doesn't exist.
            if you believe there is an issue, feel free to report it, and we'll
            look into it .
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
