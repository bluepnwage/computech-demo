"use client";
import { cx } from "@util/cx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const path = usePathname();
  return (
    <div
      style={{ height: "calc(100vh - 48px)" }}
      className="w-1/5 border-r fixed bg-white top-12 left-0 flex flex-col items-center pt-5 "
    >
      <p className="text-gray-500 text-xl font-semibold mb-2">Core Features</p>
      <ul className="text-center space-y-2 w-full mb-5">
        {coreFeatures.map((route, key) => {
          const active = path === route.path;
          return (
            <li key={key} className="mx-auto inline-block hover:bg-gray-100 duration-200 ease-out w-4/5 rounded-md">
              <Link
                aria-current={active ? "page" : "false"}
                className={cx(
                  active ? "font-semibold" : "",
                  "text-gray-500 text-center w-full h-full py-2 inline-block"
                )}
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="text-gray-500 text-xl font-semibold mb-2">Data Fetching</p>
      <ul className="space-y-2 w-full text-gray-500 text-center ">
        {demoRoutes.map((route, key) => {
          const active = path === route.path;
          return (
            <li key={key} className="mx-auto inline-block hover:bg-gray-100 duration-200 ease-out w-4/5 rounded-md">
              <Link
                aria-current={active ? "page" : "false"}
                className={cx(
                  active ? "font-semibold" : "",
                  "text-gray-500 text-center w-full h-full py-2 inline-block"
                )}
                href={route.path}
              >
                {route.name}
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
    path: "/demo"
  },
  {
    name: "API Routes",
    path: "/demo/api-routes"
  },
  {
    name: "Client-side routing",
    path: "/demo/client-side-routing"
  },
  {
    name: "Performance",
    path: "/demo/performance"
  }
];

const demoRoutes = [
  {
    name: "Overview",
    path: "/demo/data-fetching"
  },
  {
    name: "Static-Site Generation",
    path: "/demo/data-fetching/ssg"
  },
  {
    name: "Server-Side Rendering",
    path: "/demo/data-fetching/ssr"
  },
  {
    name: "Suspense/Streaming",
    path: "/demo/data-fetching/streaming"
  }
];
