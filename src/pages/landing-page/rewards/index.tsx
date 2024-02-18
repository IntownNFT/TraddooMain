import SectionHeader from "../../../components/SectionHeader";
import Card from "./Card";
import PercentIcon from "../../../assets/landing-page/rewards/percentage.svg";
import CupIcon from "../../../assets/landing-page/rewards/cup.svg";
import TableTabs from "./Tables";

const cards = [
  {
    title: "Refer and Earn",
    description: "Refer friends and earn 1 ticket for every dollar they spend",
    icon: PercentIcon,
    chip: "New",
  },
  {
    title: "Purchase and Earn",
    description:
      "Purchase trading challenges and earn 1 ticket for every dollar spent.",
    icon: CupIcon,
    chip: "Now live",
  },
  {
    title: "Payout and Earn",
    description: "Make payouts and ear 1 ticket for every dollar paid out.",
    icon: PercentIcon,
    chip: "Soon",
  },
];

const Grid = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap mt-12">
      {cards.map((card, index) => (
        <Card
          title={card.title}
          description={card.description}
          icon={card.icon}
          chip={card.chip}
          key={index}
        />
      ))}
    </div>
  );
};

const Rewards = () => {
  return (
    <main className="mt-16">
      <SectionHeader
        title="Reward Program"
        subtitle="Welcome to Traddoo's new reward program. Earn tickets by completing actions. Every ticket = 1 entry to our weekly Raffle."
        subtitleStyles="font-poppins font-medium !text-[#717171] mt-3"
      />
      <Grid />
      <div className="mt-20">
        <h2 className="font-raleway font-bold text-center text-3xl md:text-5xl">
          Leaderboard
        </h2>
        <TableTabs />
      </div>
    </main>
  );
};

export default Rewards;
