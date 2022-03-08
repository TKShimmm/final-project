import React from "react";
import "./App.css";
import Accordion from "./Accordion";

function FAQ() {
  const accordionItems = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, <u>consectetur adipiscing elit.</u> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, <u>consectetur adipiscing elit.</u> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, <u>consectetur adipiscing elit.</u> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, <u>consectetur adipiscing elit.</u> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
          amet, <u>consectetur adipiscing elit.</u> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="container">
        <Accordion items={accordionItems} />
      </div>
    </>
  );
}

export default FAQ;
