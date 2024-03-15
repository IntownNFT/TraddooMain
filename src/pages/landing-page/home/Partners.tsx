import Logo1 from "../../../assets/landing-page/partners/tradelocker.webp";
import Logo3 from "../../../assets/landing-page/partners/funderpro.webp";
import Logo4 from "../../../assets/landing-page/partners/redacre.webp";
import Logo5 from "../../../assets/landing-page/partners/propfirm.webp";
import Logo6 from "../../../assets/landing-page/partners/cryptochill.webp";
import Logo7 from "../../../assets/landing-page/partners/fundedraffle.webp"

import { useEffect, useRef } from "react";

const logos = [Logo1, Logo3, Logo4, Logo5, Logo6, Logo7];

const Partners = () => {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const insertLogosAfterEnd = () => {
      const ul = logosRef.current;
      if (ul) {
        ul.insertAdjacentHTML("afterend", ul.outerHTML);
        const nextSibling = ul.nextSibling as HTMLElement | null;
        if (nextSibling) {
          nextSibling.setAttribute("aria-hidden", "true");
        }
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
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <img
                src={logo}
                alt="partner"
                width={143}
                height={114}
                className="rounded-[20px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
