"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { cx } from "../../util/cx";
const blogs = [{ id: "1" }, { id: "2" }, { id: "3" }];

export function StreamingNav() {
  const [segments] = useSelectedLayoutSegments();
  return (
    <div className="border-b p-2 flex justify-center -mx-4 -mt-4 mb-4">
      <ul className="flex gap-5 mx-auto">
        <li>
          <Link className={!segments ? "text-indigo-600" : "text-gray-900"} href={"/demo/streaming"}>
            Home
          </Link>
        </li>
        {blogs.map((blog, key) => {
          const active = blog.id === segments;
          return (
            <li key={key}>
              <Link
                className={cx(active ? "text-indigo-600" : "text-gray-900")}
                href={`/demo/streaming/${blog.id}`}
              >{`Blog #${blog.id}`}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
