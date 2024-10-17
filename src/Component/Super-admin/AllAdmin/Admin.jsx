'use client'
import React, { useState } from 'react'
import { 
  Container, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Button
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AddAdminDialog from './AddAdmin.jsx'
const theme = createTheme()

const initialAdmins = [
  { name: "Bob Ross", email: "bob@artclub.com", phone: "444-555-6666" },
  { name: "Frida Kahlo", email: "frida@artclub.com", phone: "777-888-9999" },
]

export default function AdminPage() {
  const [admins, setAdmins] = useState(initialAdmins)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', phone: '' })

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setNewAdmin({ name: '', email: '', phone: '' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewAdmin(prev => ({ ...prev, [name]: value }))
  }

  const handleAddAdmin = () => {
    setAdmins(prev => [...prev, newAdmin])
    handleCloseDialog()
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Suryarath Apartment
        </Typography>
        <Typography variant="h6" gutterBottom>
          List of Admins
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((admin, index) => (
                <TableRow key={index}>
                  <TableCell>{admin.name}</TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>{admin.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button 
          variant="contained" 
          onClick={handleOpenDialog}
          sx={{ mt: 2 }}
        >
          Add New Admin
        </Button>

        {/* AddAdminDialog component */}
        <AddAdminDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          newAdmin={newAdmin}
          handleInputChange={handleInputChange}
          handleAddAdmin={handleAddAdmin}
        />
      </Container>
    </ThemeProvider>
  )
}
