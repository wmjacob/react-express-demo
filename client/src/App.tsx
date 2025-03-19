import React from 'react';
import './App.css'
import { 
  AppBar,
  Container,
  Paper,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'

import { ValidateCard } from './components/ValidateCard';

const Content = styled('div')(({ theme }) => ({
  marginTop: theme.mixins.toolbar.minHeight, // This uses the AppBar height defined in the theme
  width: '100%',
}));

function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            Express React TypeScript App
          </Typography>
        </Toolbar>
      </AppBar>
      <Content>
        <Container>
          <Paper sx={{ p: 5 }}>
            <ValidateCard />
          </Paper>
        </Container>
      </Content>
    </>
  )
}

export default App
