import { FormEvent, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import { Alert, Radio } from "@material-tailwind/react";
import axios from "axios";

interface Input {
  type: string;
  label: string;
  setValue: (val: string) => void
}
const ContactInput = ({ type, label, setValue }: Input) => {
  return (
    <div className="flex flex-col gap-2 w-full lg:max-w-[363px]">
      <label htmlFor={label} className="font-medium text-lg sm:text-xl">
        {label}
      </label>
      <input
        title={label}
        type={type}
        placeholder={label}
        className="bg-black rounded-sm text-sm sm:text-base text-white placeholder:text-white py-3.5 px-4 focus:outline-0 border border-transparent focus:border-blue"
        required
        onChange={(e) => setValue(e.target.value)}
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
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("Demo/Live Account")
  const [message, setMessage] = useState("")

  const [err, setErr] = useState("")
  const [success, setSuccess] = useState("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault()
    setLoading(true)

    if (firstName === "" || lastName === "" || email === "" || phone === "") {
      setErr("Please fill in all the details.")
      setOpen(true)
      setLoading(false)
      return
    }

    try {
      const sender = {
        email,
        name: firstName + lastName,
        subject,
        phone,
        message
      }
      await axios.post("/message", sender)
      setSuccess("Message sent successfully!")
      setOpen(true)
      setLoading(false)
    } catch (err: unknown) {
      setErr("Some error occured. Try again!")
      setOpen(true)
      setLoading(false)
    }
  }

  const closeAlert = () => {
    setErr("")
    setSuccess("")
    setOpen(false)
  }

  return (
    <>
      <Alert open={open} onClose={closeAlert} className="w-full max-w-[806px] mx-auto my-3 bg-red font-bold font-raleway" color={success==="" ? "gray":"green"}>
        {err==="" || err}
        {/* {success==="" || <span>{success}</span>} */}
      </Alert>
      <form className="w-full max-w-[806px] mx-auto bg-dark-grey border border-light-grey rounded-lg font-poppins flex flex-col justify-center items-stretch gap-6 py-6 px-3 sm:p-6" onSubmit={handleSubmit}>
        <div className="flex gap-6 flex-wrap ">
          <ContactInput type="text" label="First Name" setValue={setFirstName} />
          <ContactInput type="text" label="Last Name" setValue={setLastName} />
        </div>
        <div className="flex gap-6 flex-wrap">
          <ContactInput type="email" label="Email" setValue={setEmail} />
          <ContactInput type="number" label="Phone Number" setValue={setPhone} />
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
                onClick={() => setSubject(radio)}
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
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue font-rubik font-poppins font-medium text-base py-3 rounded-lg text-center hover:bg-opacity-80 transition-all" disabled={loading}>
          {
            loading ? "Loading..." : success ? "Sent": "Send Message"
          }
        </button>
      </form>
    </>
  );
};

const ContactUs = () => {
  return (
    <main className="mt-16">
      <SectionHeader
        title="Contact Us"
        subtitle="Any question or remarks? Just write us a message!"
        subtitleStyles="font-poppins font-medium !text-[#717171] mt-3"
      />
      <ContactForm />
    </main>
  );
};

export default ContactUs;
