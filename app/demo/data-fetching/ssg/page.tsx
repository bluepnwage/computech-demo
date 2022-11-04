import { Alert } from "../../../../components/demo/Alert";

export default function Ssg() {
  return (
    <>
      <h2 className="text-gray-900 text-2xl font-bold text-center mb-4">Static-Site Generation</h2>
      <p className="mb-4">
        The process of static-site generation involves generating HTML on the server at build time, and caching the
        content through a globally distributed CDN. This can lead to improved load times since the server no longer
        needs to generate a response each time a request is made. This method of rendering data on the server is best
        used for static content which does not change often.
      </p>
      <>Some examples of when to use SSG are:</>
      <ul className="space-y-2 mb-4 list-disc ml-4">
        <li>Blog websites</li>
        <li>Portfolio websites</li>
        <li>Marketing websites</li>
      </ul>
      <Alert>
        The dynamic pages here are all predetermined and statically generated. Because of this, users will not
        experience any delay since the data on the server is only fetched once at build time.
      </Alert>
    </>
  );
}
