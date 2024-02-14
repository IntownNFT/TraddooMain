import * as FaqData from "../pages/landing-page/faqs.json";
import Squeezebox from "./SqueezeBox";

const data = Object.values(FaqData)[1];

const FAQs = () => {
  return (
    <div className="flex flex-col gap-8 mt-9">
      {data.map((faq, index) => (
        <>
          <Squeezebox
            title={faq.question}
            description={faq.answer}
            key={index}
          />
          <Squeezebox
            title={faq.question}
            description={faq.answer}
            key={index}
          />
        </>
      ))}
    </div>
  );
};

export default FAQs;
