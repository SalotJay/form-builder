/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik } from "formik";
import React, { useMemo, useState } from "react";
import { useDrop } from "react-dnd";
import { Card } from "./card";
import "./index.scss";
import LabelAndFeilds from "./labelAndFeilds";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { FORM_BUILDER } from "./enum";
import { formbackground } from "./style";
import { TextFields } from "@mui/icons-material";

const initalValue = {
  backgroundColor: "white",
  padding: 8,
  margin: 8,
  borderPX: 1,
  borderType: "solid",
  borderColor: "black",
};

const inputObject: any = {
  text: (
    index: number,
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
      type="text"
    />
  ),
  textArea: (
    index: number,
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
      type="textArea"
    />
  ),
  dateFeild: (
    index: number,
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
      type="dateFeild"
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
  const [globalCss, setGlobalCss] = useState<any>(initalValue);
  const [isDragging, setDragging] = useState<Boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  console.log("globalcss", globalCss);

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
    <Box sx={{ margin: "auto" }}>
      <Typography
        color="white"
        sx={{ fontSize: "40px", textAlign: "center", marginY: 10 }}
      >
        Drag and Drop Featured Form Editing
      </Typography>
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
              <form
                onSubmit={handleSubmit}
                className={formbackground(globalCss)}
              >
                {formBuilder.map((data: any, index: number) => (
                  <>
                    {inputObject[data?.type](
                      index,
                      handleChange,
                      handleBlur,
                      values,
                      errors,
                      touched,
                      data?.action
                    )}
                  </>
                ))}
                {!isDragging && (
                  <Box
                    sx={{
                      textAlign: "center",
                      alignItems: "center",
                      marginTop: "20%",
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    Drop item here from left side
                  </Box>
                )}
              </form>
            )}
          </Formik>
        </div>
        <div>
          <Accordion expanded={expanded}>
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Button
                size="small"
                type="button"
                color="error"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                Edit
              </Button>
              <Typography>Global CSS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ m: "5px" }}>{"background color"}</Typography>
              <TextField
                type="color"
                variant="outlined"
                label="background color"
                sx={{ width: "100%" }}
                onChange={(e: any) =>
                  setGlobalCss({
                    ...globalCss,
                    backgroundColor: e.target.value,
                  })
                }
              />
              <Typography sx={{ m: "5px" }}>{"padding"}</Typography>
              <TextField
                type="number"
                variant="outlined"
                label="padding"
                onChange={(e: any) =>
                  setGlobalCss({ ...globalCss, padding: e.target.value })
                }
              />
              <Typography sx={{ m: "5px" }}>{"margin"}</Typography>
              <TextField
                type="number"
                variant="outlined"
                label="margin"
                onChange={(e: any) =>
                  setGlobalCss({ ...globalCss, margin: e.target.value })
                }
              />
              <Typography sx={{ m: "5px" }}>{"Border"}</Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  type="number"
                  variant="outlined"
                  label="Border PX"
                  onChange={(e: any) =>
                    setGlobalCss({ ...globalCss, borderPixel: e.target.value })
                  }
                />
                <TextField
                  type="text"
                  variant="outlined"
                  label="Border Type"
                  onChange={(e: any) =>
                    setGlobalCss({ ...globalCss, borderType: e.target.value })
                  }
                />{" "}
                <TextField
                  type="color"
                  variant="outlined"
                  label="Border Color"
                  onChange={(e: any) =>
                    setGlobalCss({ ...globalCss, borderColor: e.target.value })
                  }
                />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </Box>
  );
};
