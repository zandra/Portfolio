import React from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import { Grid, Paper } from '@material-ui/core'
import ImageContainer from '../ImageContainer'
import { profile } from '../Images'
// import ImageContainer from "../ImageContainer";
// import profile from "../profile250.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function About(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item s={12} spacing={3}>
        <Paper variant="outlined" square >
          <ImageContainer src={profile}/>
        </Paper>
      </Grid>
      <Grid item s={12} spacing={3}>
        <Paper variant="outlined" square>
        <h1>B</h1>
        </Paper>
      </Grid>
    </Grid>
  );
}
