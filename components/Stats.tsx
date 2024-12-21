import React from "react";
import Marquee from "./ui/Marquee";

const data = [
  {
    index: 1,
    title: "Active Projects",
    num: "3+",
    body:
      "Currently working on 3+ active projects, including NEiT and collaborations on C/C++.",
  },
  {
    index: 2,
    title: "Technology Proficiency",
    num: "11+",
    body:
      "Expertise in 11+ technologies, including C/C++, TypeScript, Rust, and Vercel.",
  },
  {
    index: 3,
    title: "GitHub Contributions",
    num: "1,000+",
    body:
      "Over 1,000+ commits made to repositories showcasing development consistency.",
  },
  {
    index: 4,
    title: "Community Engagement",
    num: "10+",
    body:
      "Collaborated with developers across 10+ countries to create innovative solutions.",
  },
  {
    index: 5,
    title: "GitHub Achievements",
    num: "15+",
    body:
      "Earned 15+ GitHub Trophies recognizing significant contributions to open-source.",
  },
  {
    index: 6,
    title: "Top Language Usage",
    num: "5+",
    body:
      "Worked extensively with 5+ programming languages, with Rust and C being the most used.",
  },
];

const Card = ({ title, body, num }: { title: string; body: string, num: string}) => {
  return (
    <div
      className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-black-200 hover:bg-gray-50/[.15]"
    >
      <div className="gap-2">
        <div className="flex flex-col text-center">
          <p className="text-lg text-white-100 font-bold">{title}</p>
          <p className="text-md font-medium text-blue-200">{num}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-white">{body}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">
      <Marquee pauseOnHover className="[--duration:50s]">
        {data.map((item) => (
          <Card key={item.index} title={item.title} body={item.body} num={item.num}/>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r  from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default Stats;
