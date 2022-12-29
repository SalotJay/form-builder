import { Box, Button, TextField } from '@mui/material'
import React from 'react'

interface data{
    index: number,
    label: string,
    handleChange: any,
    handleBlur: any,
    values: any,
    errors: any,
    touched: any,
    type:string,
}


export const LabelAndFeilds=({index,label,handleChange,handleBlur,values,errors,touched,type}:data)=> {
  return (
    <Box id={`${index}_${index}`} sx={{display:'flex',alignItems:'center', justifyContent:'space-between',mb:2 }}>
      <TextField id={`${type}_${index}`} label={label} variant="standard" name={`${type}_${index}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[`${type}_${index}`]}/>
        {errors[`${type}_${index}`] &&
        touched[`${type}${index}`] &&
        errors[`${type}${index}`]}
      <Button type='button' color='error'  size="small" onClick={() => { document.getElementById(`${index}_${index}`)!.remove()}} >❌</Button>
    </Box>
  )
}

export default LabelAndFeilds