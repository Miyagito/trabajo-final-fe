import React, { useState } from "react";
import { AccordionItem } from "../accordionItem/AccordionItem";

export const CategoryAccordion = ({ categories }) => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="accordion" id="accordionExample">
      {categories.map((category, index) => (
        <AccordionItem
          key={index}
          itemId={index.toString()}
          title={category.nombre}
          expanded={expanded}
          setExpanded={setExpanded}
          children={category.productos}
        />
      ))}
    </div>
  );
};
