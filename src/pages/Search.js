import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'inherit',
    margin: '20px 20px 40px 20px'
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
  <div className = "Search">
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search "
        inputProps={{ 'aria-label': 'Search' }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} />
    </Paper>
  </div>
  );
}
