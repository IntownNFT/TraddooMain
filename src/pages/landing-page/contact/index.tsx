import { useRef, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import { Radio } from "@material-tailwind/react";
import FormButton from "../../../components/FormButton";

interface Input {
  type: string;
  label: string;
  ref: React.RefObject<HTMLInputElement>;
}
const ContactInput = ({ type, label, ref }: Input) => {
  return (
    <div className="flex flex-col gap-2 w-full lg:max-w-[363px]">
      <label htmlFor={label} className="font-medium text-lg sm:text-xl">
        {label}
      </label>
      <input
        title={label}
        type={type}
        placeholder={label}
        ref={ref}
        className="bg-black rounded-sm text-sm sm:text-base text-white placeholder:text-white py-3.5 px-4 focus:outline-0 border border-transparent focus:border-blue"
        required
      />
    </div>
  );
};

const RadioIcon = () => {
  return (
    <svg
      width={13}
      height={14}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.00001C0 5.24418 0.684819 3.56026 1.90381 2.3187C3.12279 1.07714 4.77609 0.379639 6.5 0.379639C8.22391 0.379639 9.87721 1.07714 11.0962 2.3187C12.3152 3.56026 13 5.24418 13 7.00001C13 8.75584 12.3152 10.4398 11.0962 11.6813C9.87721 12.9229 8.22391 13.6204 6.5 13.6204C4.77609 13.6204 3.12279 12.9229 1.90381 11.6813C0.684819 10.4398 0 8.75584 0 7.00001H0ZM6.12907 9.83353L9.87133 5.06863L9.19533 4.51781L6.00427 8.57919L3.744 6.66105L3.18933 7.33897L6.12907 9.83441V9.83353Z"
        fill="white"
      />
    </svg>
  );
};

const radio_choices = [
  "Demo/Live Account",
  "Problem with my order",
  "Withdrawals",
  "Others",
];

const ContactForm = () => {
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const [subject, setSubject] = useState("")
  return (
    <form className="w-full max-w-[806px] mx-auto bg-dark-grey border border-light-grey rounded-lg font-poppins flex flex-col justify-center items-stretch gap-6 py-6 px-3 sm:p-6">
      <div className="flex gap-6 flex-wrap ">
        <ContactInput type="text" label="First Name" ref={firstnameRef} />
        <ContactInput type="text" label="Last Name" ref={lastnameRef} />
      </div>
      <div className="flex gap-6 flex-wrap">
        <ContactInput type="email" label="Email" ref={emailRef} />
        <ContactInput type="number" label="Phone Number" ref={phoneRef} />
      </div>
      <div>
        <label className="font-medium text-xl">Select Subject?</label>
        <div className="flex gap-3 flex-wrap mt-4 sm:mt-2 -ml-2">
          {radio_choices.map((radio, index) => (
            <Radio
              crossOrigin={""}
              className="w-3 h-3 font-normal text-base"
              color="blue"
              name="type"
              label={radio}
              labelProps={{
                className: "text-white -ml-1"
              }}
              defaultChecked={index === 0}
              key={index}
              onClick={()=>setSubject(radio)}
              icon=<RadioIcon />
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-medium text-xl">
          Message
        </label>
        <textarea
          title="message"
          placeholder="Message"
          className="bg-black rounded-sm text-base text-white placeholder:text-white py-3.5 px-4 focus:outline-0 border border-transparent focus:border-blue resize-none"
          rows={5}
          ref={msgRef}
        ></textarea>
      </div>
      <FormButton type="submit" text="Send Message" classes="font-poppins !font-medium" />
    </form>
  );
};

const ContactUs = () => {
  return (
    <main className="mt-16">
      <SectionHeader
        title="Contact Us"
        subtitle="Any question or remarks? Just write us a message!"
        titleStyles="mt-24"
        subtitleStyles="font-poppins font-medium !text-[#717171] mt-3"
      />
      <ContactForm />
    </main>
  );
};

export default ContactUs;
