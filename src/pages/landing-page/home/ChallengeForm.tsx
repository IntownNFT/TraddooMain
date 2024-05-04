import Logo from "../../../assets/logo-big.png";
// import { Checkbox } from "@material-tailwind/react";
import FormButton from "../../../components/FormButton";
import { createContext, useContext, useEffect, useState } from "react";

const ChallengeContext = createContext<
  { activeType: number; activeSize: number; price: string } | undefined
>(undefined);

const FormContent = () => {
  const contextValue = useContext(ChallengeContext) || {
    activeType: 0,
    activeSize: 0,
  };
  const { activeType, activeSize } = contextValue;

  const [plan, setPlan] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    switch (activeType) {
      case 0:
        setPlan("Regular (1-Step)");
        break;
      case 1:
        setPlan("Regular (2-Step)");
        break;
      case 2:
        setPlan("Swing (2-Step)");
        break;
    }
    switch (activeSize) {
      case 0:
        setSize("5k");
        break;
      case 1:
        setSize("10k");
        break;
      case 2:
        setSize("25k");
        break;
      case 3:
        setSize("50k");
        break;
      case 4:
        setSize("100k");
        break;
      case 5:
        setSize("150k");
        break;
      case 6:
        setSize("200k");
        break;
    }
  }, [activeSize, activeType]);

  return (
    <div className="mt-4 font-rubik font-semibold">
      <h2 className="mb-4 text-2xl">
        {plan} {size}
      </h2>
      <p className="font-normal text-[#93A1A6]">
        The Challenge is your initial dive into the becoming an Traddoo Trader.
        Prove your trading skills, hit the profit target, maintain discipline,
        and showcase responsible risk management.
      </p>
    </div>
  );
};

const FormFooter = ({ newPrice }: { newPrice?: string }) => {
  const contextValue = useContext(ChallengeContext) || {
    activeType: 0,
    activeSize: 0,
    price: "",
  };
  const { activeSize, price } = contextValue;

  const selectAcc = () => {
    switch (activeSize) {
      case 0:
        return "$5K";
      case 1:
        return "$10K";
      case 2:
        return "$25K";
      case 3:
        return "$50K";
      case 4:
        return "$100K";
      case 5:
        return "$150K";
      case 6:
        return "$200K";
    }
  }

  return (
    <div className="flex items-center gap-5 flex-wrap-reverse">
      <FormButton
        type="submit"
        text="Start Challenge"
        link="https://prop.traddoo.com/buy-challenge/"
        target="_blank"
      />
      <div>
        <h3 className="font-rubik text-2xl">
          <span className="font-medium line-through text-[#93A1A6]">
            {"$" + (Number(price.slice(1)) + 100)}
          </span>
          <span className="font-normal ml-2">
            {newPrice ? newPrice : price}
          </span>
        </h3>
        <p className="font-rubik text-[#93A1A6] text-xs">For {selectAcc()} Account</p>
      </div>
    </div>
  );
};

const Form = () => {
  // const [priceAfterAddOn, setPriceAfterAddOn] = useState("");

  return (
    <form className="p-6 pb-12 flex flex-col gap-5">
      {/* <Addons setPrice={setPriceAfterAddOn} /> */}
      {/* <CouponCode /> */}
      <FormContent />
      <FormFooter />
    </form>
  );
};

interface ChallengeProps {
  activeType: number;
  activeSize: number;
  price: string;
}
const StartChallengeForm = ({
  activeType,
  activeSize,
  price,
}: ChallengeProps) => {
  return (
    <ChallengeContext.Provider value={{ activeType, activeSize, price }}>
      <div className="bg-dark-grey border border-light-grey rounded-[14px] w-full lg:max-w-[410px]">
        <div className="border-b border-light-grey flex justify-center">
          <img
            src={Logo}
            title="Traddoo Logo"
            alt="Traddoo logo"
            width={200}
            height={200}
          />
        </div>
        <Form />
      </div>
    </ChallengeContext.Provider>
  );
};

export default StartChallengeForm;


// const CouponCode = () => {
//   return (
//     <div className="flex items-end justify-center gap-3 flex-wrap md:flex-nowrap">
//       <div className="flex flex-col gap-1 w-full">
//         <label htmlFor="coupon-code">Coupon Code</label>
//         <input
//           title="coupon-code"
//           type="text"
//           placeholder="Coupon Code"
//           className="font-inter text-white text-base placeholder:text-[#808080] bg-transparent border border-light-grey rounded-lg p-3 focus:outline-none focus:border-blue"
//         />
//       </div>
//       <FormButton type="button" text="Apply" />
//     </div>
//   );
// };


// const Addons = ({setPrice}:{setPrice: (price: string)=>void}) => {

//   const contextValue = useContext(ChallengeContext) || { activeType: 0, activeSize: 0, price: "" }
//   const { price } = contextValue;

//   const [isChecked, setIsChecked] = useState(false)

//   useEffect(()=> {
//     if(!isChecked) {
//       setPrice(price);
//       return
//     }
//     const oldPrice = Number(price.slice(1));
//     const twentyPercent = oldPrice * 0.20;
//     const newPrice = oldPrice + twentyPercent;
//     setPrice("$"+newPrice)
//   }, [isChecked, price, setPrice])

//   return (
//     <div>
//       <h3 className="font-inter font-bold flex items-center gap-2">
//         Select Add-ons{" "}
//         <span className="material-symbols-rounded text-blue">info</span>
//       </h3>
//       <Checkbox
//         crossOrigin={""}
//         color="blue"
//         label={<p className="text-white text-sm">90/10 Profit Split (+20%)</p>}
//         className="rounded-[4px] w-4 h-4 border-2 border-light-grey checked:bg-blue checked:border-transparent"
//         onChange={() => setIsChecked(isChecked=>!isChecked)}
//       />
//     </div>
//   );
// }
