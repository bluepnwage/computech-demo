import apc from "../public/apc.png";
import hpe from "../public/hpe.png";
import dell from "../public/dell.png";
import microsoft from "../public/microsoft.png";
import fortinet from "../public/fortinet.png";
import veeam from "../public/veeam.png";
import mitel from "../public/mitel.png";
import Image from "next/image";
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons";

export function Footer() {
  return (
    <footer className="bg-gray-900 flex flex-col items-center gap-5 py-10 ">
      <div className="w-4/5 flex flex-col md:flex-row md:justify-between gap-5">
        <div className="basis-1/3 grow">
          <h2 className="text-gray-100 font-bold text-xl mb-2">Awards And Recognition</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Microsoft Partner</li>
            <li>Dell EMC Partner</li>
            <li>Fortinet Partner</li>
            <li>Veam</li>
          </ul>
        </div>
        <div className="basis-1/3 grow">
          <h2 className="text-gray-100 font-bold text-xl mb-2">Contact Us</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Headquarters address: 23 rue du Port Galisbay</li>
            <li>97150 Saint-Martin.</li>
            <li>FTelephone: (590) 590-522000</li>
            <li>Email address Sales: info@e-computech.com</li>
            <li>Email address Support: Support@e-computech.com</li>
          </ul>
        </div>
        <div className="basis-1/3 grow">
          <h2 className="text-gray-100 font-bold text-xl mb-2">Follow us</h2>
          <div className="flex gap-10 text-gray-300">
            <a
              aria-label="View Twitter profile"
              href={"#"}
              target={"_blank"}
              rel={"noreferrer"}
              className="text-gray-400  hover:text-indigo-500 hover:scale-125 duration-200 ease-out"
            >
              <IconBrandTwitter size={30} />
            </a>
            <a
              aria-label="View Facebook profile"
              href={"#"}
              target={"_blank"}
              rel={"noreferrer"}
              className="text-gray-400  hover:text-indigo-500 hover:scale-125 duration-200 ease-out"
            >
              <IconBrandFacebook size={30} />
            </a>
            <a
              aria-label="View Linkedin profile"
              href={"#"}
              target={"_blank"}
              rel={"noreferrer"}
              className="text-gray-400  hover:text-indigo-500 hover:scale-125 duration-200 ease-out"
            >
              <IconBrandLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <Banner />
      <small className="text-gray-100">© {new Date().getFullYear()} Computech — All Rights Reserved.</small>
    </footer>
  );
}

const images = [apc, hpe, dell, microsoft, fortinet, veeam, mitel];

function Banner() {
  return (
    <div className="bg-white py-10 w-full flex-col md:flex-row items-center flex justify-evenly">
      {images.map((image, key) => (
        <Image
          key={key}
          className="hover:scale-125 duration-200 ease-out"
          height={image.height / 2}
          width={image.width / 2}
          src={image}
          alt={""}
        />
      ))}
    </div>
  );
}
