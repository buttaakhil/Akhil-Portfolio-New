import React from 'react';
import { Grid } from "@mui/material";
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import {ThemeProvider} from "@mui/material/styles";
import theme from './theme';
import './App.css';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Grid container wrap="wrap-reverse" sx={{backgroundColor: "#2E2E2E", padding: "32px", }} spacing={2}>
      <LeftSide />
      <RightSide />
    </Grid>
    </ThemeProvider>
  )
}

export default App
