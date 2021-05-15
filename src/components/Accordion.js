import React, { useState } from "react";
import "./Accordion.css";
import ChevronRight from "./ChevronRight";
import ChevronDown from "./ChevronDown";
function Accordion(props) {
  const [active, setActive] = useState(true);
  const { title, content } = props.name;
  const toggleAccordion = () => {
    setActive((previousState) => {
      return previousState ? false : true;
    });
  };
  return (
    <div className="accordion__section">
      <button className="accordion__button" onClick={toggleAccordion}>
        {active ? <ChevronRight></ChevronRight> : <ChevronDown></ChevronDown>}
        <span className="accordion-title">{title}</span>
      </button>
      {active ? (
        ""
      ) : (
        <div className="accordion__content">
          <p className="according__text">{content}</p>
        </div>
      )}
    </div>
  );
}

export default React.memo(Accordion);
