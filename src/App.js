import React from 'react';
import { makeStyles } from '@mui/styles';
import NavBar from './components/NavBar';
import { createTheme } from '@mui/material';
import LeftBar from './components/LeftBar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import { Grid } from '@mui/material';


const theme = createTheme();
const useStyles = makeStyles((theme2) => ({
  button: {
    color: "white",
    backgroundColor: theme.palette.primary.main
  },
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
  }
}));

const App = () => {
  const classes = useStyles()
  return (
    <div> <NavBar />
      <Grid container spacing={2}>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10} >
          < Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
