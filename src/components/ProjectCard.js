import React from 'react'
import { Divider, makeStyles, IconButton, Typography } from '@material-ui/core'
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'
import GitHubIcon  from '@material-ui/icons/GitHub'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'

const useStyles = makeStyles({
  root: {
    margin: 10
  },
  media: {
    width: 250,
    height: 250,
  },
    links: {
      margin: '0 5px',
    }
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
          <Typography gutterBottom variant="h5" align="center">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton href={props.github} aria-label="Github Link">
          <GitHubIcon />
          <Typography variant="caption" className={classes.link} >
            Github Link
          </Typography>
        </IconButton>
        <IconButton href={props.deployed} aria-label="Application Link">
          <EmojiFlagsIcon />
          <Typography variant="caption" className={classes.link}>
            Application Link
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
