import StepperContainer from "./Stepper";
import StarIcon from "../../../assets/landing-page/home/star.svg";
import Table from "./Table";
import * as t1_row_data from "./Table1Rows.json";
import * as t2_row_data from "./Table2Rows.json";
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
        Futures trading involves substantial risk of loss and is not suitable for all investors. 
        Please ensure you understand the risks before trading.
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
};

const t1rowData: RowData = t1_row_data as RowData;
const t2rowData: RowData = t2_row_data as RowData;

const Challenge = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [tableHead, setTableHead] = useState([""]);
  const [tableRows, setTableRows] = useState<RowDataItem[]>([]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    // Set Header - both types now have the same structure
    setTableHead([" ", "Evaluation Phase", "Funded Account"]);

    // Set Rows
    let selectedAmount = "";
    switch (activeSize) {
      case 0:
        selectedAmount = "100k";
        break;
      case 1:
        selectedAmount = "200k";
        break;
    }

    const data = `t${activeType + 1}_${selectedAmount}`;
    switch (activeType) {
      case 0:
        setTableRows(t1rowData[data] as RowDataItem[]);
        break;
      case 1:
        setTableRows(t2rowData[data] as RowDataItem[]);
        break;
    }
  }, [activeSize, activeType]);

  const getPriceByName = (tableRows: RowDataItem[], itemName: string): string | null => {
    const item = tableRows.find(row => row.name === itemName);
  
    if (item) {
      const price = item.evaluationPhase1 || item.verificationPhase2 || item.fundedSTPAccount;
      return price;
    }
  
    return null;
  };

  useEffect(() => {
    const priceRow = tableRows.find(row => row.name === 'Price');
    if(priceRow)
      setPrice(priceRow.evaluationPhase1);
    
  }, [activeSize, activeType, tableRows]);

  return (
    <div className="flex flex-col gap-3">
      <SectionHeader
        title="Choose your Evaluation"
        subtitle="Simple evaluation process with EOD drawdown. No hidden rules or predatory restrictions."
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
        <div className="flex items-start gap-6 flex-wrap lg:flex-nowrap">
          <Table TABLE_HEAD={tableHead} TABLE_ROWS={tableRows} />
          <StartChallengeForm
            activeType={activeType}
            activeSize={activeSize}
            price={price}
          />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
