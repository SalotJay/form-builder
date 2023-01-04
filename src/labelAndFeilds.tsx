import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormHelperText, TextareaAutosize, TextField, Typography } from '@mui/material'
import EditModal from './editModal';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
interface data {
  index: number,
  handleChange: any,
  handleBlur: any,
  values: any,
  errors: any,
  touched: any,
  type: string,
  action?: string
}

export const LabelAndFeilds = ({ index, handleChange, handleBlur, values, errors, touched, type, action }: data) => {
  const [dateValue, setdateValue] = useState<Dayjs | null>(dayjs('2022-04-07'));
  const [typeValue, settypeValue] = useState<string>(`${type}`);
  const [labelValue, setlabelValue] = useState(`${(type).charAt(0).toUpperCase() + (type).slice(1)}`);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [placeholderval, setplaceholderval] = useState("Type here...");
  const [actionValue, setactionValue] = useState<string>(`${action}`);
  const [maxLength, setmaxLength] = useState<number>(5);
  const [minLength, setminLength] = useState<number>(3);
  const [helperText, sethelperText] = useState<string>("Type something...")
  const [variant, setvariant] = useState<string>("outlined");
  const [readOnly, setreadOnly] = useState<boolean>(false);
  const [disabled, setdisabled] = useState<boolean>(false);
  const [mindateValue, setmindateValue] = useState<Dayjs | string>('2022-04-07');

  return (
    <div className='formFeilds' id={`${index}_${index}`}>
      <Accordion expanded={expanded} >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box sx={{ justifyContent: 'space-between', width: '-webkit-fill-available', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography sx={{ m: '5px' }}>{labelValue}</Typography>
              <div className='hiddenButtons'>
                <EditIcon sx={{ mr: 2 }} color="primary" onClick={() => { setExpanded(expanded ? false : true) }} />
                <CancelIcon sx={{ mr: 2 }} color='error' onClick={() => { document.getElementById(`${index}_${index}`)!.remove() }} />
              </div>
            </Box>
            {type === 'text' && (
              <>
                <TextField id={`${type}_${index}`} variant={variant as 'outlined' | 'filled' | 'standard'} name={`${type}_${index}`}
                  type={typeValue}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size='small'
                  value={values[`${type}_${index}`]}
                  placeholder={placeholderval}
                  sx={{ width: '-webkit-fill-available' }}
                  inputProps={{ maxLength, minLength, readOnly, disabled }}
                />
                <FormHelperText>{helperText}</FormHelperText>
              </>
            )}  {type === "button" && (
              <div id={`${index}`}>
                <div className="formFeilds">
                  <Box sx={{ mb: 2, justifyContent: "space-between", display: "flex" }}>
                    <Button type={actionValue as "submit" | "reset"} variant="contained" size="small">
                      {actionValue}
                    </Button>
                  </Box>
                </div>
              </div>
            )}
            {type === "textArea" && (
              <>
                <TextareaAutosize id={`${type}_${index}`} name={`${type}_${index}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[`${type}_${index}`]}
                  placeholder={placeholderval}
                  style={{
                    width: '-webkit-fill-available', borderRadius: '4px', borderColor: 'grey', fontFamily: 'sans-serif', fontSize: '1rem'
                  }}
                  readOnly={readOnly}
                  maxLength={maxLength}
                  disabled={disabled}
                  minRows={minLength}
                />
                <FormHelperText>{helperText}</FormHelperText>
              </>)}
            {type === "dateFeild" && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={dateValue}
                  onChange={(newValue) => {
                    setdateValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  minDate={dayjs(mindateValue)}
                  readOnly={readOnly}
                  disabled={disabled}
                />
                <FormHelperText>{helperText}</FormHelperText>
              </LocalizationProvider>
            )}
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <EditModal mindateValue={mindateValue} setmindateValue={setmindateValue} disabled={disabled} setdisabled={setdisabled} readOnly={readOnly} setreadOnly={setreadOnly} variant={variant} setvariant={setvariant} helperText={helperText} sethelperText={sethelperText} minLength={minLength} setminLength={setminLength} maxLength={maxLength} setmaxLength={setmaxLength} placeholderval={placeholderval} setplaceholderval={setplaceholderval} setlabelValue={setlabelValue} setOpen={setExpanded} settypeValue={settypeValue} typeValue={typeValue} labelValue={labelValue} actionValue={actionValue} setactionValue={setactionValue} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default LabelAndFeilds