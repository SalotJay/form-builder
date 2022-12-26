import React from "react";
import { useDrag } from "react-dnd";

export const Card = ({ id, type, label }: any) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "form-builder",
    item: { id, type, label },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div ref={dragRef}>
      {type}
      {isDragging}
    </div>
  );
};
