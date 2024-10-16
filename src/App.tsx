// src/App.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import LocationBox from './components/LocationBox';

const App: React.FC = () => {
  const locations = [
    { name: 'St. Francis Manor', timeSlots: ['09:00 - 10:00', '10:30 - 11:30', '13:00 - 14:00'] },
    { name: 'Downtown Clinic', timeSlots: ['08:00 - 09:00', '09:30 - 10:30', '15:00 - 16:00'] },
    { name: 'Community Center', timeSlots: ['11:00 - 12:00', '14:00 - 15:00', '16:00 - 17:00'] },
  ];

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(to bottom, #ffffff, #ff6666 )', // 上红下白
        padding: 2,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Grinnell Translational Medicine Club</Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 4 }}>
        {locations.map((location, index) => (
          <LocationBox key={index} name={location.name} timeSlots={location.timeSlots} />
        ))}
      </Box>
    </Box>
  );
};

export default App;
