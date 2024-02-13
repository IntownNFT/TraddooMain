import Card from "./Card";
import FireIcon from "../../../assets/landing-page/home/fire.svg";
import NotimeIcon from "../../../assets/landing-page/home/paperplane.svg";
import FundedIcon from "../../../assets/landing-page/home/heirarchy.svg";
import PayoutIcon from "../../../assets/landing-page/home/exit.svg";

const cards = [
  {
    icon: FundedIcon,
    title: "Funded with Real Capital",
    description: "All allocations are live capital, withdraw anytime.",
  },
  {
    icon: NotimeIcon,
    title: "No Time Limits",
    description: "Trade with MT5 powered by think markets.",
  },
  {
    icon: FireIcon,
    title: "80/20 Profit Split",
    description: "10% profit target, 50% balance increase, every 3 months",
  },
  {
    icon: PayoutIcon,
    title: "Daily Payouts",
    description: "Withdraw profits daily with 8 hours average payout time.",
  },
  {
    icon: FireIcon,
    title: "EA's Allowed",
    description: "Use custom built EA's to Trade and manage risk.",
  },
  {
    icon: PayoutIcon,
    title: "5 Million Scale-up Plan",
    description:
      "Consistently achieve a 10% profit target to be eligible for a 50% balance increase every 3 months.",
  },
];

const Grid = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
      {cards.map((card, index) => (
        <Card card_info={card} key={index} />
      ))}
    </div>
  );
};

const Content = () => {
  return (
    <>
      <h2 className="font-raleway font-bold text-5xl text-center -tracking-[2.75px] text-balance">
        The Future of Prop Firm Funding Programs
      </h2>
      <p className="font-inter text-lg text-center text-[#A7AFBB] max-w-[670px] mx-auto">
        The only funding company with built in scaling programs, providing full
        transparency all the way to payout.
      </p>
    </>
  );
};

const Future = () => {
  return (
    <div className="flex flex-col gap-8">
      <Content />
      <Grid />
    </div>
  );
};

export default Future;
