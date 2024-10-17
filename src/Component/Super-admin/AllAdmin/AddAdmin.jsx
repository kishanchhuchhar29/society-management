import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material'

function AddAdminDialog({ isOpen, onClose, newAdmin, handleInputChange, handleAddAdmin }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add New Admin</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={newAdmin.name}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          value={newAdmin.email}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="phone"
          label="Phone Number"
          type="tel"
          fullWidth
          variant="standard"
          value={newAdmin.phone}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddAdmin}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddAdminDialog
