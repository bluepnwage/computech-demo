import { Section } from "./Section";

export function Contact() {
  return (
    <Section>
      <div className="bg-white ring-1 w-3/6 ring-black rounded-md ring-opacity-5 shadow-md h-96 flex flex-col hover:scale-105 duration-200 ease-out">
        <figure className="bg-gray-900 basis-3/5 rounded-tl-md rounded-tr-md"></figure>
        <div className="p-4 flex ">
          <div className="basis-2/4 grow">
            <p className="font-bold text-3xl mb-2">Next Step</p>
            <p>Now, talk to us about how we can align your IT decisions with your business goals</p>
          </div>
          <div className="basis-2/4 grow flex items-end">
            <button className="bg-indigo-600 text-lg block ml-auto mt-auto text-gray-100 rounded-md px-6 py-4 font-semibold">
              Contact now
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
