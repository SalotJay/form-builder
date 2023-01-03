import React, { useState } from 'react'
import {TextField, Select, MenuItem, Button, Typography, Box } from '@mui/material'

const EditModal=({setlabelValue,setOpen,settypeValue,typeValue,labelValue}:any)=> {
    const [typeval,settypeVal]=useState(typeValue);
    const [labelval,setlabelVal]=useState(labelValue);

    const saveDetails=()=>{
        setlabelValue(labelval);
        settypeValue(typeval);
        handleClose();
    }
    const handleClose = () => setOpen(false);
    const handlelabelChange=(e:any)=>{
        setlabelVal(e.target.value)
    }
    const handletypeChange=(e:any)=>{
        settypeVal(e.target.value);
        setlabelVal(`${(e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1)}`);
    }
    return (
            <div className='modalStyle'>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{mr:2, fontWeight:600}} fontSize="15px">Label :  </Typography>
                    <TextField size='small' id="textid" onChange={handlelabelChange} value={labelval}/></Box>
                    <Box sx={{mt:5, display:'flex',alignItems:'center'}}>
                        <Typography sx={{mr:2,fontWeight: 600}} fontSize="15px">Type :  </Typography>
                        <Select
                            value={typeval}
                            onChange={handletypeChange}
                            size='small'
                        >
                            <MenuItem value={"email"}>Email</MenuItem>
                            <MenuItem value={"number"}>Number</MenuItem>
                            <MenuItem value={"text"}>Text</MenuItem>
                            <MenuItem value={"password"}>Password</MenuItem>
                        </Select>
                </Box>
                <Box>
                    <Button type='button' size="small" onClick={()=>saveDetails()}>Save</Button>
                    <Button type='button' size="small" onClick={()=>handleClose()}>Cancel</Button>
                </Box>
            </div>
  )
}

export default EditModal