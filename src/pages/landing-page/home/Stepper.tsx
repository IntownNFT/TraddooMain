import { Stepper, Step } from "@material-tailwind/react";

interface StepProps {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
  steps: Array<{ title: string; isPopular?: boolean }>;
}
const Steps = ({ activeStep, setActiveStep, steps }: StepProps) => {
  const activeClassNames = "bg-dark-grey border-2 border-blue";
  const completedClassNames = "bg-blue";

  return (
    <Stepper
      placeholder={""}
      activeStep={activeStep}
      lineClassName="bg-light-grey h-[1px]"
      activeLineClassName="bg-light-grey"
      className="h-16 ml-5 mb-10"
    >
      {steps.map((step, index) => (
        <Step
          placeholder={""}
          className="w-5 h-5 bg-blue cursor-pointer relative"
          activeClassName={activeClassNames}
          completedClassName={completedClassNames}
          onClick={() => setActiveStep(index)}
          key={index}
        >
          <div className="absolute w-max -bottom-2 -left-5 translate-y-full flex flex-col font-rubik font-medium">
            <h4 className="text-base sm:text-xl text-white !break-all max-w-[60px] sm:max-w-max">{step.title}</h4>
            {step.isPopular && (
              <span className="text-xs text-blue text-center">
                Most Popular
              </span>
            )}
          </div>
        </Step>
      ))}
    </Stepper>
  );
};

interface StepperProps {
    activeType:  number;
    setActiveType:  (activeStep: number) => void;
    activeSize:  number;
    setActiveSize:  (activeStep: number) => void;
}
const StepperContainer = ({activeType, setActiveType, activeSize, setActiveSize}: StepperProps) => {

  const type_steps = [
    {
      title: "1-Step",
      isPopular: false,
    },
    { title: "2-Step", isPopular: true },
    { title: "2-Step (Swing)", isPopular: false },
  ];

  const size_steps = [
    { title: "$5k", isPopular: false },
    { title: "$10k", isPopular: false },
    { title: "$25k", isPopular: false },
    { title: "$50k", isPopular: false },
    { title: "$100k", isPopular: true },
    { title: "$150k", isPopular: false },
    { title: "$200k", isPopular: false },
  ];

  return (
    <div className="steps-scroller font-rubik font-medium text-3xl sm:w-3/4 w-full mb-2 overflow-x-auto sm:overflow-x-visible">
      <h3 className="mb-0">Type:</h3>
      <div className="w-full md:w-2/3 lg:w-1/3">
        <Steps
          activeStep={activeType}
          setActiveStep={setActiveType}
          steps={type_steps}
        />
      </div>
      <h3 className="mt-6 mb-0">Size:</h3>
      <div className="w-96 sm:w-full max-w-[800px]">
        <Steps
          activeStep={activeSize}
          setActiveStep={setActiveSize}
          steps={size_steps}
        />
      </div>
    </div>
  );
};

export default StepperContainer;
