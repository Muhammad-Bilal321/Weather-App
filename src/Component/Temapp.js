import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import StreetviewIcon from '@mui/icons-material/Streetview';
import './style.css';

export default function BasicTextFields() {
  const [city, setCity] = useState(null);
  const [inputValue, setInputValue] = useState('Karachi');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=71a2d9e6163c252f334bc539b2913216`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);
    };
    fetchApi();
  }, [inputValue]);

  return (
    <div className='centered-box'>
      <div className='container'>
        <div className='box'>
          <div className='inputData'>
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              type='search'
              onChange={(e) => { setInputValue(e.target.value) }}
            />
          </div>
        </div>
        {!city ? (<p>No Data Found</p>)
          : (
            <>
              <div className='info'>
                <h2 className='info'>
                  <span className='info-icon'><StreetviewIcon /></span>{inputValue}
                </h2>
                <h1 className='temp'>{city.temp}°C</h1>
                <h3 className='tempmin-max'>
                  Min : {city.temp_min}°C<br /> Max : {city.temp_max}°C
                </h3>
              </div>
              {/* Move the wave animations inside the .container */}
              <div className='wave'></div>
              <div className='wave wave--two'></div>
              <div className='wave wave--three'></div>
            </>
          )}
      </div>
    </div>
  );
}
