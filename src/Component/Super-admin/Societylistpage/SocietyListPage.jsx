'use client'

import React, { useState } from 'react'
import { 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Grid 
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import AddSocietyPopup from './AddSociety.jsx'

const SocietyListPage = () => {
  const [societies, setSocieties] = useState([])
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const addSociety = (newSociety) => {
    setSocieties([...societies, { ...newSociety, id: Date.now() }])
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Society List
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          onClick={() => setIsPopupOpen(true)}
        >
          Add Society
        </Button>
      </div>

      {societies.length === 0 ? (
        <Typography variant="body1" align="center" color="textSecondary">
          No societies added yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {societies.map((society) => (
            <Grid item xs={12} sm={6} md={4} key={society.id}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" component="div" align="center">
                    {society.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <AddSocietyPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onAdd={addSociety}
      />
    </Container>
  )
}

export default SocietyListPage
