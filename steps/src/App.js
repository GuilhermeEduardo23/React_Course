import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const propButtons = 
  [
    {
      "id": 1,
      "functionButton": handlePrevious,
      "textChildren": "👈🏻 Previous"
    },
    {
      "id": 2,
      "functionButton": handleNext,
      "textChildren": "👉🏻 Next"
    },
  ];

  function handlePrevious() {
    if(step === 1) return;
    setStep(s => s - 1);
  }
  
  function handleNext() {
    if(step === 3) return;
    setStep(s => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(is => !is)}>&times;</button>
      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button onClick={handleNext}>
                <span>Welcome</span>
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            {propButtons.map((prop) => (
              <Button
                key={prop.id}
                onClick={prop.functionButton}
              >
                <span>{prop.textChildren}</span>
              </Button>
            ))}
          </div>
        </div>
      )
    }
    </>
  );
}

function StepMessage({step, children}) {
  return <div className="message">
    <h3>Step:</h3> 
    {children}
  </div>
}

function Button({onClick, children}) {
  return <button onClick={onClick}>
    {children}
  </button>
}