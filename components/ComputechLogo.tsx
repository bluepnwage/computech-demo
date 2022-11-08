"use client";
import logo from "../public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function ComputechLogo() {
  const path = usePathname();
  const demo = path?.includes("demo") ? "Demo" : "Home";
  return (
    <>
      <Link aria-label="Home page" href={"/"}>
        <Image src={logo} alt={"The official Computech logo"} />{" "}
      </Link>
      <span className="hidden md:inline" aria-hidden>
        |
      </span>{" "}
      <p className="hidden md:block">{demo}</p>
    </>
  );
}
