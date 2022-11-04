import type { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
}

export function Alert({ children }: PropTypes) {
  return (
    <>
      <div className="bg-indigo-100 text-indigo-900 rounded-md px-4 py-2">
        <p>{children}</p>
      </div>
    </>
  );
}
