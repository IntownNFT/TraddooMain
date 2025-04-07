import QtLogo from "../../../assets/landing-page/partners/qtLogoBottom.svg";
import DxFeed from "../../../assets/landing-page/partners/logo-dxFeed-white.a620287d.svg";
import Volumetrica from "../../../assets/landing-page/partners/volumetrica_c3b73e53cf.svg";
import LogoHeader from "../../../assets/landing-page/partners/logoHeader-C_MbcQLk.svg";

import { useEffect, useRef } from "react";

const logos = [QtLogo, DxFeed, Volumetrica, LogoHeader];

const Partners = () => {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Clear any existing duplicated lists first
    const parent = logosRef.current?.parentElement;
    if (parent) {
      const children = Array.from(parent.children);
      for (let i = 1; i < children.length; i++) {
        parent.removeChild(children[i]);
      }
    }

    // Then create a fresh duplicate
    const insertLogosAfterEnd = () => {
      const ul = logosRef.current;
      if (ul) {
        const clone = ul.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        ul.parentElement?.appendChild(clone);
      }
    };

    insertLogosAfterEnd();
  }, []);

  return (
    <div>
      <h2 className="font-raleway font-bold text-center text-5xl">
        Our Partners
      </h2>
      <p className="text-[#717171] text-center text-balance mt-5 mb-16 text-2xl">
        Trusted worldwide by <span className="text-blue">millions!</span>
      </p>
      <div className="w-full inline-flex py-6 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          ref={logosRef}
          className="flex items-center justify-center md:justify-start [&_li]:mx-24 [&_img]:max-w-none animate-infinite-scroll"
        >
          {logos.map((logo, index) => (
            <li key={index} className={index === 0 || index === logos.length - 1 ? 'mx-36' : ''}>
              <img
                src={logo}
                alt="partner"
                width={400}
                height={350}
                className={`rounded-[20px] object-contain ${
                  logo === LogoHeader ? 'w-[150px] h-[130px]' : ''
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
