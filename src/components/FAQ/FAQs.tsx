import Squeezebox from "../SqueezeBox";

interface FAQsProps {
  file: {
    Question: string;
    Answer: string | JSX.Element;
  }[]
}

const FAQs = ({file}:FAQsProps) => {

  return (
    <div className="flex flex-col gap-8 mt-9" id="FAQs">
      {file.map((faq, index) => {
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
