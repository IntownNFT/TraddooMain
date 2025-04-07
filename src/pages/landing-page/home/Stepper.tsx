import { Button } from "@material-tailwind/react";

interface StepProps {
  activeStep: number;
  setActiveStep: (activeStep: number) => void;
  steps: Array<{ title: string; isPopular?: boolean }>;
}

const Steps = ({ activeStep, setActiveStep, steps }: StepProps) => {
  return (
    <div className="flex gap-4">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <Button
            placeholder={""}
            className={`font-rubik font-medium text-base sm:text-xl normal-case px-6 py-3 ${
              activeStep === index 
                ? "bg-blue" 
                : "bg-dark-grey border-2 border-light-grey hover:border-blue"
            }`}
            onClick={() => setActiveStep(index)}
          >
            {step.title}
          </Button>
          {step.isPopular && (
            <span className="absolute -top-2 -right-2 text-xs text-blue bg-dark-grey px-2 py-1 rounded-full border border-blue">
              Popular
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

interface StepperProps {
  activeType: number;
  setActiveType: (activeStep: number) => void;
  activeSize: number;
  setActiveSize: (activeStep: number) => void;
}

const StepperContainer = ({activeType, setActiveType, activeSize, setActiveSize}: StepperProps) => {
  const type_steps = [
    {
      title: "80%",
      isPopular: true,
    },
    { 
      title: "55%", 
      isPopular: false 
    }
  ];

  const size_steps = [
    { title: "$100k", isPopular: true },
    { title: "$200k", isPopular: false }
  ];

  return (
    <div className="steps-scroller font-rubik font-medium text-3xl sm:w-3/4 w-full mb-2 overflow-x-auto sm:overflow-x-visible">
      <h3 className="mb-4">Split:</h3>
      <div className="mb-8">
        <Steps
          activeStep={activeType}
          setActiveStep={setActiveType}
          steps={type_steps}
        />
      </div>
      <h3 className="mb-4">Account Size:</h3>
      <div>
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
