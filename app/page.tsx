import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Story from "@/components/Story";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Navbar />
      <div className="w-full m-12">
        <Hero />
        <Story />
      </div>
      <div className="max-w-9xl w-full">
        <div className="absolute z-[0] -left-4 bottom-[30%] w-[250px] h-[250px] rounded-full bg-pink-gradient blur-[150px]" />
        <Stats />
      </div>
      <div className="max-w-7xl w-full">
        <CTA />
        <Team />
      </div>
    </main>
    <Footer />
    </>
  );
}
