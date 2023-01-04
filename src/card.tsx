/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDrag } from "react-dnd";

export const Card = ({ id, type, action, validate }: any) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "form-builder",
    item: { type, action, validate, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <>
      <div ref={dragRef} className="dropItemsPanelData">
        <div className="dropItems">{(type).charAt(0).toUpperCase() + (type).slice(1)}</div>
      </div>
    </>
  );
};
