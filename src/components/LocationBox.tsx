// src/components/LocationBox.tsx
import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

interface LocationBoxProps {
  name: string;
  timeSlots: string[];
}

const LocationBox: React.FC<LocationBoxProps> = ({ name, timeSlots }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleOpenDialog = (slot: string) => {
    setSelectedSlot(slot);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSlot(null);
    setFormData({ name: '', email: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReservationSubmit = () => {
    console.log(`预约成功: ${formData.name}, ${formData.email}, 时间段: ${selectedSlot}`);
    handleCloseDialog();
  };

  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: 2,
        p: 2,
        m: 2,
        width: '30%',
      }}
    >
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      <List>
        {timeSlots.map((slot, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleOpenDialog(slot)}
            sx={{ cursor: 'pointer' }} // 使用指针样式指示可点击区域
          >
            <ListItemText primary={slot} />
          </ListItem>
        ))}
      </List>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Reserve time: {selectedSlot}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            label="Email"
            type="email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleReservationSubmit} variant="contained" color="primary">
            Comfirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LocationBox;
