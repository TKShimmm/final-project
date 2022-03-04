import React from "react";
import { AccordionData } from "./AccordionData";
import AccordionItems from "./AccordionItems";
import './Accordion.css'
import './AccordionBase.css'

function Accordion({ items }: { items: Array<AccordionData> }) {
  return (
    <ul className="accordion">
      {items.map((item, idx) => (
        <AccordionItems key={idx} data={item} />
      ))}
    </ul>
  );
}

export default Accordion;
