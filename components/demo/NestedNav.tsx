"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { cx } from "@util/cx";
import { capitalize } from "@util/capitalize";

const blogs = [{ id: "1" }, { id: "2" }, { id: "3" }];

interface PropTypes {
  slug: "ssr" | "ssg" | "streaming";
}

export function NestedNav({ slug }: PropTypes) {
  const [segments] = useSelectedLayoutSegments();
  return (
    <div className="border-b px-2 pt-2 flex justify-center -mx-4 -mt-4 mb-4">
      <ul className="flex gap-5 mx-auto">
        <li>
          <Link
            className={cx(
              !segments ? "text-indigo-600 border-indigo-600" : "text-gray-900 border-white",
              "border-b-2 font-semibold"
            )}
            href={`/demo/data-fetching/${slug}`}
          >
            {slug === "streaming" ? capitalize(slug) : slug.toUpperCase()}
          </Link>
        </li>
        {blogs.map((blog, key) => {
          const active = blog.id === segments;
          return (
            <li key={key}>
              <Link
                className={cx(
                  active ? "text-indigo-600 border-indigo-600 " : "text-gray-900 border-white font-semibold",
                  "border-b-2"
                )}
                href={`/demo/data-fetching/${slug}/${blog.id}`}
              >{`Blog #${blog.id}`}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
