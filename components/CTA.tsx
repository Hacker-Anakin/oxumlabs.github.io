import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center">
      <div>
        <h1 className="text-4xl font-bold text-white-100 text-center">NEiT</h1>
        <p className="text-white-100 text-center">
          A innovative new compiled + interpreted programming language aimed at
          making learning to code far far easier for anyone without getting into
          head scratching concepts! Neit keeps things simple and compact, but
          powerful when needed! Neit has a magic power - it can change its
          syntax as per user rules!
        </p>
      </div>
      <Link href="https://nsite-lac.vercel.app/" className="lg:w-[50%] ml-4">
      <div className="w-full bg-circular-gradient p-1 rounded-md">
        <button className="px-8 py-2 w-full rounded-md bg-transparent text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-purple text-lg">
          Get Started
        </button>
      </div>
    </Link>
    </div>
  );
};

export default CTA;
