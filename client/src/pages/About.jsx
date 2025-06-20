import React from "react";
import "../styles/about.css";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-about">
          <div className="container">
            <div className="about-header">
              <h1>About Us</h1>
              <h2>Welcome to Balaji Electronics</h2>
              <p>
                At <strong>Balaji Electronics</strong>, we bring the best of
                technology into your home. Proudly located in{" "}
                <strong>Jaysingpur</strong>, we specialize in a wide range of
                home electronics—from refrigerators, TVs, and washing machines
                to air conditioners, kitchen appliances, and smart devices. Our
                mission is to{" "}
                <strong>
                  empower every customer with reliable, high-quality technology
                </strong>{" "}
                at competitive prices.
              </p>
            </div>
          </div>
        </section>

        <section className="section-why-choose">
          <div className="container">
            <h2>Why Choose Us?</h2>
            <div className="grid grid-two-cols">
              <div className="feature-card">
                <h3>1. One‑Stop Electronics Destination</h3>
                <p>
                  From the latest smart TVs to energy-efficient refrigerators,
                  we stock everything you need to make your home more
                  comfortable and connected—all under one roof.
                </p>
              </div>
              <div className="feature-card">
                <h3>2. Expert Advice, Every Time</h3>
                <p>
                  Our experienced team in Jaysingpur acts as your personal tech
                  advisor, helping you find the perfect product to suit your
                  lifestyle and budget.
                </p>
              </div>
              <div className="feature-card">
                <h3>3. Quality, Unmatched</h3>
                <p>
                  We offer 100% genuine products from trusted brands, complete
                  with manufacturer warranties and after-sales support. Every
                  item is thoroughly checked for quality before reaching you.
                </p>
              </div>
              <div className="feature-card">
                <h3>4. Seamless Shopping Experience</h3>
                <p>
                  Whether you're shopping online or visiting our store, we
                  offer:
                </p>
                <ul>
                  <li>Detailed product descriptions and images</li>
                  <li>Customer reviews and ratings</li>
                  <li>Friendly support via phone, WhatsApp, or live chat</li>
                  <li>Easy returns, installations, and service assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-promise">
          <div className="container">
            <h2>Our Promise</h2>
            <div className="promise-grid">
              <div className="promise-item">
                <h4>Wide Selection at Great Prices</h4>
                <p>
                  We provide a huge range of electronics with transparent
                  pricing and regular discounts.
                </p>
              </div>
              <div className="promise-item">
                <h4>Safe & Secure Shopping</h4>
                <p>
                  Multiple payment options and secure transactions for peace of
                  mind.
                </p>
              </div>
              <div className="promise-item">
                <h4>Reliable Support</h4>
                <p>
                  From purchase to installation and beyond, we're with you every
                  step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-values">
          <div className="container grid grid-two-cols">
            <div className="values-content">
              <h2>Our Values</h2>
              <div className="value-item">
                <h4>Integrity</h4>
                <p>We believe in honest, customer-first service.</p>
              </div>
              <div className="value-item">
                <h4>Customer Satisfaction</h4>
                <p>Your convenience and trust are our top priorities.</p>
              </div>
              <div className="value-item">
                <h4>Innovation</h4>
                <p>
                  We constantly update our product range to bring you the latest
                  in technology.
                </p>
              </div>
            </div>
            <div className="values-image">
              <img
                src="/images/aboutUs.png"
                alt="about us image"
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>

        <section className="section-visit">
          <div className="container">
            <h2>Visit Us</h2>
            <p>
              We invite you to explore our store located in the heart of{" "}
              <strong>Jaysingpur</strong>, where our friendly team is always
              ready to assist. Prefer online shopping? Visit our website anytime
              to browse our full catalog.
            </p>
            <p>
              Have questions? Reach out through phone, email, or chat—we're
              happy to help!
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <div className="btn">Contact Us</div>
              </a>
              <a href="/products">
                <div className="btn">View Products</div>
              </a>
            </div>
          </div>
        </section>

        <section className="section-moving-forward">
          <div className="container">
            <h2>Moving Forward</h2>
            <p>
              Since day one, <strong>Balaji Electronics</strong> has been
              committed to delivering quality and value. Today, we are proud to
              be a trusted name in electronics in
              <strong> Jaysingpur</strong>, and we look forward to serving even
              more happy customers in the future.
            </p>
            <div className="tagline">
              <p>
                <strong>Balaji Electronics</strong> —{" "}
                <em>
                  Brightening your home with trusted electronics and heartfelt
                  service in Jaysingpur.
                </em>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
