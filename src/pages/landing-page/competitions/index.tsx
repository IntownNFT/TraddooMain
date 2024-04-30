import FAQs from "../../../components/FAQ/FAQs";
import SectionHeader from "../../../components/SectionHeader";
import Card from "./Card";
// import rules from "./rules.md"
import { rules } from "./rules";

interface CompetitionsDataItem {
    name: string,
    contestants: string,
    description: string,
    isLive: boolean,
    link: string,
}

const CompetitionsData: CompetitionsDataItem[] = [
  // {
  //   name: "April Competition",
  //   contestants: "--",
  //   description: "Challenge accounts",
  //   isLive: true,
  //   link: "https://prop.traddoo.com/competitions-overview",
  // },
  // {
  //   name: "March Competition",
  //   description: "Challenge accounts",
  //   contestants: 756,
  //   isLive: false,
  //   link: "/",
  // },
  // {
  //   name: "Feb Competition",
  //   description: "Challenge accounts",
  //   contestants: 923,
  //   isLive: false,
  //   link: "/",
  // },
  // {
  //   name: "Jan Competition",
  //   description: "Challenge accounts",
  //   contestants: 1089,
  //   isLive: false,
  //   link: "/",
  // },
  // {
  //   name: "Dec Competition",
  //   description: "Challenge accounts",
  //   contestants: 812,
  //   isLive: false,
  //   link: "/",
  // },
  // {
  //   name: "Nov Competition",
  //   description: "Challenge accounts",
  //   contestants: 998,
  //   isLive: false,
  //   link: "/",
  // },
];

const Grid = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap mt-16">
      {
        CompetitionsData.length === 0 && (
          <p className="text-center text-[#717171] font-poppins font-medium text-lg">
            No Competitions available at the moment.
          </p>
        )
      }
      {CompetitionsData.length > 0 && CompetitionsData.map((comp, index) => (
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
      <FAQs file={rules} />
    </main>
  );
};

export default Competitions;
