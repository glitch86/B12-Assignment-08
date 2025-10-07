import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-7xl font-bold">
            We Build
            <br />
            <span className="bg-[linear-gradient(45deg,#632EE3,#9F62F2)] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
        </div>
        <div className="max-w-5xl">
          <p className="py-6 italic text-gray-600">
            At <span className="font-bold">HERO.IO</span>, we craft innovative
            apps designed to make everyday life simpler, smarter, and more
            exciting.Our goal is to turn your ideas into digital experiences
            that truly make an impact.
          </p>
          <div className="flex gap-8 justify-center">
            <button className="btn rounded-xl text-xl px-9 py-7">
              <a
                href="https://play.google.com/store/"
                target="_blank"
                className="flex items-center gap-1"
              >
                <IoLogoGooglePlaystore></IoLogoGooglePlaystore>{" "}
                <span>Google Play</span>{" "}
              </a>
            </button>
            <button className="btn rounded-xl text-xl px-11 py-7">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                className="flex items-center gap-1"
              >
                <FaAppStoreIos></FaAppStoreIos>
                <span>App Store</span>{" "}
              </a>
            </button>
          </div>
        </div>
      <div className="mt-5">
        <img src={hero} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Hero;
