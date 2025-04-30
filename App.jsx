import React from 'react';
import { Button, AppBar, Toolbar, Typography, Card, CardContent, Container } from '@mui/material';


/**
 * Главный компонент приложения.
 * Использует компоненты Material UI: AppBar, Card, Button и Container.
 */
function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Library App</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Welcome to the Library
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Manage your books with ease using our modern interface.
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Get Started
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;



