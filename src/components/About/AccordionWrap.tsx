import React from "react";
import Accordion from "./Accordion";

function AccordionWrap() {
  const accordionItems = [
    {
      title: "Accordion Item #1",
      content: (
        <div>
          <strong>
            This is an answer section. You can put your answer here.
          </strong>{" "}
          This is an answer section. You can put your answer here.This is an
          answer section. You can put your answer here.This is an answer
          section. You can put your answer here.
        </div>
      ),
    },
    {
      title: "Accordion Item #2",
      content: (
        <div>
          <strong>
            This is an answer section. You can put your answer here.
          </strong>
        </div>
      ),
    },
    {
      title: "Accordion Item #3",
      content: (
        <div>
          <strong>
            This is an answer section. You can put your answer here.
          </strong>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default AccordionWrap;
