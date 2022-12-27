import React from "react";
import { useDrag } from "react-dnd";

export const Card = ({ id, type, label, action }: any) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "form-builder",
    item: { id, type, label, action },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div ref={dragRef}>
      {action ?? type}
      {isDragging}
    </div>
  );
};
