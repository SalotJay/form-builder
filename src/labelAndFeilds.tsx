import React, { useState } from 'react'
import { Box, Button,TextField } from '@mui/material'
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
  const [open, setOpen] = useState(false);
  const [typeValue, settypeValue] = useState<string>(`${type}`);
  const [labelValue, setlabelValue] = useState(`Please Enter ${(type).charAt(0).toUpperCase() + (type).slice(1)}`);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlelabelChange=(e:any)=>{
        setlabelValue(e.target.value);
  }
  const handletypeChange=(e:any)=>{
        settypeValue(e.target.value);
        setlabelValue(`Please Enter ${(e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1)}`);
  }

  return (
    <Box id={`${index}_${index}`} sx={{display:'flex',alignItems:'center', justifyContent:'space-between',mb:2 }}>
      <TextField id={`${type}_${index}`} label={labelValue} variant="standard" name={`${type}_${index}`}
        type={typeValue}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[`${type}_${index}`]}/>
        {errors[`${type}_${index}`] &&
        touched[`${type}${index}`] &&
        errors[`${type}${index}`]}
      <Box>
        <Button type='button'  size="small" onClick={handleOpen} >🖍</Button>
        <EditModal open={open} handleClose={handleClose} typeValue={typeValue} handletypeChange={handletypeChange} handlelabelChange={handlelabelChange}/>
        <Button type='button' color='error' size="small" onClick={() => { document.getElementById(`${index}_${index}`)!.remove()}} >❌</Button>
      </Box>  
    </Box>
  )
}

export default LabelAndFeilds