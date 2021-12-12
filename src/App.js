import React from 'react';
import { makeStyles } from '@mui/styles';
import NavBar from './components/NavBar';
import { createTheme } from '@mui/material';

const theme = createTheme();
const useStyles = makeStyles((theme2) => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.primary.main
  }
}));

const App = () => {
  const classes = useStyles()
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
