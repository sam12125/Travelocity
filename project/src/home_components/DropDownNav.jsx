import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BackpackIcon from '@mui/icons-material/Backpack';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function DropDownNav() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 124 }} style={{border:"none",outline:"none"}}>
        <InputLabel id="demo-simple-select-autowidth-label" style={{color:"white"}}>Most Travel</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
          
        >
          <MenuItem value="" style={{width:"450px"}}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}> <BackpackIcon/>&nbsp;&nbsp;Packages</MenuItem>
          <MenuItem value={2}><ApartmentIcon/>&nbsp;&nbsp;Stays</MenuItem>
          <MenuItem value={2}> <TimeToLeaveIcon/>&nbsp;&nbsp;Cars</MenuItem>
          <MenuItem value={3}> <FlightIcon/>&nbsp;&nbsp;Flights</MenuItem>
          <MenuItem value={4}> <DirectionsBoatIcon/>&nbsp;&nbsp;Cruises</MenuItem>
          <MenuItem value={5}> <LocalActivityIcon/>&nbsp;&nbsp;Things to do</MenuItem>
          <MenuItem value={6}>Trips for me</MenuItem>
          <MenuItem value={6}>Discover</MenuItem>
          <MenuItem value={6}>Travel Deals</MenuItem>
          <MenuItem value={6}>Get Inspired</MenuItem>
          <MenuItem value={6}>Groups & meetings</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
