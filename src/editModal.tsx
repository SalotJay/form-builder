import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Dayjs } from "dayjs";

interface modalData {
  setplaceholderval: any;
  placeholderval: any;
  setlabelValue?: any;
  setOpen?: any;
  settypeValue?: any;
  typeValue?: string;
  labelValue?: string;
  actionValue?: string;
  setactionValue?: any;
  maxLength?: number;
  setmaxLength?: any;
  minLength?: number;
  setminLength?: any;
  helperText: string;
  sethelperText: any;
  variant: string;
  setvariant: any;
  readOnly: boolean;
  setreadOnly: any;
  disabled: boolean;
  setdisabled: any;
  mindateValue: Dayjs | string;
  setmindateValue: any;
}

const EditModal = ({
  mindateValue,
  setmindateValue,
  disabled,
  setdisabled,
  readOnly,
  setreadOnly,
  variant,
  setvariant,
  helperText,
  sethelperText,
  setplaceholderval,
  placeholderval,
  setlabelValue,
  setOpen,
  settypeValue,
  typeValue,
  labelValue,
  actionValue,
  setactionValue,
  maxLength,
  setmaxLength,
  minLength,
  setminLength,
}: modalData) => {
  const [property, setProperty] = useState({
    mindateVal: mindateValue,
    typeval: typeValue,
    labelval: labelValue,
    placeholder: placeholderval,
    actionval: actionValue,
    maxLengthval: maxLength,
    minLengthval: minLength,
    helperTextval: helperText,
    variantval: variant,
    readOnlyval: readOnly,
    disabledval: disabled,
  });

  const saveDetails = () => {
    setlabelValue(property.labelval);
    settypeValue(property.typeval);
    setplaceholderval(property.placeholder);
    setactionValue(property.actionval);
    setmaxLength(property.maxLengthval);
    setminLength(property.minLengthval);
    sethelperText(property.helperTextval);
    setvariant(property.variantval);
    setreadOnly(property.readOnlyval);
    setdisabled(property.disabledval);
    setmindateValue(property.mindateVal);
    handleClose();
  };
  const handleClose = () => setOpen(false);
  const handlelabelChange = (e: any) => {
    setProperty({ ...property, labelval: e.target.value });
  };
  const handletypeChange = (e: any) => {
    setProperty({ ...property, typeval: e.target.value });
    setProperty({ ...property, labelval: e.target.value });
    // setlabelVal(`${(e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1)}`);
  };
  const handlemaxLengthChange = (e: any) => {
    setProperty({ ...property, maxLengthval: e.target.value });
  };
  const handleminLengthChange = (e: any) => {
    setProperty({ ...property, minLengthval: e.target.value });
  };
  const handlehelperTextChange = (e: any) => {
    setProperty({ ...property, helperTextval: e.target.value });
  };
  const handlevariantChange = (e: any) => {
    setProperty({ ...property, variantval: e.target.value });
  };
  const handlereadOnlyChange = (e: any) => {
    setProperty({ ...property, readOnlyval: e.target.checked });
  };
  const handledisabledChange = (e: any) => {
    setProperty({ ...property, disabledval: e.target.checked });
  };
  const handleactionChange = (e: any) => {
    setProperty({ ...property, actionval: e.target.value });
  };
  return (
    <div>
      {typeValue === "text" && (
        <div className="modalStyle">
          <Box
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ mr: 2, fontWeight: 600 }} fontSize="15px">
              Type{" "}
            </Typography>
            <Select
              value={property.typeval}
              onChange={handletypeChange}
              size="small"
            >
              <MenuItem value={"email"}>Email</MenuItem>
              <MenuItem value={"number"}>Number</MenuItem>
              <MenuItem value={"text"}>Text</MenuItem>
              <MenuItem value={"password"}>Password</MenuItem>
            </Select>
            <FormControlLabel
              sx={{ ml: 2 }}
              label="Readonly"
              control={
                <Checkbox
                  checked={property.readOnlyval}
                  onChange={handlereadOnlyChange}
                />
              }
            />
            <FormControlLabel
              label="Disabled"
              control={
                <Checkbox
                  checked={property.disabledval}
                  onChange={handledisabledChange}
                />
              }
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div>
              <Typography sx={{ fontWeight: 600 }} fontSize="15px">
                Label{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={handlelabelChange}
                value={property.labelval}
              />
              <Typography sx={{ mt: 2, fontWeight: 600 }} fontSize="15px">
                Placeholder{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={(e) =>
                  setProperty({ ...property, placeholder: e.target.value })
                }
                value={property.placeholder}
              />
            </div>
            <div>
              <Typography sx={{ fontWeight: 600 }} fontSize="15px">
                Max Length{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={handlemaxLengthChange}
                value={property.maxLengthval}
              />
              <Typography sx={{ mt: 2, fontWeight: 600 }} fontSize="15px">
                Min Length{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={handleminLengthChange}
                value={property.minLengthval}
              />
            </div>
            <div>
              <Typography sx={{ fontWeight: 600 }} fontSize="15px">
                Helper Text{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={handlehelperTextChange}
                value={property.helperTextval}
              />
              <Typography sx={{ mt: 2, fontWeight: 600 }} fontSize="15px">
                Variant{" "}
              </Typography>
              <Select
                value={property.variantval}
                onChange={handlevariantChange}
                size="small"
              >
                <MenuItem value={"outlined"}>outlined</MenuItem>
                <MenuItem value={"filled"}>filled</MenuItem>
                <MenuItem value={"standard"}>standard</MenuItem>
              </Select>
            </div>
          </Box>
        </div>
      )}
      {typeValue === "button" && (
        <div>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mr: 2, fontWeight: 600 }} fontSize="15px">
              Label{" "}
            </Typography>
            <TextField
              size="small"
              id="textid"
              onChange={handlelabelChange}
              value={property.labelval}
            />
            <Typography sx={{ mx: 2, fontWeight: 600 }} fontSize="15px">
              Action{" "}
            </Typography>
            <Select
              value={property.actionval}
              onChange={handleactionChange}
              size="small"
            >
              <MenuItem value={"submit"}>Submit</MenuItem>
              <MenuItem value={"reset"}>Reset</MenuItem>
            </Select>
          </Box>
        </div>
      )}
      {typeValue === "textArea" && (
        <div className="modalStyle">
          <Box
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              sx={{ ml: 2 }}
              label="Readonly"
              control={
                <Checkbox
                  checked={property.readOnlyval}
                  onChange={handlereadOnlyChange}
                />
              }
            />
            <FormControlLabel
              label="Disabled"
              control={
                <Checkbox
                  checked={property.disabledval}
                  onChange={handledisabledChange}
                />
              }
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div>
              <Typography sx={{ fontWeight: 600 }} fontSize="15px">
                Label{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={handlelabelChange}
                value={property.labelval}
              />
              <Typography sx={{ mt: 2, fontWeight: 600 }} fontSize="15px">
                Placeholder{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={(e) =>
                  setProperty({ ...property, placeholder: e.target.value })
                }
                value={property.placeholder}
              />
            </div>
            <div>
              <Typography sx={{ fontWeight: 600 }} fontSize="15px">
                Max Length{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={handlemaxLengthChange}
                value={property.maxLengthval}
              />
              <Typography sx={{ mt: 2, fontWeight: 600 }} fontSize="15px">
                Feild Length{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={handleminLengthChange}
                value={property.minLengthval}
              />
            </div>
          </Box>
          <Typography sx={{ fontWeight: 600, mt: 2 }} fontSize="15px">
            Helper Text{" "}
          </Typography>
          <TextField
            size="small"
            id="textid"
            onChange={handlehelperTextChange}
            value={property.helperTextval}
          />
        </div>
      )}
      {typeValue === "dateFeild" && (
        <div className="modalStyle">
          <Box
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FormControlLabel
              sx={{ ml: 2 }}
              label="Readonly"
              control={
                <Checkbox
                  checked={property.readOnlyval}
                  onChange={handlereadOnlyChange}
                />
              }
            />
            <FormControlLabel
              label="Disabled"
              control={
                <Checkbox
                  checked={property.disabledval}
                  onChange={handledisabledChange}
                />
              }
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div>
              <Typography sx={{ fontWeight: 600 }} fontSize="15px">
                Label{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={handlelabelChange}
                value={property.labelval}
              />
              <Typography sx={{ mt: 2, fontWeight: 600 }} fontSize="15px">
                Placeholder{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={(e) =>
                  setProperty({ ...property, placeholder: e.target.value })
                }
                value={property.placeholder}
              />
            </div>
            <div>
              <Typography sx={{ mt: 2, fontWeight: 600 }} fontSize="15px">
                Min Date{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={(e) =>
                  setProperty({ ...property, mindateVal: e.target.value })
                }
                value={property.mindateVal}
              />
              <Typography sx={{ fontWeight: 600, mt: 2 }} fontSize="15px">
                Helper Text{" "}
              </Typography>
              <TextField
                size="small"
                id="textid"
                onChange={handlehelperTextChange}
                value={property.helperTextval}
              />
            </div>
          </Box>
        </div>
      )}

      <Box>
        <Button type="button" size="small" onClick={() => saveDetails()}>
          Save
        </Button>
        <Button type="button" size="small" onClick={() => handleClose()}>
          Cancel
        </Button>
      </Box>
    </div>
  );
};

export default EditModal;
