import { Container, Typography, Button, Box } from '@mui/material'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: 3,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Hello World!
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom>
          Welcome to MUI Playground
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount((count) => count + 1)}
          >
            Click me
          </Button>
          <Typography variant="body1">
            Count: {count}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          Built with React + Vite + Material-UI
        </Typography>
      </Box>
    </Container>
  )
}

export default App
