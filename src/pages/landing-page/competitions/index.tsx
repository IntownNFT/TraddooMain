import FAQs from "../../../components/FAQ/FAQs";
import SectionHeader from "../../../components/SectionHeader";
import Card from "./Card";

const CompetitionsData = [
  {
    name: "Feb Competition",
    description: "$1,950 In cash prizes + Challenge accounts",
    contestants: 121,
    isLive: true,
    link: "/",
  },
  {
    name: "Jan Competition",
    description: "$1,950 In cash prizes + Challenge accounts",
    contestants: 121,
    isLive: false,
    link: "/",
  },
  {
    name: "Oct Competition",
    description: "$1,950 In cash prizes + Challenge accounts",
    contestants: 121,
    isLive: false,
    link: "/",
  },
  {
    name: "Nov Competition",
    description: "$1,950 In cash prizes + Challenge accounts",
    contestants: 121,
    isLive: false,
    link: "/",
  },
  {
    name: "Sept Competition",
    description: "$1,950 In cash prizes + Challenge accounts",
    contestants: 121,
    isLive: false,
    link: "/",
  },
  {
    name: "Dec Competition",
    description: "$1,950 In cash prizes + Challenge accounts",
    contestants: 121,
    isLive: false,
    link: "/",
  },
];

const Grid = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap mt-16">
      {CompetitionsData.map((comp, index) => (
        <Card
          name={comp.name}
          description={comp.description}
          contestants={comp.contestants}
          isLive={comp.isLive}
          link={comp.link}
          key={index}
        />
      ))}
    </div>
  );
};

const Competitions = () => {
  return (
    <main className="mt-16">
      <SectionHeader
        title="Trading Competitions"
        subtitle="Earn Trading Challenge by entering competitions. Place Top 10 and begin your trading journey with traddoo."
        subtitleStyles="font-poppins font-medium text-[#717171] mt-3"
      />
      <Grid />
      <SectionHeader
        title="Rules"
        subtitle="Traddoo is built and designed to offer the greatest experience for our traders. It's simple, be a consistent and disciplined trader."
        titleStyles="mt-24"
        subtitleStyles="font-poppins font-medium text-[#717171] mt-3"
      />
      <FAQs />
    </main>
  );
};

export default Competitions;
