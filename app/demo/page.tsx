import { Section } from "@components/Section";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons";

export default function Test() {
  return (
    <>
      <Section>
        <h2 className="text-3xl font-bold mt-4 mb-2">Next.js demo</h2>
        <p className="w-3/5">
          Next.js is a fullstack framweork for building websites with React, and comes with a suite of tools necessary
          to build everything from the back-end to the front-end with performance in mind.
        </p>
      </Section>
      <Section>
        <h2 className="font-bold text-3xl mb-2">Core features</h2>
        <article className="w-3/5 space-y-4">
          <p>Some of the core features that are worth highlighting are::</p>
          <ul className="space-y-2 ml-4 list-disc">
            <li>
              <Link className="text-indigo-600" href={"/demo/data-fetching"}>
                Pre-rendering HTML on the server for search engine optimization
              </Link>
            </li>
            <li>
              <Link className="text-indigo-600" href={"/demo/api-routes"}>
                API Routes
              </Link>
            </li>
            <li>
              <Link className="text-indigo-600" href={"/demo/client-side-routing"}>
                Client side routing
              </Link>
            </li>
            <li>
              <Link className="text-indigo-600" href={"/demo/performance"}>
                Performance optimization
              </Link>
            </li>
          </ul>
          <p>
            You can find out more through the official{" "}
            <a
              className="text-indigo-600"
              title={"Official Next.js documentation"}
              href={"https://nextjs.org/docs/getting-started"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              documentation
              <IconExternalLink className="inline-block ml-[2px]" size={14} aria-hidden />
            </a>{" "}
            for Next.js.
          </p>
        </article>
      </Section>
    </>
  );
}
