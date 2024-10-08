"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Bryan",
                1000,
                "2nd Year Informatics student",
                1000,
                "Newbie Programmer",
                1000,
                "Single",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className=" flex  text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 gap-2">
            <a href="https://github.com/bry-ho">
              <IoLogoGithub style={{ fontSize: "3em" }} />
            </a>
            <a href="https://www.instagram.com/bryho_/">
              <FaInstagram style={{ fontSize: "3em" }} />
            </a>
          </div>
          <p className="text-white mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            animi nam, voluptates ipsa doloribus maiores delectus tempore
            perferendis debitis odit placeat minus qui optio quas illum veniam.
            Voluptatem, autem dicta.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Dummy
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 border text-white ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Dummy
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-5 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/hero-image.jpg"
              alt="Hero Image"
              className="object-cover rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
