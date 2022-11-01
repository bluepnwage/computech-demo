import type { AnchorHTMLAttributes, ReactNode } from "react";

interface PropTypes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}
export function NavLink({ children, ...anchorProps }: PropTypes) {
  return (
    <a {...anchorProps} href={"#"} className="text-gray-900 px-3 py-2 hover:text-indigo-600">
      {children}
    </a>
  );
}
