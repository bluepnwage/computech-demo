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
      <p className="text-gray-500 text-xl font-semibold mb-2">Core Features</p>
      <ul className="text-center space-y-2 w-full mb-5">
        {coreFeatures.map((route, key) => {
          const active = route.href === segment;
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
      <ul className="space-y-2 w-full text-gray-700 ">
        <li className="text-center font-semibold p-2">
          <Link href={"/demo/data-fetching"}>Overview</Link>
        </li>
        {demoRoutes.map((link, key) => {
          console.log(segment);
          const active = link.href === segment;
          return (
            <li key={key} className=" text-center p-2 w-full">
              <Link
                aria-current={active ? "page" : "false"}
                className={cx(active ? "text-indigo-600" : "text-gray-900")}
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
  }
];

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
