import React from "react";
import img from "../assest/bg.jpg"
import Products from "./products";
import Header from "./header";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <div className="heaad">
        <Header />
    <Outlet/>
      </div>
      <div className="relative">
        <img
          src={img}
          className="card-img"
          alt="Background"
          style={{ height: 550 }}
        />
        <div className="absolute inset-y-2/4 left-5">
          <h5 className="text-white text-4xl font-bold">NEW SEASON ARRIVALS</h5>
          <p className="text-white text-lg font-thin">
            CHECK OUT ALL THE TRENDS
          </p>
        </div>
      </div>
      <div>
        <Products/>
      </div>
    </div>
  );
}

export default Home;