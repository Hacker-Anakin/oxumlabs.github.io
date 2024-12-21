"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const NAV_LINKS = [
    { href: "#home", key: "home", label: "Home"},
    { href: "/about-us", key: "about_us", label: "About Us"},
    { href: "#team", key: "team", label: "Team" },
    { href: "https://nsite-lac.vercel.app/", key: "neit", label: "NEiT" },
  ];

  return (
    <nav className="flex items-center w-full relative z-30 py-5 bg-transparent text-white">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex justify-center items-center m-auto">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="relative group flex items-center gap-2 cursor-pointer"
          >
            <Link
              href={link.href}
              className="text-md text-gray-50 pb-1.5 transition-all hover:font-bold flex items-center gap-2"
            >{link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;