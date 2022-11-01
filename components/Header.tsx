import { NavLink } from "./NavLink";
import styles from "./header.module.css";
import { TestPopover } from "./NavPopover";
import { Suspense } from "react";
export default function Header() {
  return (
    <header className="h-12 z-[9999] items-center px-10 border sticky top-0 left-0 bg-white flex justify-between">
      <p>Computech | Home</p>
      <nav className="h-full flex items-center">
        <ul className="flex gap-5 h-full items-center">
          <li className="relative">
            <TestPopover />
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
