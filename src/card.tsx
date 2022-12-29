import { Box } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";

export const Card = ({ id, type, label, action,validate }: any) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "form-builder",
    item: { id, type, label, action,validate },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div ref={dragRef}> 
    <Box sx={{p:1}}>
      <Box sx={{border:2,textAlign:'center',
      p:1,
      color:'white',
      '&:hover': {
      cursor: 'move',
      color:'black',
      backgroundColor: 'white',
   }}}>
        {action ?? type}
      </Box>
      {isDragging}
    </Box>
    </div>
  );
};
