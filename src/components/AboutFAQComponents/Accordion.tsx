import React from "react";
import AccordionItem from "./AccordionItem";
import { AccordionData } from "./types";
import './Accordion.css'

function Accordion({ items }: { items: Array<AccordionData> }) {
  return (
  <ul className="accordion">
    {items.map((item, idx) => (
      <AccordionItem key={idx} data={item} />
    ))}  
  </ul>
  );
}

export default Accordion;
