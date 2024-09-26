import React from "react";
import Header from "../components/headers/Header";
import { ApplicationConstants } from "../contants/ApplicationConstants";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="p-2 w-100 h-100">
        <div className="m-auto justify-center flex">
          <img src={ApplicationConstants.LandingPageImage} />
        </div>
        <div>
          <h1 className="text-center primary-1 font-semibold text-[30px]">
            From Stray to Stray: Open Your Heart, Open Your Home!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
