import { Box} from "@mui/material";
import { useDrag } from "react-dnd";

export const Card = ({ id, type, action,validate }: any) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "form-builder",
    item: {type, action,validate ,id,},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


  return (
     <>
    <div ref={dragRef}> 
    <Box sx={{p:1,margin:1}}>
      <Box>
       <div className="dropItems">
        {action ?? type}
       </div>
      </Box>
      {isDragging}
    </Box>
    </div>
   </>
  );
};
