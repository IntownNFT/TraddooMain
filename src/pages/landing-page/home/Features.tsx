import Grid from "./Grid";
import SectionHeader from "../../../components/SectionHeader";
import HeadphonesIcon from "../../../assets/landing-page/home/headphones.svg"
import RefundIcon from "../../../assets/landing-page/home/recycle.svg"
import ConfigIcon from "../../../assets/landing-page/home/configure.svg"
import LaptopIcon from "../../../assets/landing-page/home/laptop.svg"


const cards = [
  {
    icon: HeadphonesIcon,
    title: "ECN/STP Execution",
    description: "Direct market execution when trading live environment",
  },
  {
    icon: RefundIcon,
    title: "Refundable Fee",
    description: "100% refundable fee when passing stage 2 of the challenge",
  },
  {
    icon: ConfigIcon,
    title: "Tight Spreads",
    description:
      "Industry leading spreads provided by industry leading providers",
  },
  {
    icon: LaptopIcon,
    title: "Multi Trading Platform",
    description: "Choose between Tradelocker and other platforms soon.",
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
