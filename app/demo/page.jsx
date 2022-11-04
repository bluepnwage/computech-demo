import { Section } from "../../components/Section";
import Link from "next/link";
export default function Test() {
  return (
    <>
      <Section>
        <h2 className="text-3xl font-bold mt-4 mb-2">Next.js demo</h2>
        <p className="w-3/5">
          The purpose of this demonstration, will be to showcase some of the core features of Next.JS and its
          flexibility to build complex web applications.
        </p>
      </Section>
      <Section>
        <h2 className="font-bold text-3xl mb-2">How it works</h2>
        <article className="w-3/5 space-y-4">
          <p>There are 3 examples to show the different ways Next.js can fetch data on the server:</p>
          <ul className="space-y-2 ml-4 list-disc">
            <li>
              <Link className="text-indigo-600" href={"/demo/ssg"}>
                Static-Site Generation
              </Link>
            </li>
            <li>
              <Link className="text-indigo-600" href={"/demo/ssr"}>
                Server-side rendering
              </Link>
            </li>
            <li>
              <Link className="text-indigo-600" href={"/demo/streaming"}>
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
