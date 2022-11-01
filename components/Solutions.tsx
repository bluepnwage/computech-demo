import { Section } from "./Section";
import ai from "../public/solutions-ai.jpg";
import business from "../public/solutions-business.jpg";
import cloud from "../public/solutions-cloud.jpg";
import workplace from "../public/solutions-workplace.jpg";
import security from "../public/solutions-security.jpg";
import industries from "../public/solutions-industries.jpg";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export function Solutions() {
  return (
    <Section>
      <header className="text-center mb-10">
        <h2 className="font-bold text-3xl mb-5">Solutions</h2>
        <p>See our solutions that can help enhance your organization&apos;s digital transformation</p>
      </header>
      <div className="grid grid-cols-12 gap-5  w-11/12">
        <Card
          image={ai}
          title={"Data & Analytics"}
          description={"Make better decisions using the power of data and AI"}
        />
        <Card
          image={business}
          title={"Business Applications"}
          description={"Boost the efficiency of your business processes with intelligent applications"}
        />
        <Card
          image={cloud}
          title={"Cloud infrastructure"}
          description={"Efficient, scalable and secure infrastructures for a succesful transformation"}
        />
        <Card image={workplace} title={"Modern Workplace"} description={"Empower your teams"} />
        <Card image={security} title={"Security"} description={"Protect your business to secure your growth"} />
        <Card
          image={industries}
          title={"Industries"}
          description={"Enhancing transformation and innovation to every industry"}
        />
      </div>
    </Section>
  );
}

interface PropTypes {
  title: string;
  description: string;
  image: StaticImageData;
}

function Card({ description, title, image }: PropTypes) {
  return (
    <div className="col-span-4 group overflow-hidden relative rounded-sm pb-5 flex ring-1 ring-black ring-opacity-5 items-end bg-gray-900 h-64">
      <div className="bg-white p-5 bg-opacity-70 w-11/12 h-2/4 z-50 rounded-sm">
        <h3 className="font-bold text-xl">{title}</h3>
        <p>{description}</p>
      </div>
      <Image
        src={image}
        alt={""}
        className="absolute group-hover:scale-125 duration-500 ease-out top-0 left-0 w-full h-full"
      />
    </div>
  );
}
