import Challenge from "./Challenge";
import Features from "./Features";
import Future from "./Future";
import Hero from "./Hero";
import Partners from "./Partners";
import Newsletter from "./Newsletter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    const container = document.getElementById('landing-page'); // Replace with your actual container ID
    const children = container ? [...container.children] : [];

    children.forEach((child) => {
      gsap.from(child, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: child,
          start: 'top center+=200',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);
  
  return (
    <main className="flex flex-col gap-44" id="landing-page">
      <Hero />
      <Future />
      <Challenge />
      <Features />
      <Partners />
      <Newsletter />
    </main>
  );
};

export default Home;
