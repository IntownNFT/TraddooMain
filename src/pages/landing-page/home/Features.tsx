import Grid from "./Grid";
import SectionHeader from "../../../components/SectionHeader";
import HeadphonesIcon from "../../../assets/landing-page/home/headphones.svg"
import RefundIcon from "../../../assets/landing-page/home/recycle.svg"
import ConfigIcon from "../../../assets/landing-page/home/configure.svg"
import LaptopIcon from "../../../assets/landing-page/home/laptop.svg"

const cards = [
  {
    icon: HeadphonesIcon,
    title: "Direct Market Access",
    description: "Trade directly on CME with leading futures brokers like Interactive Brokers and NinjaTrader",
  },
  {
    icon: RefundIcon,
    title: "No Monthly Fees",
    description: "100% free upon passing the cahllenge no monthly fees during funded.",
  },
  {
    icon: ConfigIcon,
    title: "EOD Drawdown",
    description: "No intraday equity drawdown. Only end-of-day balance matters.",
  },
  {
    icon: LaptopIcon,
    title: "Multiple Platforms",
    description: "Trade with your preferred platform: NinjaTrader, Interactive Brokers, or T3",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col gap-3">
      <SectionHeader
        title="Leading the Industry"
        subtitle="Trade futures with institutional-grade execution, fair rules, and transparent evaluation process."
      />
      <Grid cards={cards} />
    </div>
  );
};

export default Features;
