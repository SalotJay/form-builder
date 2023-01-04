import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormHelperText, TextField, Typography } from '@mui/material'
import EditModal from './editModal';
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
                <Button size='small' type="button" onClick={() => { setExpanded(expanded ? false : true) }}>🖍</Button>
                <Button size='small' type='button' color='error' onClick={() => { document.getElementById(`${index}_${index}`)!.remove() }} >❌</Button>
              </div>
            </Box>
            {type !== 'button' ? (
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
            ) : (
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
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <EditModal disabled={disabled} setdisabled={setdisabled} readOnly={readOnly} setreadOnly={setreadOnly} variant={variant} setvariant={setvariant} helperText={helperText} sethelperText={sethelperText} minLength={minLength} setminLength={setminLength} maxLength={maxLength} setmaxLength={setmaxLength} placeholderval={placeholderval} setplaceholderval={setplaceholderval} setlabelValue={setlabelValue} setOpen={setExpanded} settypeValue={settypeValue} typeValue={typeValue} labelValue={labelValue} actionValue={actionValue} setactionValue={setactionValue} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default LabelAndFeilds