import Button from "../../../components/Button";
import HeroImg from "../../../assets/landing-page/home/dashboard.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Content = ({ id }: { id?: string }) => {
  return (
    <>
      <h1
        className="font-raleway font-extrabold text-5xl sm:text-6xl md:text-[80px] -tracking-[2.55px] md:-tracking-[4.55px] leading-tight md:leading-[91px] text-center max-w-[900px] mx-auto text-balance md:text-wrap"
        id={id}
      >
        Grow your Trading Edge with{" "}
        <span className="text-blue">Real Capital</span>
      </h1>
      <h2
        className="font-kanit font-medium max-w-[300px] mx-auto -tracking-[1px] leading-[28px] text-xl sm:text-2xl text-center"
        id={id}
      >
        The Firm providing real capital and daily payouts.
      </h2>
    </>
  );
};

const CTAButtons = ({ id }: { id?: string }) => {
  return (
    <div className="flex justify-center items-center gap-2 sm:gap-12 mt-2 flex-wrap">
      <Button
        path="https://prop.traddoo.com/login"
        variant="primary"
        classes="font-inter font-medium px-8 py-3 w-full sm:w-auto"
        id={id}
      >
        Start Trading
      </Button>
      <Button
        path="https://prop.traddoo.com/free-trial/"
        variant="secondary"
        classes="text-black font-inter font-medium px-8 py-3 w-full sm:w-auto"
        id={id}
      >
        Try for Free
      </Button>
    </div>
  );
};

const Stat = ({
  title,
  stat,
  id,
}: {
  title: string;
  stat: string;
  id?: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-3" id={id}>
      <h3 className="font-kanit font-semibold text-2xl text-blue">{title}</h3>
      <p className="font-montserrat font-semibold text-4xl">{stat}</p>
    </div>
  );
};

const stats = [
  {
    title: "Total Traders",
    stat: "8060+",
  },
  {
    title: "Total Funded",
    stat: "240+",
  },
  {
    title: "Total Payouts",
    stat: "$247,660",
  },
];

const Stats = () => {
  useGSAP(() => {
    if (!document.querySelector("#animate-stat")) return;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#animate-stat",
      },
    });
    timeline.fromTo(
      "#animate-stat",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
  }, []);

  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex justify-center items-center gap-5 sm:gap-10 lg:gap-40 flex-wrap py-10 px-5 md:px-20 bg-dark-grey rounded-lg border border-light-grey mt-5"
      ref={statsRef}
    >
      {stats.map((stat_, index) => (
        <Stat
          key={index}
          title={stat_.title}
          stat={stat_.stat}
          id="animate-stat"
        />
      ))}
    </div>
  );
};

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-container > *",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="hero-container flex flex-col justify-center items-center gap-5 mt-12 md:mt-[7svh]">
      <Content />
      <CTAButtons />
      <img
        src={HeroImg}
        title="Toddoo Dashboard"
        width={1300}
        height={1300}
        alt="Toddoo Dashboard"
        className="mt-12 md:mt-20"
      />
      <Stats />
    </div>
  );
};

export default Hero;
