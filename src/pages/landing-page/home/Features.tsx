import FireIcon from "../../../assets/landing-page/fire.svg";
import NotimeIcon from "../../../assets/landing-page/home/paperplane.svg";
import FundedIcon from "../../../assets/landing-page/home/heirarchy.svg";
import PayoutIcon from "../../../assets/landing-page/home/exit.svg";
import Grid from "./Grid";
import SectionHeader from "../../../components/SectionHeader";

const cards = [
  {
    icon: FundedIcon,
    title: "ECN/STP Execution",
    description: "Direct market execution when trading live environment",
  },
  {
    icon: NotimeIcon,
    title: "Refundable Fee",
    description: "100% refundable fee when passing stage 2 of the challenge",
  },
  {
    icon: FireIcon,
    title: "Tight Spreads",
    description:
      "Industry leading spreads provided by industry leading providers",
  },
  {
    icon: PayoutIcon,
    title: "Multi Trading Platform",
    description: "Choose between Think markets or Tradelocker",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col gap-3">
      <SectionHeader
        title="Leading the Frontier"
        subtitle="All the essentials for your trading. Experience the best execution with
        tight spreads and a multi trading platform experience."
      />
      <Grid cards={cards} />
    </div>
  );
};

export default Features;
