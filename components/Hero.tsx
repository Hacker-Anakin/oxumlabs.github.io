"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";

const Hero = () => {
  const words = ["Listening", "Creation", "Innovation", "Dreaming","Thrival","Commitment"];
  return (
    <AuroraBackground id="home">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center mb-12">
          <div className="lg:w-[50%] border-purple border-4 rounded-sm lg:h-[100%] h-[200px] w-[200px]">
            <Image
              src="/main.jpeg"
              alt="Group pic"
              height={100}
              width={100}
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="w-[50%] m-4">
            <div className="text-3xl md:text-7xl font-bold text-center text-blue-100 lg:m-4">
            Welcome to <span className="text-purple">OxumLabs</span>, where passion meets innovation
            </div>
            <div className="font-extralight text-base md:text-4xl text-white-100 py-2 text-center">
            Our guiding philosophy: <FlipWords words={words} /> <br />
            </div>
            <div className="font-extralight text-base md:text-2xl text-white-200 py-2 text-center">
            We don’t just build software—we craft experiences
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
