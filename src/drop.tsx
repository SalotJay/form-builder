/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik } from "formik";
import React, { useMemo, useState } from "react";
import { useDrop } from "react-dnd";
import { Card } from "./card";
import "./index.scss";
import LabelAndFeilds from "./labelAndFeilds";
import { Box, Button, Typography } from "@mui/material";
import { FORM_BUILDER } from "./enum";

const inputObject: any = {
  text: (
    index: number,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any,
    action: any,
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
    <LabelAndFeilds
      index={index}
      handleChange={handleChange}
      handleBlur={handleBlur}
      values={values}
      errors={errors}
      touched={touched}
      type="button"
      action={action}
    />
  ),
};

export const Basket = () => {
  const [formBuilder, setFormBuilder] = useState<any>([]);
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

  return (
    <Box sx={{ margin: 'auto' }}>
      <Typography color="white" sx={{ fontSize: '40px', textAlign: 'center', marginY: 10 }}>Drag and Drop
        Featured Form Editing</Typography>
      <Box sx={{ display: "flex" }}>
        <div className="dropItemsPanel">
          {FORM_BUILDER.map((form) => (
            <Card
              draggable
              id={form.id}
              type={form.type}
              action={form.action}
              validate={form.validate}
            />
          ))}
        </div>
        <div ref={dropRef}>
          <Formik
            initialValues={initialValues}
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
                      marginTop: "20%",
                      color: 'white',
                      fontSize: '25px'
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