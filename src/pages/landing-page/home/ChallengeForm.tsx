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

  const [splitType, setSplitType] = useState("");
  const [accountSize, setAccountSize] = useState("");

  useEffect(() => {
    switch (activeType) {
      case 0:
        setSplitType("80% Premium");
        break;
      case 1:
        setSplitType("55% Standard");
        break;
    }
    switch (activeSize) {
      case 0:
        setAccountSize("$100K");
        break;
      case 1:
        setAccountSize("$200K");
        break;
    }
  }, [activeSize, activeType]);

  return (
    <div className="mt-4 font-rubik font-semibold">
      <h2 className="mb-6 text-2xl">
        {accountSize} with {splitType} Split
      </h2>
      
      <div className="space-y-3 text-[#93A1A6]">
        <div className="flex items-start">
          <span className="text-blue mr-2 mt-1">•</span>
          <span>
            {activeSize === 0 ? "$2,000" : "$3,000"} profit target with {activeSize === 0 ? "$800" : "$1,000"} max drawdown
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-blue mr-2 mt-1">•</span>
          <span>
            Start with {activeSize === 0 ? "5 micros" : "10 micros or 1 mini"} contract{activeSize === 0 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-start">
          <span className="text-blue mr-2 mt-1">•</span>
          <span>No consistency rules once funded, no monthly fees</span>
        </div>
      </div>
    </div>
  );
};

const FormFooter = ({ newPrice }: { newPrice?: string }) => {
  const contextValue = useContext(ChallengeContext) || {
    activeType: 0,
    activeSize: 0,
    price: "",
  };
  const { activeType, activeSize, price } = contextValue;

  // Define prices based on type and size
  const getPriceValue = () => {
    if (activeType === 0) { // 80% Premium
      return activeSize === 0 ? "$149/month" : "$249/month";
    } else { // 55% Standard
      return activeSize === 0 ? "$99/month" : "$149/month";
    }
  };

  // Define original prices (for strikethrough)
  const getOriginalPrice = () => {
    if (activeType === 0) { // 80% Premium
      return activeSize === 0 ? "$249" : "$349";
    } else { // 55% Standard
      return activeSize === 0 ? "$199" : "$249";
    }
  };

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
            {getOriginalPrice()}
          </span>
          <span className="font-normal ml-2">
            {newPrice ? newPrice : getPriceValue()}
          </span>
        </h3>
        <p className="font-rubik text-[#93A1A6] text-xs">
          For {activeSize === 0 ? "$100K" : "$200K"} Account
        </p>
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
