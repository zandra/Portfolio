import React from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import { Grid, Paper, Typography } from '@material-ui/core'
import ImageContainer from '../ImageContainer'
import { profile } from '../Images'


const useStyles = makeStyles(theme => ({
  root: {
    
  },
  bio: {
    margin: 10,
  }
}));

export default function About(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item s={12} spacing={3}>
        <Paper elevation={1} square >
          <ImageContainer src={profile}/>
        </Paper>
      </Grid>
      <Grid item s={12} spacing={10}>
        <Paper elevation={1}  square>
          <Typography className={classes.bio}>
          Hello! I am software tester (QA Engineer) by profession and
          a web developer in training. Here are some of my projects.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
