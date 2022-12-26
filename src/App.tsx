import { Basket } from "./drop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";

const inputObject: any = {
  email: (index: number, label: string) => (
    <>
      <label className="control-label" htmlFor={`email-${index}`}>
        {label}
        <br />
      </label>
      <input type="email" id={`email-${index}`} name={`email-${index}`} />
    </>
  ),
  password: (index: number, label: string) => (
    <>
      <label className="control-label" htmlFor={`password-${index}`}>
        {label}
        <br />
      </label>
      <input
        type="password"
        id={`password-${index}`}
        name={`password-${index}`}
      />
    </>
  ),
  number: (index: number, label: string) => (
    <>
      <label className="control-label" htmlFor={`number-${index}`}>
        {label}
        <br />
      </label>
      <input type="number" id={`number-${index}`} name={`number-${index}`} />
    </>
  ),
  text: (index: number, label: string) => (
    <>
      <label className="control-label" htmlFor={`text-${index}`}>
        {label}
        <br />
      </label>
      <input type="text" id={`text-${index}`} name={`text-${index}`} />
    </>
  ),
};

export default function App() {
  const [formBuilder, setFormBuilder] = useState<any>([]);

  return (
    <>
      <form id="form-app">
        <fieldset className="row">
          <div className="col-xs-12">
            <h3 className="legend">Untitled Form</h3>
          </div>
          <div className="col-xs-12">
            <p>This is my form. Please fill it out. Thanks!</p>
          </div>
          <div className="col-xs-12">
            <div className="form-group">
              {formBuilder.map((data: any, index: number) => (
                <>
                  {inputObject[data?.type](index, data?.label)}
                  <br />
                </>
              ))}
            </div>
          </div>
          <div className="form-action">
            <button
              type="submit"
              id="button_1"
              name="button_1"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
      <DndProvider backend={HTML5Backend}>
        {/* Here, render a component that uses DND inside it */}
        <Basket setFormBuilder={setFormBuilder} />
      </DndProvider>
    </>
  );
}
