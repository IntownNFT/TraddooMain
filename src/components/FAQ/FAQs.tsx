import Squeezebox from "../SqueezeBox";
import { FAQsData } from "./FAQsData";


const FAQs = () => {

  return (
    <div className="flex flex-col gap-8 mt-9">
      {FAQsData.map((faq, index) => {
        return (
          <Squeezebox
            title={<>{faq.Question}</>}
            description={<div className=" font-rubik font-light">{faq.Answer}</div>}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FAQs;
