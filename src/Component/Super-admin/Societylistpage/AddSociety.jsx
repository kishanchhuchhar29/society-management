'use client'

import React, { useState } from 'react'
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button 
} from '@mui/material'

const AddSocietyPopup = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({ name, address })
    setName('')
    setAddress('')
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add New Society</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="society-name"
            label="Society Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            margin="dense"
            id="society-address"
            label="Address"
            type="text"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Add Society
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default AddSocietyPopup
