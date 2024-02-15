import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Table from "./Table";

export function TableTabs() {
  const [activeTab, setActiveTab] = useState("purchases");
  const data = [
    {
      label: "Referral",
      value: "referral",
      table: <Table activeTab={activeTab} />,
    },
    {
      label: "Purchases",
      value: "purchases",
      table: <Table activeTab={activeTab} />,
    },
    {
      label: "Payouts",
      value: "payouts",
      table: <Table activeTab={activeTab} />
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        placeholder={""}
        className="w-full max-w-[424px] mx-auto mt-5 mb-3 rounded-none border-b border-b-[#252525] bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-white shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            placeholder={""}
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${activeTab === value ? "text-white" : "text-[#5E5E5E]"}`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, table }) => (
          <TabPanel key={value} value={value}>
            {table}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default TableTabs;
