import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'

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
const style = {
  display:'grid',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
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
  const changeValue=()=>{
    
    handleClose();
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
        <Button type='button' color='error'  size="small" onClick={handleOpen} >🖍</Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <TextField id="textid" label="Enter Label " onChange={handlelabelChange}/>
            <FormControl>
              <InputLabel id="simple-select-label">Type</InputLabel>
              <Select
                labelId="simple-select-label"
                value={typeValue}
                label="Type"
                onChange={handletypeChange}
              >
                <MenuItem value={"email"}>Email</MenuItem>
                <MenuItem value={"number"}>Number</MenuItem>
                <MenuItem value={"text"}>Text</MenuItem>
                <MenuItem value={"password"}>Password</MenuItem>
              </Select>
            </FormControl>
            <Button type='button' size="small" onClick={changeValue}>Save</Button>
          </Box>
        </Modal>
        <Button type='button' color='error' size="small" onClick={() => { document.getElementById(`${index}_${index}`)!.remove()}} >❌</Button>
      </Box>  
    </Box>
  )
}

export default LabelAndFeilds