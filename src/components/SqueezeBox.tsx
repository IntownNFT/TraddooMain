import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import ArrowIcon from "../assets/landing-page/arrow.svg";

interface SqueezeboxData {
  title: string;
  description: string;
}
const Squeezebox = ({ title, description }: SqueezeboxData) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const renderWithLineBreaks = (text:string) => {
    const textWithLineBreaks = text.split('\n').map((item, key) => (
      <Fragment key={key}>
        {item}
        <br />
      </Fragment>
    ));

    return <div>{textWithLineBreaks}</div>;
  };

  return (
    <>
      <Accordion
        placeholder={""}
        open={open === 1}
        className="p-6 bg-dark-grey border border-light-grey rounded-lg"
      >
        <AccordionHeader
          placeholder={""}
          onClick={() => handleOpen(1)}
          className="relative flex justify-between items-center border-b-0 hover:text-off-white p-0"
        >
          <h2 className="font-inter font-medium text-base sm:text-lg text-white">{title}</h2>
          <img
            src={ArrowIcon}
            width={19}
            height={7}
            className={`absolute right-0 ${open === 1 ? "rotate-0" : "rotate-180"}`}
            alt="Traddoo arrow"
          />
        </AccordionHeader>
        <AccordionBody className="pt-10 font-kanit font-normal text-base sm:text-xl text-white leading-[36px]">
          {renderWithLineBreaks(description)}
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default Squeezebox;
