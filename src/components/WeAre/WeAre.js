
import { Component } from "react";
import './WeAre.css'; 


import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100films';



import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import Slider from '@mui/material/Slider';
//
const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}
//


 const WeAre = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; //для чекбоксов

  const [loading, setLoading] = React.useState(false); // для имитации загрузки
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef(undefined);

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = setTimeout(() => {
      setQuery('success');
    }, 2000);
  };

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
        <section class="section-five">
        <div class="section-five-container flex-box-between">
          <img />
          <div class="section-five-right-element">
            <p class="lng-we-here">
              We’re here to help you turn every “no” you’ve ever heard into a
              "0" on your paycheck.
            </p>
          </div>
        </div>
        <p class="section-five-text-title lng-section-five-text-title">The numbers say it all</p>
        <div id="цифры" class="section-five-inform">
          <div>
            <h3>300+</h3>
            <p class="lng-clients-served">clients served</p>
          </div>
          <div class="border-grid"></div>
          <div>
            <h3>7k+</h3>
            <p class="lng-women-trained">women trained in career growth strategies</p>
          </div>
          <div class="border-grid"></div>
          <div>
            <h3>$2mil+</h3>
            <p class="lng-in-salary">in salary increases during a pandemic</p>
          </div>
        </div>
        {/* чекбоксы */}
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked />
        {/* загрузка */}
        <Box sx={{ display: 'flex', size:"small", flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
      <Button onClick={handleClickLoading} sx={{ m: 2 }}>
        {loading ? 'Stop loading' : 'Loading'}
      </Button>
      </Box>

            {/* автозаполнение */}
      <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 1000}}
      renderInput={(params) => <TextField {...params} label="Movie" />}/>

      <Box sx={{ width: 950 }}>
      <Slider 
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
        size="small"
        sx={{ height: 10}} // Установите нужную высоту
      />
      </Box>


            {/* выбор */}

      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        </FormControl>



      </section>
      
        )
    }


export default WeAre