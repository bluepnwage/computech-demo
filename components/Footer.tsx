export function Footer() {
  return (
    <footer className="bg-gray-900 flex flex-col items-center gap-5 py-10 ">
      <div className="w-4/5 flex justify-between gap-5">
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
            <p>Twitter</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
      <Banner />
      <small className="text-gray-100">© 2022 Computech — All Rights Reserved.</small>
    </footer>
  );
}

function Banner() {
  return <div className="bg-white h-16 w-full"></div>;
}
