import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Layout from './components/Layout'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout />
    </div>
  );
}

export default App;
