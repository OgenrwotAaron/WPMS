import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display:'flex',
    padding: theme.spacing(4),
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="/"
        >
          WPMS
        </Link>
        . {new Date().getFullYear()}
      </Typography>
      <Typography variant="caption">
        Water Point Management System
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
