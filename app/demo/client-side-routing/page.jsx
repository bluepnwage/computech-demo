export default function ClientRouting() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold text-gray-900 text-3xl text-center mt-5 mb-4">Client Side Routing</h2>
        <article className="w-full">
          <p>
            Next.js uses <em>client-side routing</em> to handle page navigations. With this approach, page navigations
            are typically faster since the browser does not have redownload assets that don&apos;t change (eg:
            navigation bar, footer) and only download the code that needs to be swapped in. This is contrary to{" "}
            <em>server-side routing</em> where on each page change, the browser renders an entirely new document.
          </p>
        </article>
      </div>
    </>
  );
}
