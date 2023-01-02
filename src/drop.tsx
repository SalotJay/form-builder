/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik } from "formik";
import React, { useMemo, useState } from "react";
import { useDrop } from "react-dnd";
import { Card } from "./card";
import "./index.scss";
import LabelAndFeilds from "./labelAndFeilds";
import { Box, Button } from "@mui/material";
import { FORM_BUILDER } from "./enum";

const inputObject: any = {
  email: (
    index: number,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any,
    action:any,
  ) => (
    <LabelAndFeilds
      index={index}
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={values}
      errors={errors}
      touched={touched}
      type="email"
    />
  ),
  password: (
    index: number,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any,
    action:any,
  ) => (
    <LabelAndFeilds
      index={index}
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={values}
      errors={errors}
      touched={touched}
      type="password"
      
    />
  ),
  number: (
    index: number,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any,
    action:any,
  ) => (
    <LabelAndFeilds
      index={index}
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={values}
      errors={errors}
      touched={touched}
      type="number"
    />
  ),
  text: (
    index: number,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any,
    action:any,
  ) => (
    <LabelAndFeilds
      index={index}
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={values}
      errors={errors}
      touched={touched}
      type="text"
    />
  ),
  button: (
    index: any,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any,
    action: any
  ) => (
    <div id={`${index}`}>
      <Box sx={{ mb: 2, justifyContent: "space-between", display: "flex" }}>
        <Button type={action} variant="contained" size="small">
          {action}
        </Button>
        <Button
          type="button"
          color="error"
          size="small"
          onClick={() => {
            document.getElementById(`${index}`)!.remove();
          }}
        >
          ❌
        </Button>
      </Box>
    </div>
  ),
};

export const Basket = () => {
  const [formBuilder, setFormBuilder] = useState<any>([]);
  const [isValidating, setValidating] = useState<any>([]);
  const [isDragging, setDragging] = useState<Boolean>(false);

  const [{ isOver }, dropRef] = useDrop({
    accept: "form-builder",
    drop: (item) => {
      setFormBuilder((basket: any) =>
        !basket.includes(item) ? [...basket, item] : basket
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  const initialValues = useMemo(() => {
    const obj = Object.fromEntries(
      formBuilder.map((data: any, index: number) => {
        setDragging(true);
        console.log("data is ", data);
        // if(data?.validate){
        //   const test={}
        //   console.log("test = ",test);
        //   setValidating([...isValidating,test]);
        // }
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

  console.log("IntialValues = ", initialValues);
  // console.log("validating = ", isValidating);
  // const schema = yup.object().shape({});

   return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "grey",
          width: 150,
          minHeight: "50vh",
          display: "grid",
        }}
      >
        {FORM_BUILDER.map((form) => (
          <Card
            draggable
            id={form.id}
            type={form.type}
            action={form.action}
            validate={form.validate}
          />
        ))}
      </Box>
      <Box>
        <div ref={dropRef}>
          <Formik
            initialValues={initialValues}
            // validate={validate(schema)}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Submitted");
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
            }: any) => (
              <form onSubmit={handleSubmit} className="formData">
                {formBuilder.map((data: any, index: number) => (
                  <>
                    {inputObject[data?.type](
                      index,
                      handleChange,
                      handleBlur,
                      values,
                      errors,
                      touched,
                      data?.action,
                    )}
                  </>
                ))}
                {!isDragging && (
                  <Box
                    sx={{
                      textAlign: "center",
                      alignItems: "center",
                      marginTop: "30%",
                    }}
                  >
                    Drop item here from left side
                  </Box>
                )}
              </form>
            )}
          </Formik>
        </div>
      </Box>
    </Box>
  );
};