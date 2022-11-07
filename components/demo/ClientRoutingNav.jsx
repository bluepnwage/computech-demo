import Link from "next/link";

export function ClientRoutingNav() {
  return (
    <>
      <div className="border-t -mx-4 flex justify-center pt-4 gap-4">
        <Link href={"/demo/client-side-routing/"}>Home</Link>
        <Link href={"/demo/client-side-routing/client"}>Client-side routing</Link>
        <a href={"/demo/client-side-routing/server"}>Server-side routing</a>
      </div>
    </>
  );
}
