import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '50rem',
    background: 'rgba(0,0,0,0.5)',
    margin: '50px',
    cursor: 'pointer'
  },
  media: {
    // backgroundImage: `url(${process.env.PUBLIC_URL+ "/cover.jfif"})`,
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
    textDecoration: 'underline'
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
    fontWeight: ''
  },
});

export default function ImageCard({title, desc, link}) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={link}
          title="Image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {desc}
          </Typography>
        </CardContent>
      </Card>
  );
}