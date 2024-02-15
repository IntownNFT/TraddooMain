import Challenge from "./Challenge";
import Features from "./Features";
import Future from "./Future";
import Hero from "./Hero";
import Partners from "./Partners";
import SubscriptionForm from "./SubscriptionForm";

const Home = () => {
  return (
    <main className="flex flex-col gap-44">
      <Hero />
      <Future />
      <Challenge />
      <Features />
      <Partners />
      <SubscriptionForm />
    </main>
  );
};

export default Home;
