"use client";

import React from "react";
import Particles from "./ui/Particles";
import Link from "next/link";

const Story = () => {
  return (
    <div className="relative flex lg:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl mt-12">
      <div className="flex flex-col items-center">
        <span className="pointer-events-none text-white-100 text-center text-7xl font-semibold leading-none">
          About Us
        </span>
        <p className="font-extralight text-base md:text-2xl text-white-200 py-4 text-center">
          Guided by this philosophy, we strive to build a thriving community of
          learners, creators, and innovators. Whether you&apos;re an experienced
          developer or just starting out, OxumLabs is here to provide the
          support, tools, and inspiration you need to transform your ideas into
          reality. Together, we can bridge gaps, break barriers, and create a
          future where technology empowers everyone.
        </p>
        <Link href="/about-us" className="w-[100%] flex flex-col justify-center items-center">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[40%]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black-100 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Learn More
            </span>
          </button>
        </Link>
      </div>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#C1C2D3"}
        refresh
      />
    </div>
  );
};

export default Story;
