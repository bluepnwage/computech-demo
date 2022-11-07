"use client";
import { cx } from "@util/cx";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export function Sidebar() {
  const [segment] = useSelectedLayoutSegments();
  return (
    <div
      style={{ height: "calc(100vh - 48px)" }}
      className="w-1/5 border-r fixed bg-white top-12 left-0 flex flex-col items-center pt-5 "
    >
      <p className="text-gray-500 text-xl font-semibold mb-2">Core Features</p>
      <ul className="text-center space-y-2 w-full mb-5">
        {coreFeatures.map((route, key) => {
          const active = route.href === segment || (segment === null && key === 0);
          return (
            <li key={key}>
              <Link
                aria-current={active ? "page" : "false"}
                className={cx(active ? "font-semibold" : "", "text-gray-500 text-center")}
                href={`/demo/${route.href}`}
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="text-gray-500 text-xl font-semibold mb-2">Data Fetching</p>
      <ul className="space-y-2 w-full text-gray-500 ">
        {demoRoutes.map((link, key) => {
          console.log(link.href, segment);
          const active = link.href === segment || (segment === null && key === 0);
          return (
            <li key={key}>
              <Link
                aria-current={active ? "page" : "false"}
                className={cx(active ? "font-semibold" : "", "text-gray-500  text-center")}
                href={`/demo/data-fetching/${link.href}`}
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

const coreFeatures = [
  {
    name: "Overview",
    href: ""
  },
  {
    name: "API Routes",
    href: "api-routes"
  },
  {
    name: "Client-side routing",
    href: "client-side-routing"
  },
  {
    name: "Performance",
    href: "performance"
  }
];

const demoRoutes = [
  {
    name: "Overview",
    href: ""
  },
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
