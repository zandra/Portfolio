import React from 'react'
import { Divider, makeStyles } from '@material-ui/core'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography  } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
  root: {
    margin: 10
  },
  media: {
    width: 250,
    height: 250,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title={props.title}
        />
        <Divider variant="middle" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton href={props.github} aria-label="Github Link">
          <GitHubIcon />
        </IconButton>
        <IconButton href={"www.google.com"} aria-label="Github Link">
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
