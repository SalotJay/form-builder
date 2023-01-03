import React, { useState } from 'react'
import {TextField, Select, MenuItem, Button, Typography, Box } from '@mui/material'

interface modalData{
    setplaceholderval:any;
    placeholderval:any;
    setlabelValue?:any;
    setOpen?:any;
    settypeValue?:any;
    typeValue?:string;
    labelValue?:string;
}

const EditModal=({setplaceholderval,placeholderval,setlabelValue,setOpen,settypeValue,typeValue,labelValue}:modalData)=> {
    const [typeval,settypeVal]=useState(typeValue);
    const [labelval,setlabelVal]=useState(labelValue);
    const [placeholder,setplaceholder]=useState(placeholderval);

    const saveDetails=()=>{
        setlabelValue(labelval);
        settypeValue(typeval);
        setplaceholderval(placeholder)
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
        <div>
            {typeValue!=='button' ? (<div className='modalStyle'>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{mr:2, fontWeight:600}} fontSize="15px">Label   </Typography>
                    <TextField size='small' id="textid" onChange={handlelabelChange} value={labelval}/>
                    <Typography sx={{mx:2, fontWeight:600}} fontSize="15px">Placeholder </Typography>
                    <TextField size='small' id="textid" onChange={(e)=>setplaceholder(e.target.value)} value={placeholder}/>
                </Box>
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
            </div>) : 
            (<div>
                hello
             </div>)}
            </div>
  )
}

export default EditModal