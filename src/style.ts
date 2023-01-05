import { css } from "@emotion/css";

export const formbackground = (globalCss: any) => {
  const {
    backgroundColor,
    margin,
    padding,
    borderPixel,
    borderType,
    borderColor,
  } = globalCss;
  return css`
    max-height: max-content;
    min-height: 350px;
    width: 700px;
    background: ${backgroundColor};
    padding: ${padding}px;
    margin: ${margin}px;
    border: ${borderPixel}px ${borderType} ${borderColor};
  `;
};
