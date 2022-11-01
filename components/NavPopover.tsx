"use client";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##"
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##"
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##"
  }
];

export function TestPopover() {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-sm outline-none appearance-none  px-3 py-2 text-base  hover:text-indigo-600  hover:text-opacity-100  focus-visible:ring-2 focus-visible:ring-indigo-600  focus-visible:ring-opacity-75`}
            >
              <span>Solutions</span>
              {/* <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              /> */}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute w-64 left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg w-64 ring-1 ring-black ring-opacity-5">
                  <div className="relative flex flex-col gap-8 w-full bg-white p-7 ">
                    <a
                      href={"#"}
                      className="p-4 outline-none rounded-sm appearance-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                    >
                      Digital Covid Certificate
                    </a>
                    <a
                      href={"#"}
                      className="p-4 outline-none rounded-sm appearance-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                    >
                      Covid-19 VMS
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
