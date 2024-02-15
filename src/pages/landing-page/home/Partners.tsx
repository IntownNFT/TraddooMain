import Logo1 from "../../../assets/landing-page/partners/tradelocker.jpg";
import Logo2 from "../../../assets/landing-page/partners/thinkmasters.png";
import Logo3 from "../../../assets/landing-page/partners/funderpro.png";
import Logo4 from "../../../assets/landing-page/partners/redacre.png";
import Logo5 from "../../../assets/landing-page/partners/propfirm.png";
import Logo6 from "../../../assets/landing-page/partners/cryptochill.png";
import { useEffect, useRef } from "react";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

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
      <h2 className="font-raleway font-bold text-center text-3xl sm:text-5xl">
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
          {logos.map((logo) => (
            <li>
              <img
                src={logo}
                alt="partner"
                width={143}
                height={114}
                className="rounded-[20px] filter saturate-0 contrast-75 opacity-75 hover:scale-105 hover:opacity-100 hover:saturate-100 hover:contrast-100 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.1)] transition-all"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
