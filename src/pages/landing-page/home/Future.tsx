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
    title: "Real Capital Funding",
    description: "Trade with real capital through established futures brokers. No simulated accounts.",
  },
  {
    icon: TimeIcon,
    title: "NY Session Hours",
    description: "Trade during peak liquidity hours: 9:30am - 4pm EST",
  },
  {
    icon: PieIcon,
    title: "80/20 Profit Split",
    description: "Earn 80% of your profits with potential for increased splits. Fast 1-3 day payout processing.",
  },
  {
    icon: PowerIcon,
    title: "EOD Drawdown Only",
    description: "No intraday equity drawdown. Only your end-of-day balance matters.",
  },
  {
    icon: CodeIcon,
    title: "All Futures Available",
    description: "Trade any CME futures including ES, NQ, YM, GC, CL and more.",
  },
  {
    icon: GraphIcon,
    title: "Scaling Program",
    description: "Grow your account with consistent performance. No time restrictions.",
  },
];

const Future = () => {
  return (
    <div className="mt-[-180px] md:mt-[-250px]">
      <div className="flex flex-col gap-6">
        <SectionHeader
          title="The Future of Futures Trading"
          subtitle="Trade futures with institutional-grade tools and fair rules. No predatory restrictions."
        />
        <Grid cards={cards} />
      </div>
    </div>
  );
};

export default Future;
