import StepperContainer from "./Stepper";
import StarIcon from "../../../assets/landing-page/home/star.svg";
import Table from "./Table";
import * as t1_row_data from "./Table1Rows.json";
import * as t2_row_data from "./Table2Rows.json";
import * as t3_row_data from "./Table3Rows.json";
import { useEffect, useState } from "react";
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

type RowDataItem = {
  name: string;
  evaluationPhase1: string;
  verificationPhase2?: string;
  fundedSTPAccount: string;
};


type RowData = {
  [key: string]: RowDataItem[];
}

const t1rowData: RowData = t1_row_data as RowData;
const t2rowData: RowData = t2_row_data as RowData;
const t3rowData: RowData = t3_row_data as RowData;

const Challenge = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [tableHead, setTableHead] = useState([""]);
  const [tableRows, setTableRows] = useState<RowDataItem[]>([]);

  useEffect(() => {

    // Set Header
    switch (activeType) {
      case 0:
        setTableHead([" ", "Evaluation Phase 1", "Funded STP Account"]);
        break;
      default:
        setTableHead([" ", "Evaluation Phase 1", "Verification Phase 2", "Funded STP Account"]);
        break;
    }

    // Set Rows
    let selectedAmount = ""
    switch (activeSize) {
      case 0:
        selectedAmount = "25k"
        break;
      case 1:
        selectedAmount = "50k"
        break;
      case 2:
        selectedAmount = "100k"
        break;
      case 3:
        selectedAmount = "150k"
        break;
      case 4:
        selectedAmount = "200k"
        break;
    }
    
    const data = `t${activeType + 1}_${selectedAmount}`;
    switch(activeType) {
      case 0:
        setTableRows(t1rowData[data] as RowDataItem[]);
        break;
      case 1:
        setTableRows(t2rowData[data] as RowDataItem[]);
        break;
      case 2:
        setTableRows(t3rowData[data] as RowDataItem[]);
        break;
    }
    console.log(data)

  }, [activeSize, activeType]);

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
          <Table TABLE_HEAD={tableHead} TABLE_ROWS={tableRows} />
          <StartChallengeForm />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
