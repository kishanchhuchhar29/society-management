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

  const handleNavigate = (id) => {
    window.location.href = `/societylist/${id}`
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {societies.map((society) => (
            <Card key={society.id} onClick={() => handleNavigate(society.id)}>
              <CardContent className="p-4 flex items-center cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 mr-4 overflow-hidden">
                  {society.logo ? (
                    <img 
                      src={society.logo} 
                      alt={`${society.name} logo`} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                      {society.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <h2 className="text-lg font-semibold truncate">{society.name}</h2>
              </CardContent>
            </Card>
          ))}
        </div>
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
