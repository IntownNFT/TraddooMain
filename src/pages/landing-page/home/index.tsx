import Challenge from "./Challenge"
import Features from "./Features"
import Future from "./Future"
import Hero from "./Hero"

const Home = () => {
  return (
    <main className="flex flex-col gap-44">
      <Hero />
      <Future />
      <Challenge />
      <Features />
    </main>
  )
}

export default Home
