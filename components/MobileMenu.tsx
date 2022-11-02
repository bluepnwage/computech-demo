"use client";
import { Popover, Transition } from "@headlessui/react";
import { IconMenu2, IconX } from "@tabler/icons";
import { Fragment, ReactNode } from "react";

export function MobileMenu() {
  return (
    <>
      <Popover className="md:hidden block">
        {({ open }) => (
          <>
            <Popover.Button
              className="relative block w-fit text-gray-900"
              aria-label={open ? "Close Menu" : "Open Menu"}
            >
              {open ? <IconX /> : <IconMenu2 />}
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
              <Popover.Panel className="absolute bottom-2/2 ring-1 rounded-md  ring-black ring-opacity-5 bg-white px-4 pt-4 left-1/2 transform">
                <ul className="space-y-2">
                  <li>
                    <Popover>
                      {({ open }) => (
                        <>
                          <Popover.Button className="relative w-fit">
                            <span>Covid-19 Resources</span>
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
                            <Popover.Panel
                              style={{ width: "100%" }}
                              className="absolute top-2/2 right-[105%] transform px-4 pt-4 bg-white rounded-md "
                            >
                              <ul className="space-y-2 pb-2">
                                <li>Digital Covid Certificate</li>
                                <li>Covid-19 VMS</li>
                              </ul>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </li>
                  <li>
                    <Anchor>Industries</Anchor>
                  </li>
                  <li>
                    <Anchor>Solutions</Anchor>
                  </li>
                  <li>
                    <Anchor>Our Partners</Anchor>
                  </li>
                  <li>
                    <Anchor>About Us</Anchor>
                  </li>
                  <li>
                    <Anchor>Blog</Anchor>
                  </li>
                  <li className="-mx-4">
                    <button className="bg-indigo-600 py-2 h-full w-full rounded-br-md rounded-bl-md text-gray-200">
                      Request a call
                    </button>
                  </li>
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}

interface PropTypes {
  children: ReactNode;
}

function Anchor({ children }: PropTypes) {
  return (
    <a href={"#"} className="">
      {children}
    </a>
  );
}
