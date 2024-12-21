import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-transparent text-gray-100 py-10 px-5 sm:px-10 w-[100%]">
      <div className="max-w-4xl mx-auto">

        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-white text-center mb-4">
            Welcome to Oxum Labs 
          </h1>
          <p className="text-center text-gray-400 text-lg">
            Innovating the future of programming, one tool at a time.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 leading-relaxed">
            At Oxum Labs, we are dedicated to creating high-quality, accessible
            tools and resources to empower developers worldwide. As the proud
            creators of Neit, a cutting-edge programming language, we strive to
            push the boundaries of what’s possible in software development. Our
            mission is to craft tools that make coding simple, accessible, and
            joyful for everyone, regardless of their experience level.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Our team is driven by a passion for inclusivity, creativity, and
            innovation. We aim to bridge gaps in the tech world by offering
            solutions that are not only powerful but also user-friendly. With a
            community-driven approach, we ensure every voice is heard, and every
            need is addressed in our journey to shape the future of technology.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Our Vision 🌟</h2>
          <p className="text-gray-300 leading-relaxed">
            “At Oxum Labs, we believe that the future of technology is shaped by
            open minds and accessible solutions. By focusing on community-driven
            development, we aim to make powerful tools free, available, and easy
            to use for everyone.”
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Our vision goes beyond creating tools; we aspire to build a world
            where technology is a gateway to solving real-world challenges. We
            dream of empowering developers to turn their ideas into reality,
            fostering innovation that drives progress and transforms lives.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Innovative Solutions:</strong> Developing the Neit
              programming language and other projects to drive technological
              advancement.
            </li>
            <li>
              <strong>Community Focused:</strong> Listening to the needs of the
              developer community and integrating feedback to improve our tools.
            </li>
            <li>
              <strong>Open Access:</strong> Ensuring our tools and solutions are
              freely available and easy to use.
            </li>
            <li>
              <strong>Empowerment:</strong> Providing educational resources and
              support to help developers learn, grow, and succeed in their
              coding journey.
            </li>
            <li>
              <strong>Collaboration:</strong> Building a network of creators and
              innovators to foster a collaborative tech ecosystem.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-300 leading-relaxed">
            At Oxum Labs, we don’t just build software—we craft experiences. Our
            tools are designed with love, precision, and the goal of empowering
            creators everywhere. Here’s what sets us apart:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
            <li>
              No hidden fees or locked features—everything we create is free and
              liberating.
            </li>
            <li>
              A commitment to accessibility, ensuring our tools are easy to use
              for everyone.
            </li>
            <li>
              A focus on community, taking your suggestions and feedback to
              heart.
            </li>
            <li>
              Innovative technology backed by a passionate and dedicated team.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p className="text-gray-300 leading-relaxed">
            We welcome contributions, feedback, and collaboration! If you have
            suggestions or want to get involved, reach out to us at:
          </p>
          <p className="mt-4 text-center text-lg font-semibold text-indigo-400">
            <a href="mailto:oxumlabs@proton.me" className="hover:text-white">
              Email: oxumlabs@proton.me
            </a>
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Join our growing community of learners, creators, and innovators.
            Together, we can bridge gaps, break barriers, and create a future
            where technology empowers everyone.
          </p>
        </section>

        <footer className="text-center border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            “Programming isn’t about what you know; it’s about what you can
            figure out.” – Chris Pine
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;
