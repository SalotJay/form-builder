import { Basket } from "./drop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  return (
    <div style={{display:"flex"}}>
      <DndProvider backend={HTML5Backend}>
        <Basket/>
      </DndProvider>
    </div>
  );
}
