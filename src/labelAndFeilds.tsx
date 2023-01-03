import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary,Box,Button,TextField, Typography } from '@mui/material'
import EditModal from './editModal';
interface data{
    index: number,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any,
    type:string,
}

export const LabelAndFeilds=({index,handleChange,handleBlur,values,errors,touched,type}:data)=> {
  const [typeValue, settypeValue] = useState<string>(`${type}`);
  const [labelValue, setlabelValue] = useState(`${(type).charAt(0).toUpperCase() + (type).slice(1)}`);
  const [expanded, setExpanded] =   useState<boolean>(false);
  const [placeholderval,setplaceholderval]=useState("Type here...");


  return (
    <div className='formFeilds' id={`${index}_${index}`}>
      <Accordion expanded={expanded} >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          <Box sx={{justifyContent:'space-between',width:'-webkit-fill-available',alignItems:'center'}}>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography sx={{m:'5px'}}>{labelValue}</Typography>  
                <div className='hiddenButtons'>
                  <Button size='small' type="button" onClick={()=>{setExpanded(expanded?false:true)}}>🖍</Button>
                  <Button size='small' type='button' color='error' onClick={() => { document.getElementById(`${index}_${index}`)!.remove()}} >❌</Button>
                </div>
              </Box>
              {!expanded && (
              <TextField id={`${type}_${index}`} variant="outlined" name={`${type}_${index}`}
                type={typeValue}
                onChange={handleChange}
                onBlur={handleBlur}
                size='small'
                value={values[`${type}_${index}`]}
                placeholder={placeholderval}
                sx={{width:'-webkit-fill-available'}}
                />
              // {errors[`${type}_${index}`] &&
              // touched[`${type}${index}`] &&
              // errors[`${type}${index}`]}
              )}
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <EditModal placeholderval={placeholderval} setplaceholderval={setplaceholderval} setlabelValue={setlabelValue}  setOpen={setExpanded} settypeValue={settypeValue} typeValue={typeValue} labelValue={labelValue}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default LabelAndFeilds