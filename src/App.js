import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import Layout from './components/Layout'
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#37474f',
      // dark: will be calculated from palette.primary.main,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#ff5722",
    },
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  }
});

const useStyles = makeStyles({
    muiPink: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      padding: '0 30px',
    },
    layout: {
      backgroundColor: '#CFD8DC',
      color: 'red',
    }
  })

export default function(props){
  const classes = useStyles();
  return (
  <ThemeProvider theme={theme}>
    <Layout className={classes.layout}/>
  </ThemeProvider>
);
  }
