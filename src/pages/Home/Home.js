import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">TRAINING ONLINE</h1>
            <p className="mb-5  text-white">
              TRAINING ONLINE is the easiest way to learn. While the names of the coding paradigms sometimes vary, most experts agree on four primary types of code: imperative, functional, logical, and object-oriented.
            </p>
            <Link to="/courses">
              <button className="btn btn-primary  bg-teal-700 border-0 text-lg ">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
