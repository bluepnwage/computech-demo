import { IconBrandGithub } from "@tabler/icons";

export function Footer() {
  return (
    <footer className="py-5 border-t w-4/5 space-y-3 text-gray-600 text-center bg-white">
      <p>
        Demo brought to you by{" "}
        <a href={"https://bluepnwage-portfolio.vercel.app"} target={"_blank"} className="text-indigo-600 ">
          Agis Carty
        </a>
      </p>
      <p>
        View the source code{" "}
        <a href={"#"} target={"_blank"} className="text-indigo-600">
          Here
        </a>
      </p>
      <a aria-label="Github profile" href={"https://github.com/bluepnwage"} target={"_blank"} className="inline-block">
        <IconBrandGithub />
      </a>
    </footer>
  );
}
