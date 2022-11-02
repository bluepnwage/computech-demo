import { Section } from "./Section";
import techCenter from "../public/tech-center.jpg";
import briefing from "../public/strategy-briefing.jpg";
import Image, { StaticImageData } from "next/image";
import prototype from "../public/prototype.jpg";
import architect from "../public/architect.jpg";
import lab from "../public/lab.jpg";
import styles from "./tech.module.css";

export function TechCenter() {
  return (
    <Section>
      <header className="mb-10 text-gray-900 text-center">
        <h2 className="font-bold text-3xl mb-5">The Computech Technology Center</h2>
        <p>Trusted. Collaborative. Proven.</p>
      </header>
      <div className={`flex flex-col md:grid md:grid-cols-12 w-11/12 gap-5 ${styles.grid}`}>
        <div className="grow md:col-span-6 md:row-span-full ring-1 rounded-md ring-black ring-opacity-5 shadow-md hover:scale-105 duration-200 ease-out">
          <figure className="bg-gray-900 h-2/5 md:h-3/5 mb-2 overflow-hidden rounded-tl-md rounded-tr-md">
            <Image className="w-full h-full" src={techCenter} alt={""} />
          </figure>
          <div className="p-4 flex-col flex h-3/5 md:h-2/5 justify-between">
            <h3 className="font-bold text-xl mb-2">Computech Technology Centers</h3>
            <p>
              Unique in the Caribbean area, you&apos;ll experiment at the CTC an immersive experience focused on your
              business outcomes. Our team will help you find the right solutions to transform your business by bringing
              together the right collection of resources.
            </p>
            <a href={"#"} className="text-indigo-600 mt-auto block">
              Read more
            </a>
          </div>
        </div>
        <Card
          image={briefing}
          title="Strategy Briefing"
          description={
            "Provide you a clear and actionnable set of next steps in achieving your key business objectives."
          }
        />
        <Card image={prototype} title={"Rapid Prototype"} description={"Is it possible? Let's test it together."} />
        <Card
          image={architect}
          title={"Architecture design session"}
          description={
            "The fundamental steps to find new ideas and gather requirements to design innovative applications."
          }
        />
        <Card image={lab} title={"Hands-on lab"} description={"We empower your teams."} />
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
    <div className="grow md:col-span-3 shadow-md ring-1 rounded-md ring-black ring-opacity-5 hover:scale-105 duration-200 ease-out">
      <figure className="bg-gray-900 h-2/5 md:h-1/3 mb-2 overflow-hidden rounded-tl-md rounded-tr-md">
        <Image className="w-full h-full" src={image} alt={""} />
      </figure>
      <div className="p-5 flex flex-col justify-between h-3/5 md:h-2/3">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p>{description}</p>
        <a href={"#"} className="text-indigo-600 block mt-2 md:mt-auto">
          Read more
        </a>
      </div>
    </div>
  );
}
