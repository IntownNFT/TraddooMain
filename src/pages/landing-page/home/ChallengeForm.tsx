import Logo from "../../../assets/logo-big.png";
import { Checkbox } from "@material-tailwind/react";
import FormButton from "../../../components/FormButton";


const FormContent = () => {
  return (
    <div className="mt-4 font-rubik font-semibold">
      <h2 className="mb-4 text-2xl">Regular (2-Step) 100k</h2>
      <p className="font-normal text-[#93A1A6]">
        The Challenge is your initial dive into the becoming an Traddoo Trader.
        Prove your trading skills, hit the profit target, maintain discipline,
        and showcase responsible risk management.
      </p>
    </div>
  );
};

const Addons = () => {
  return (
    <div>
      <h3 className="font-inter font-bold flex items-center gap-2">
        Select Add-ons{" "}
        <span className="material-symbols-rounded text-blue">info</span>
      </h3>
      <Checkbox
        crossOrigin={""}
        color="blue"
        label={<p className="text-white text-sm">90/10 Profit Split (+20%)</p>}
        className="rounded-[4px] w-4 h-4 border-2 border-light-grey checked:bg-blue checked:border-transparent"
      />
    </div>
  );
};

const CouponCode = () => {
  return (
    <div className="flex items-end justify-center gap-3 flex-wrap md:flex-nowrap">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="coupon-code">Coupon Code</label>
        <input
          title="coupon-code"
          type="text"
          placeholder="Coupon Code"
          className="font-inter text-white text-base placeholder:text-[#808080] bg-transparent border border-light-grey rounded-lg p-3 focus:outline-none focus:border-blue"
        />
      </div>
      <FormButton type="button" text="Apply" />
    </div>
  );
};

const FormFooter = () => {
  return (
    <div className="flex items-center gap-5 flex-wrap-reverse">
      <FormButton type="submit" text="Start Challenge" />
      <div>
        <h3 className="font-rubik text-2xl">
          <span className="font-medium line-through text-[#93A1A6]">$497</span>
          <span className="font-normal ml-2">$397</span>
        </h3>
        <p className="font-rubik text-[#93A1A6] text-xs">For $100K Account</p>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <form className="p-6 pb-12 flex flex-col gap-5">
      <Addons />
      <CouponCode />
      <FormContent />
      <FormFooter />
    </form>
  );
};

const StartChallengeForm = () => {
  return (
    <div className="bg-dark-grey border border-light-grey rounded-[14px] w-full lg:max-w-[410px]">
      <div className="border-b border-light-grey flex justify-center">
        <img src={Logo} title="Traddoo Logo" alt="Traddoo logo" width={200} />
      </div>
      <Form />
    </div>
  );
};

export default StartChallengeForm;
