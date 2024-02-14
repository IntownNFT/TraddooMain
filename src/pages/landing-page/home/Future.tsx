import FireIcon from "../../../assets/landing-page/fire.svg";
import NotimeIcon from "../../../assets/landing-page/home/paperplane.svg";
import FundedIcon from "../../../assets/landing-page/home/heirarchy.svg";
import PayoutIcon from "../../../assets/landing-page/home/exit.svg";
import Grid from "./Grid";
import SectionHeader from "../../../components/SectionHeader";

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
