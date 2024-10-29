import { Component } from "react";
import "./about.css";
import Rating from '@mui/material/Rating'; //для звездочек
import Stack from '@mui/material/Stack';//для звездочек

import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const About = () => {
  //для прогресса
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };






  //для кнопок
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

    return (
      <section class="aboutUs">
        
        <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ Width: 50, flexGrow: 1, Height: 50}}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />








        <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>






        <h1 class="lng-About-Us2">About Us</h1>
        <p class="lng-We-are-a-team-of-passionate">We are a team of passionate individuals dedicated to providing you with the highest quality meme content on the internet. We believe that laughter is the best medicine, and we are committed to bringing joy and humor to your day.</p>
        <p class="lng-Our-team-consists-of-experienced">Our team consists of experienced meme creators, curators, and enthusiasts. We are constantly on the lookout for the latest and greatest memes, and we are always working to improve our platform.</p>
        <p class="lng-We-are-committed">We are committed to providing a safe and inclusive environment for all of our users. We believe that everyone should have the opportunity to enjoy a good laugh, and we are dedicated to creating a community where everyone feels welcome.</p>
        
        {/* звездочки */}
        <Stack spacing={1} sx={{ alignItems: 'center'}}>
          <Rating name="size-small" defaultValue={0} size="small" />
        </Stack>
        <div>
          {/* снекбар */}
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
        
      />
    </div>
        

      </section>
      );
    }
  
  export default About;
  