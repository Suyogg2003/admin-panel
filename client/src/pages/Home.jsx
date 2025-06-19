import React from "react";
import "../styles/home.css";
import { Analytics } from "./Analytics";
export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the best selling shop in the jaysingpur</p>
              <h1>welcome to Balaji Electronics</h1>
              <p>
                we are the leading company in the jaysingpur and now we are
                looking for taking all share holding to our side with new
                technologies.By integrating this in out buisness.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <div className="btn">connect now</div>
                </a>
                <a href="/">
                  <div className="btn">learn more</div>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="home page img"
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
