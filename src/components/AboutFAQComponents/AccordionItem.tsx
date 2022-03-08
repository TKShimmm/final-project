import React from "react";
import { AccordionData } from "./types";
import "./AccordionItem.css";

function AccordionItem({
  data,
  isOpen,
}: {
  data: AccordionData;
  isOpen: boolean;
}) {
  return (
    <li className="accordion-item">
      <h2 className="accordion-item-title">
        <button className="accordion-item-btn">{data.title}</button>
      </h2>
      <div className="accordion-item-container">{data.content}</div>
    </li>
  );
}

export default AccordionItem;
