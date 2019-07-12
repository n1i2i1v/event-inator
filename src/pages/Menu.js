import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
  'Home',
  'About',
  'Contact',
];

const StyledMenu = withStyles({
  paper: {
    width: 'auto',
    background: 'transparent',
    top: '18px !important',
    left: 'unset !important',
    right: '85px !important'
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
      display: 'inherit',
      margin: '-8px 10px 18px 10px',
      background: 'white',
      padding: '11px 20px',
      borderRadius: 20,
      textAlign: 'center',
      color: '#666cda',
      border: '1px white solid',
      "&:hover, &:focus, &:active": {
        color:'white',
        background:'#666cda',
      },
  },
}))(MenuItem);


export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

const StyledButton = withStyles({
    root: {
      background: 'white',
      borderRadius: 15,
      border: 0,
      margin: 0,
      right: 16,
      top: 16,
      left: 'auto',
      position: 'fixed',
      color: '#666cda',
      padding: '15px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      "&:hover, &:focus, &:active": {
        color:'white',
        background:'#666cda',
      },
    },
  })(Button);

return (
  <div>
    <StyledButton
      aria-controls="customized-menu"
      aria-haspopup="true"
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
    <MoreVertIcon />
    </StyledButton>
    <StyledMenu
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
        {options.map(option => (
          <StyledMenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose} anchorOrigin = {'right'}>
            {option}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
