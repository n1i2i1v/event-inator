import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="Footer_root">
      <CssBaseline />
      <footer className="Footer">
        <Container maxWidth="sm">
          <Typography variant="body1">Some Sticky Footer</Typography>
        </Container>
      </footer>
      </div>
    );
  }
}

export default Footer;
