import Challenge from "./Challenge";
import Features from "./Features";
import Future from "./Future";
import Hero from "./Hero";
import Partners from "./Partners";
import DiscordCTA from "./DiscordCTA";
import Testimonials from "./Testimonials";
import Founders from "./Founders";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    const container = document.getElementById('landing-page');
    const children = container ? [...container.children] : [];

    children.forEach((child) => {
      gsap.from(child, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: child,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);
  
  return (
    <main className="flex flex-col gap-32" id="landing-page">
      <Hero />
      <Future />
      <Challenge />
      <Features />
      <Partners />
      <DiscordCTA />
      <Testimonials />
      <Founders />
    </main>
  );
};

export default Home;
