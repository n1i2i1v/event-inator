import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStylesPapper = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 2, 0, 2),
    width: theme.spacing(35),
    margin: '10vh auto 0 auto',
    height: '100px',
    background: '#666CDA',
    color: 'white',
    border: '1px white solid',
    borderRadius: '50px 150px',
  },
  rounded: {
    borderRadius: 15,
  }
}));

const StyledCardMedia = withStyles(theme => ({
  root: {
    width: theme.spacing(20),
    borderRadius: '100%',
    height: theme.spacing(20),
    border: '2px white solid',
    margin: '-160px auto 5px auto',
    boxShadow: '0 3px 5px 2px rgba(9, 0, 2, 0.55)',
      },
}))(CardMedia);


export default function About() {
  const classes = useStylesPapper();

  return (
    <div>
      <Paper className={classes.root} square={false}>
      <StyledCardMedia
          image="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1514&q=80"
      />
        <Typography variant="h5" component="h3" align = 'center'>
          Name Surname
        </Typography>
      </Paper>
    </div>
  );
}
