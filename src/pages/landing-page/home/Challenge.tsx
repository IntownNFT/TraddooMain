import StepperContainer from "./Stepper";
import StarIcon from "../../../assets/landing-page/home/star.svg";
import Table from "./Table";
import * as t1_row_data from "./Table1Rows.json";
import { useState } from "react";
import StartChallengeForm from "./ChallengeForm";
import SectionHeader from "../../../components/SectionHeader";


const Reminder = () => {
  return (
    <div className="bg-dark-grey rounded-lg border border-light-grey w-[409px] p-5">
      <h4 className="font-rubik font-medium text-2xl flex items-center gap-3">
        Reminder{" "}
        <span className="w-5 h-5 p-[3px] bg-[rgba(254,213,119,0.08)] rounded-sm">
          <img
            src={StarIcon}
            title="star"
            alt="star"
            className="w-[13px] h-[13px]"
          />
        </span>
      </h4>
      <p className="font-rubik text-[#93A1A6] mt-2">
        Please ensure that you fully understand the risks involved, taking into
        account your investment objectives and level of experience, before
        trading.
      </p>
    </div>
  );
};

const TABLE_HEAD = [
  {
    title: "",
    subtitle: "",
  },
  {
    title: "Step 1",
    subtitle: "Challenge",
  },
  {
    title: "Step 2",
    subtitle: "Verification",
  },
  {
    title: "Funded",
    subtitle: "Trader",
  },
];

const TABLE_ROWS = Object.values(t1_row_data);

const Challenge = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      <SectionHeader
        title="Choose your Challenge"
        subtitle="Before we allow you to trade with us, we need to be sure that you can
        manage risk. For this reason, we developed Trading Objectives."
      />
      <div className="flex flex-col gap-8">
        <div className="flex items-start flex-wrap lg:flex-nowrap">
          <StepperContainer
            activeSize={activeSize}
            activeType={activeType}
            setActiveSize={setActiveSize}
            setActiveType={setActiveType}
          />
          <Reminder />
        </div>
        <div className="flex items-stretch gap-6 flex-wrap lg:flex-nowrap">
          <Table TABLE_HEAD={TABLE_HEAD} TABLE_ROWS={TABLE_ROWS.slice(1)} />
          <StartChallengeForm />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
