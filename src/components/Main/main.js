import { Component } from "react";
import Cards from "../Cards/Cards";
import CardList from "../Cards/CardList";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Switch from '@mui/material/Switch';


import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';



const MainPage = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  const label1 = { inputProps: { 'aria-label': 'Switch demo' } };




  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    return (
            <main>
                <CardList></CardList>
                <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>

    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="1" />
      <Tab label="2" disabled />
      <Tab label="3" />
    </Tabs>
    

    <div>
      <Switch {...label1} defaultChecked />
      <Switch {...label1} />
      <Switch {...label1} disabled defaultChecked />
      <Switch {...label1} disabled />
    </div>


    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
    <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>


      <Box sx={{display: 'flex', 
        justifyContent: 'center', // Центрирование по горизонтали
        alignItems: 'center',     // Центрирование по вертикали
                   // Высота контейнера для центрирования по вертикали
        }}>
      <CircularProgress />
      </Box>
            </main>
        )
    }


export default MainPage