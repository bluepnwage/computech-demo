import { ApiCard } from "../../../components/demo/ApiCard";
import { Section } from "../../../components/Section";

export default function ApiRoutes() {
  return (
    <>
      <Section>
        <h2 className="font-bold text-gray-900 text-3xl text-center mt-5 mb-2">API Routes</h2>
        <div className="w-3/5">
          <p className="">
            Next.js allows you to create API endpoints and execute back-end logic without much configuration. All API
            endpoints that you define are deployed as serverless functions, and are only executed when invoked.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="text-gray-900 font-bold text-center mb-2 text-3xl">Different runtimes</h2>
        <div className="w-3/5">
          <p>
            By default, API routes use the <strong>Node.js runtime</strong>, which is a JavaScript runtime for running
            server-side code, to execute your logic. Due to this, your serverless functions can only be deployed in one
            region at a time, which might cause your users to experience higher latency based on their location in the
            world. Your serverless functions may also suffer from cold starts, if they aren&apos;t invoked on a regular
            basis. However, you can opt-in to using the <strong>Edge runtime</strong> to get around some of the
            downsides to regular serverless functtions. Edge functions will execute code as close as possible to your
            end-users, without suffering from cold starts.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Demo</h2>
        <div className="grid grid-cols-2 w-3/5 ring-1 ring-black ring-opacity-5 bg-white rounded-md">
          <ApiCard runtime={"node"} />
          <ApiCard runtime={"edge"} />
        </div>
      </Section>
    </>
  );
}
