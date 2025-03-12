const Button = ({ text, clickTrigger, hoverTrigger }) => {
  const mouseClick = (e) => {
    if (clickTrigger) {
      clickTrigger();
    }
  };

  const mouseHover = () => {
    // setCount(count + 1);
    if (hoverTrigger) {
      hoverTrigger();
    }
  };

  return (
    <div>
      <button onClick={mouseClick} onMouseOver={mouseHover}>
        {text}
      </button>
    </div>
  );
};

export default Button;
