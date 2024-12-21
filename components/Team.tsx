import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Team = () => {
  const testimonials = [
    {
      quote:
        "The mastermind behind the Neit programming language. As the core programmer, Joy ensures Neit remains innovative, efficient, and user-friendly. From writing complex code to constantly refining ideas, Joy’s passion is the backbone of OxumLabs.",
      name: "Joy (Jay Tirth Kundan)",
      designation: "Co-Founder of OxumLabs",
      src:
        "/Joy.svg",
    },
    {
      quote:
        "The driving force behind the brainstorming of our projects. Bilal is a visionary thinker, always pushing boundaries and exploring new possibilities. From ideation to execution, Bilal ensures OxumLabs stays ahead of the curve.",
      name: "Bilal KanjelKheir",
      designation: "Co-Founder",
      src:
        "/Bilal.svg",
    },
    {
      quote:
        "The mastermind behind this and many more Website. As the core web developer and designer, Anmol Raj is a visionary, always pushing boundaries and exploring new possibilities. From ideation to execution, Anmol ensures OxumLabs stays ahead of the curve.",
      name: "Anmol Raj",
      designation: "Web Designer and Web Developer",
      src:
        "/Anmol.svg",
    },
    {
      quote:
        "Buj is the glue that holds our projects together, providing direction and focus. As the primary manager of Neit, Buj ensures we stay aligned with our goals and maintain momentum.",
      name: "Buj",
      designation: "Lead Manager and Project Coordinator at OxumLabs",
      src:
        "/Buj.svg",
    },
    {
      quote:
        "Elie is our problem-solver and backup wizard, ensuring our projects are robust and reliable. With a sharp eye for detail and a knack for troubleshooting, Elie keeps us on track and supports Joy when things get messy.",
      name: "Elie Khalil",
      designation: "Lead Program Tester and MacOS Port Developer",
      src:
        "/Elie.svg",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-20" id="team">
      <h4 className="lg:text-7xl font-bold text-purple text-5xl">Meet Our Team</h4>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  
);
};

export default Team;
