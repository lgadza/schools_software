
import React, { useState, useEffect } from "react";
import "./PageProgress.css";

interface Step {
  label: string;
}

interface PageProgressProps {
  steps: Step[];
}


const PageProgress: React.FC<PageProgressProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fillRatio, setFillRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight / steps.length;
      const activeStep = Math.floor(scrollPosition / sectionHeight);
      setCurrentStep(activeStep);

     
      const remainingHeight = scrollPosition - activeStep * sectionHeight;
      const ratio = remainingHeight / sectionHeight;
      setFillRatio(ratio);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [steps.length]);

  return (
    <div className="progress-container">
      <div className="progress">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? "active" : ""}`}
            style={{ backgroundColor: index < currentStep ? "#007bff" : "transparent" }}
          />
        ))}
        <div
          className={`progress active`}
          style={{ height: `${fillRatio * 100}%` }} 
        />
      </div>
      <div className="step-labels">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-label textSmallSize ${index === currentStep ? "active main_bg" : ""}`}
          >
            {step.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageProgress;

