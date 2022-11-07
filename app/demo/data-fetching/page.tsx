import { Section } from "@components/Section";
import Link from "next/link";

export default function Overview() {
  return (
    <>
      <Section>
        <h2 className="font-bold text-2xl text-center mb-2 mt-5">Data fetching with Next.js</h2>
        <article className="w-3/5 space-y-2">
          <p>There 2 main ways Next.js can fetch data on the server:</p>
          <li>Server-side rendering</li>
          <li>Static-site generation</li>
          <p>
            Although most tools limit you to one of these strategies, with the power of Next.js, you can use both SSR
            and SSG on a per-page basis, allowing you to serve both static and personnalized conttent without
            sacrificing performance.
          </p>
        </article>
      </Section>
      <Section>
        <h2 className="font-bold text-3xl mb-2">Data fetching demo</h2>
        <article className="w-3/5 space-y-4">
          <p>There are 3 examples to show the different ways Next.js can fetch data on the server:</p>
          <ul className="space-y-2 ml-4 list-disc">
            <li>
              <Link className="text-indigo-600" href={"/demo/data-fetching/ssg"}>
                Static-Site Generation
              </Link>
            </li>
            <li>
              <Link className="text-indigo-600" href={"/demo/data-fetching/ssr"}>
                Server-side rendering
              </Link>
            </li>
            <li>
              <Link className="text-indigo-600" href={"/demo/data-fetching/streaming"}>
                HTTP streaming
              </Link>
            </li>
          </ul>
          <p>
            For each example, the server is artificially fetching two seperate instances of data, a fake blog and
            information about the author. When the server fetches data for the author of a blog, there is an artificial
            delay of 3 seconds.The key to this demo, is to exhibit <strong>when</strong> the delay ocurrs and{" "}
            <strong>how</strong> it impacts the users&apos; experience.
          </p>
        </article>
      </Section>
    </>
  );
}
