import type { AnchorHTMLAttributes, ReactNode } from "react";

interface PropTypes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}
export function NavLink({ children, ...anchorProps }: PropTypes) {
  return (
    <a
      {...anchorProps}
      href={"#"}
      className="text-gray-900 px-3 py-2 outline-none appearance-none rounded-sm hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-opacity-75"
    >
      {children}
    </a>
  );
}
