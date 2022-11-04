"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
export function Sidebar() {
  const [segment] = useSelectedLayoutSegments();
  return (
    <div
      style={{ height: "calc(100vh - 48px)" }}
      className="w-1/5 border-r fixed bg-white top-12 left-0 flex flex-col items-center pt-5 "
    >
      <ul className="space-y-4">
        {demoRoutes.map((link, key) => {
          console.log(segment);
          const active = link.href === segment;
          return (
            <li key={key}>
              <Link
                aria-current={active ? "page" : "false"}
                className={cx(active ? "text-indigo-600" : "text-gray-900")}
                href={`/demo/${link.href}`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const demoRoutes = [
  {
    name: "Static-Site Generation",
    href: "ssg"
  },
  {
    name: "Server-Side Rendering",
    href: "ssr"
  },
  {
    name: "Suspense/Streaming",
    href: "streaming"
  }
];

function cx(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
