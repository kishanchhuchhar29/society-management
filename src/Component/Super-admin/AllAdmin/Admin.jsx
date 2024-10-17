'use client'

import React, { useState } from 'react'
import { 
  Container, 
  Typography, 
  TextField, 
  List, 
  ListItem, 
  ListItemText, 
  Paper, 
  Divider
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

const initialSocieties = [
  {
    id: 1,
    name: "Tech Innovators",
    admins: [
      { phone: "123-456-7890", email: "john@techinnovators.com" },
      { phone: "098-765-4321", email: "jane@techinnovators.com" },
    ]
  },
  {
    id: 2,
    name: "Green Earth Society",
    admins: [
      { phone: "111-222-3333", email: "alice@greenearth.org" },
    ]
  },
  {
    id: 3,
    name: "Art Enthusiasts Club",
    admins: [
      { phone: "444-555-6666", email: "bob@artclub.com" },
      { phone: "777-888-9999", email: "frida@artclub.com" },
    ]
  },
]

export default function AdminPage() {
  const [societies, setSocieties] = useState(initialSocieties)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSocieties = societies.filter(society =>
    society.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    society.admins.some(admin => 
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.phone.includes(searchTerm)
    )
  )

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Society Admin Dashboard
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search societies or admins..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 4 }}
        />
        {filteredSocieties.map((society) => (
          <Paper key={society.id} elevation={3} sx={{ mb: 3, p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {society.name}
            </Typography>
            <List>
              {society.admins.map((admin, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <Divider />}
                  <ListItem>
                    <ListItemText
                      primary={admin.email}
                      secondary={admin.phone}
                    />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Paper>
        ))}
        {filteredSocieties.length === 0 && (
          <Typography variant="body1" align="center" color="textSecondary">
            No societies or admins found matching your search.
          </Typography>
        )}
      </Container>
    </ThemeProvider>
  )
}
