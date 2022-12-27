import { Basket } from "./drop";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useMemo, useState } from "react";
import { Formik } from "formik";

const inputObject: any = {
  email: (
    index: number,
    label: string,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any
  ) => (
    <>
      <label className="control-label" htmlFor={`email-${index}`}>
        {label}
        <br />
      </label>
      <input
        type="email"
        id={`email_${index}`}
        name={`email_${index}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[`email_${index}`]}
      />
      {errors[`email_${index}`] &&
        touched[`email_${index}`] &&
        errors[`email_${index}`]}
    </>
  ),
  password: (
    index: number,
    label: string,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any
  ) => (
    <>
      <label className="control-label" htmlFor={`password-${index}`}>
        {label}
        <br />
      </label>
      <input
        type="password"
        id={`password-${index}`}
        name={`password-${index}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[`password_${index}`]}
      />
      {errors[`password_${index}`] &&
        touched[`password_${index}`] &&
        errors[`password_${index}`]}
    </>
  ),
  number: (
    index: number,
    label: string,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any
  ) => (
    <>
      <label className="control-label" htmlFor={`number-${index}`}>
        {label}
        <br />
      </label>
      <input
        type="number"
        id={`number-${index}`}
        name={`number-${index}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[`number_${index}`]}
      />
      {errors[`number_${index}`] &&
        touched[`number_${index}`] &&
        errors[`number_${index}`]}
    </>
  ),
  text: (
    index: number,
    label: string,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any
  ) => (
    <>
      <label className="control-label" htmlFor={`text-${index}`}>
        {label}
        <br />
      </label>
      <input
        type="text"
        id={`text-${index}`}
        name={`text-${index}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[`text_${index}`]}
      />
      {errors[`text_${index}`] &&
        touched[`text_${index}`] &&
        errors[`text_${index}`]}
    </>
  ),
  button: (
    index: any,
    label: any,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any,
    action: any
  ) => (
    <>
      <label className="control-label" htmlFor={`password-${index}`}>
        {label}
        <br />
      </label>
      <button type={action}>{action}</button>
    </>
  ),
};

export default function App() {
  const [formBuilder, setFormBuilder] = useState<any>([]);

  const initialValues = useMemo(() => {
    const obj = Object.fromEntries(
      formBuilder.map((data: any, index: number) => {
        console.log("data", data);
        if (data?.type !== "button") {
          return [`${data.type}_${index}`, ""];
        }
        return [`submit`, ""];
      })
    );
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !key.includes("submit"))
    );
  }, [formBuilder]);

  console.log("intialVsluues", initialValues);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: any = {};
          if (!values.email_0) {
            errors.email_0 = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email_0)
          ) {
            errors.email_0 = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }: /* and other goodies */
        any) => (
          <form onSubmit={handleSubmit}>
            {formBuilder.map((data: any, index: number) => (
              <>
                {inputObject[data?.type](
                  index,
                  data?.label,
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  data?.action
                )}
                <br />
              </>
            ))}
          </form>
        )}
      </Formik>

      <DndProvider backend={HTML5Backend}>
        {/* Here, render a component that uses DND inside it */}
        <Basket setFormBuilder={setFormBuilder} />
      </DndProvider>
    </>
  );
}
