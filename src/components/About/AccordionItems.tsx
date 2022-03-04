import React from "react";
import { AccordionData } from "./AccordionData";
import './AccordionItem.css'

function AccordionItems({data}: {data:AccordionData}) {
  return (
    <li className="accordion-item">
      <h2 className="accordion-item-title">
        <button className="accordion-item-btn">
          {data.title}
        </button>
      </h2>
      <div className="accordion-item-container">
        <div className="accordion-item-content">
          {data.content}
        </div>
      </div>
    </li>
  );
}

export default AccordionItems;
