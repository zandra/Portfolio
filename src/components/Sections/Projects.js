import React from "react"
import { makeStyles } from '@material-ui/core/styles' 
import Grid from '@material-ui/core/Grid'
import ProjectCard from "../ProjectCard"
import { image17, image13, image06, image19, image11  } from '../Images'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));
export default function Projects(props) {
  
  const imageObj = {"image17": image17, "image13": image13, "image06": image06, "image19": image19, "image11": image11}
  const classes = useStyles();
  
  return (
    <Grid 
      container 
      className={classes.root} 
      direction="row"
      justify="center"
      alignItems="center"
    >
      {props.data.map(p => 
        <ProjectCard 
          className={classes.card}
          key={p.id}
          title={p.title}
          src={p.media.externalUrl ? p.media.externalUrl : imageObj[p.media.title]}
          github={p.link.github}
          app={p.link.deployed}
          />
        )}
    </Grid>
  );
}