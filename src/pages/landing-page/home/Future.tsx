import Grid from "./Grid";
import SectionHeader from "../../../components/SectionHeader";
import CheckIcon from "../../../assets/landing-page/home/check.svg"
import TimeIcon from "../../../assets/landing-page/home/watchtimer.svg"
import PieIcon from "../../../assets/landing-page/home/Analytics Pie.svg"
import PowerIcon from "../../../assets/landing-page/home/power.svg"
import CodeIcon from "../../../assets/landing-page/home/Code.svg"
import GraphIcon from "../../../assets/landing-page/home/graph_up.svg"

const cards = [
  {
    icon: CheckIcon,
    title: "Funded with Real Capital",
    description: "All allocations are live capital, withdraw anytime.",
  },
  {
    icon: TimeIcon,
    title: "No Time Limits",
    description: "Trade with TradingView powered by TradeLocker.",
  },
  {
    icon: PieIcon,
    title: "80/20 Profit Split",
    description: "10% profit target, 50% balance increase, every 3 months and with add-ons it can go up to 90/10 profit split!",
  },
  {
    icon: PowerIcon,
    title: "Daily Payouts",
    description: "Withdraw profits daily with 8 hours average payout time.",
  },
  {
    icon: CodeIcon,
    title: "EA's Allowed",
    description: "Use custom built EA's to Trade and manage risk.",
  },
  {
    icon: GraphIcon,
    title: "5 Million Scale-up Plan",
    description:
      "Consistently achieve a 10% profit target to be eligible for a 50% balance increase every 3 months.",
  },
];

const Future = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="The Future of Prop Firm Funding Programs"
        subtitle="The only funding company with built in scaling programs, providing full
        transparency all the way to payout."
      />
      <Grid cards={cards} />
    </div>
  );
};

export default Future;
