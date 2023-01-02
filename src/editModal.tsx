import React from 'react'
import { Modal, Box, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'

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

const EditModal=({open,handleClose,typeValue,handletypeChange,handlelabelChange}:any)=> {
  return (
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
            <Button type='button' size="small" onClick={()=>handleClose()}>Save</Button>
          </Box>
        </Modal>
  )
}

export default EditModal