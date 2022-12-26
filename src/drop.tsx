import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Card } from "./card";
import "./index.scss";

const FORM_BUILDER = [
  { id: 1, type: "email", label: "Please Enter Email" },
  { id: 2, type: "password", label: "Please Enter Password" },
  { id: 3, type: "text", label: "Please Enter text" },
  { id: 4, type: "number", label: "Please Enter text" },
];

export const Basket = ({ setFormBuilder }: any) => {
  const [basket, setBasket] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isOver }, dropRef] = useDrop({
    accept: "form-builder",
    drop: (item) => {
      setBasket((basket: any) =>
        !basket.includes(item) ? [...basket, item] : basket
      );
      setFormBuilder((basket: any) =>
        !basket.includes(item) ? [...basket, item] : basket
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <React.Fragment>
      <div className="card">
        {FORM_BUILDER.map((form) => (
          <Card draggable id={form.id} type={form.type} label={form.label} />
        ))}
      </div>
      <div className="basket" ref={dropRef}>
        {basket.map((form: any) => (
          <Card id={form.id} type={form.type} label={form.label} />
        ))}
        {<div className="mt-12">Drop Here!</div>}
      </div>
    </React.Fragment>
  );
};
