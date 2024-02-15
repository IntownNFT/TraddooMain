import Challenge from "./Challenge";
import Features from "./Features";
import Future from "./Future";
import Hero from "./Hero";
import SubscriptionForm from "./SubscriptionForm";

const Home = () => {
  return (
    <main className="flex flex-col gap-44">
      <Hero />
      <Future />
      <Challenge />
      <Features />
      <SubscriptionForm />
    </main>
  );
};

export default Home;
