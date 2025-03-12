import { useState } from "react";

const HoverButton = (WrapperButton) => {
  const FinaleButton = (props) => {
    const [count, setCount] = useState(0);

    const hoverTrigger = () => {
      setCount(count + 1);
    };

    return (
      <>
        <WrapperButton hoverTrigger={hoverTrigger} {...props} />
        <h6>{count}</h6>
      </>
    );
  };
  return FinaleButton;
};

export default HoverButton;
