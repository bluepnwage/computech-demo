import { Alert } from "@components/demo/Alert";

export default function Streaming() {
  return (
    <>
      <h2 className="font-bold text-2xl mb-2 text-center">HTTP Streaming</h2>
      <p className="mb-4">
        Typically in a server-side rendered application, a server will generate HTML once a request is made and
        won&apos;t be able to send a response until all of the content is ready to be sent. However, with HTTP
        streaming, you can now pick and choose which part of your UI is instantly shown to the user while the server is
        sill producing a response. Once the response has been resolved, the rest of your page is progressively rendered.
        This allows your users to start interacting with your page without having to wait for the server since the
        entire page isn&apos;t blocked from rendering. Using this technique can be extremely benificial for countering
        slow network speeds and showing instant feedback to your users.
      </p>
      <Alert>
        Although the dynamic pages here are server-side rendered, you will instantly be able to switch from one page to
        the next, <strong>without</strong> having to wait for the fully generated response form the server.
      </Alert>
    </>
  );
}
