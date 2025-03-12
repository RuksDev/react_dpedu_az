import { useState } from "react";

const ClickButton = (WrapperButton) => {
  const FinaleButton = (props) => {
    const [count, setCount] = useState(0);

    const clickTrigger = () => {
      setCount(count + 1);
    };

    return (
      <>
        <WrapperButton clickTrigger={clickTrigger} {...props} />
        <h6>{count}</h6>
      </>
    );
  };
  return FinaleButton;
};

export default ClickButton;
