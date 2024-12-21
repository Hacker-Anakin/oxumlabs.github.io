import Footer from "@/components/Footer";
import About_us from "@/components/About-us";

export default function Home() {
  return (
    <>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full m-12">
        <About_us />
      </div>
    </main>
    <Footer />
    </>
  );
}
