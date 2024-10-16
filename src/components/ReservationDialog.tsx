// src/components/ReservationDialog.tsx
import React, { useState, ChangeEvent } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, TextField, Box
} from '@mui/material';

interface ReservationDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (name: string, email: string) => void;
}

const ReservationDialog: React.FC<ReservationDialogProps> = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(name, email);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>I want to go</DialogTitle>
      <DialogContent>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Grinnell Email"
            value={email}
            onChange={handleEmailChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReservationDialog;
