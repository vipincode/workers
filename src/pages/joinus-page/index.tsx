import { useState } from "react";
import { twMerge } from "tailwind-merge";
import StepFormOne from "../../components/joinus/step-form-one";
import StepFormTwo from "../../components/joinus/step-form-two";
import StepFormThree from "../../components/joinus/step-form.three";
import StepFormFour from "../../components/joinus/step-form-four";

const JoinUsPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { name: "Register", content: <StepFormOne /> },
    { name: "Choose plan", content: <StepFormTwo /> },
    { name: "Purchase", content: <StepFormThree /> },
    { name: "Receive Product", content: <StepFormFour /> },
  ];

  return (
    <div className="my-10 min-h-[60vh]">
      <div className="max-w-[600px] mx-auto px-4">
        <ul className="steps w-full my-[50px]">
          {steps.map((step, index) => (
            <li
              key={index}
              className={twMerge("step text-xs", index <= currentStep ? "step-primary" : "")}
              onClick={() => setCurrentStep(index)}
            >
              {step.name}
            </li>
          ))}
        </ul>

        {/* Step content */}
        <div className="min-h-[200px]">
          <div>{steps[currentStep].content}</div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-10 w-[80%] mx-auto">
          <button
            className={twMerge(
              "bg-primary text-white text-xs rounded-md px-4 py-2",
              currentStep === 0 ? "opacity-50 cursor-not-allowed" : "active:bg-primary-dark"
            )}
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </button>

          <button
            className={twMerge(
              "bg-primary text-white  text-xs rounded-md px-4 py-2",
              currentStep === steps.length - 1 ? "opacity-50 cursor-not-allowed" : "active:bg-primary-dark"
            )}
            disabled={currentStep === steps.length - 1}
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
