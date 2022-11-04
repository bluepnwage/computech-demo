import { Alert } from "../../../../components/demo/Alert";

export default function Ssr() {
  return (
    <>
      <h2 className="font-bold text-gray-900 text-2xl mb-2 text-center">Server-side Rendering</h2>
      <p className="mb-2">
        SSR (server-side rendering), is used to generate HTML on the server the moment a user makes a request.By
        generating a response on demand, you are ensuring that the content being displayed is always up to date. This is
        most useful for websites with dynamic data that changes very often. However, SSR can also lead to increased load
        times, now that the server always has to produce a new response at every request. Additionally, the server
        cannot send a response until all the data is ready to be sent to the client, which can impact your users&apos;
        experience sine they&apos;ll be stuck on the current page until the server is ready. With that being said, SSR
        still provides many benefits.
      </p>
      <p className="mb-2">Some of these benefits include:</p>
      <ul className="list-disc ml-4 mb-4">
        <li>
          <p>Serving personnalized content.</p>
        </li>
        <li>
          <p>Protecting routes with authorization.</p>
        </li>
        <li>
          <p>Displaying dynamic content that is always up to date.</p>
        </li>
      </ul>
      <Alert>
        Since the dynamic pages here use SSR, you will experience a three second delay before being able to switch from
        one page to the next, due to the server having to generate content on each request.
      </Alert>
    </>
  );
}
