export async function generateStaticParams() {
  return [{ route: "client" }, { route: "server" }];
}

export default function Routing({ params }) {
  return (
    <>
      <p className="text-center text-xl">This page was accessed with {params.route}-side routing.</p>
    </>
  );
}
