import { NavLink } from "./NavLink";
import { TestPopover } from "./NavPopover";
import { Suspense } from "react";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <header className="h-12 z-[9999] w-full items-center px-5 md:px-10 border sticky top-0 left-0 bg-white flex justify-between">
      <div className="flex gap-2 items-center">
        <img src={logo.src} alt={"The official computech logo"} />{" "}
        <span className="hidden md:inline" aria-hidden>
          |
        </span>{" "}
        <p className="hidden md:block">Home</p>
      </div>
      <Suspense>
        <MobileMenu />
      </Suspense>
      <nav className="h-full hidden md:flex items-center">
        <ul className="flex gap-2  h-full items-center">
          <li>
            <Link href={"/demo"} className="text-gray-900">
              Demo
            </Link>
          </li>
          <li className="relative">
            <Suspense>
              <TestPopover />
            </Suspense>
          </li>
          <li>
            <NavLink>Industries</NavLink>
          </li>
          <li>
            <NavLink>Solutions</NavLink>
          </li>
          <li>
            <NavLink>Our Partners</NavLink>
          </li>
          <li>
            <NavLink>About us</NavLink>
          </li>
          <li>
            <NavLink>Blog</NavLink>
          </li>
          <li className="h-full px-3 bg-indigo-800 text-gray-300 flex items-center">
            <a className="" href={"#"}>
              Request a call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
