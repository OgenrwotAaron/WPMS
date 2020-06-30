/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
//import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, ListItemText, Collapse, ListItemIcon, Checkbox } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  title:{
    textAlign:'start',
    '& span':{
      fontWeight:400,
    },
  },
  icons: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
}));

// const CustomRouterLink = forwardRef((props, ref) => (
//   <div
//     ref={ref}
//     style={{ flexGrow: 1 }}
//   >
//     <RouterLink {...props} />
//   </div>
// ));

const SidebarNav = props => {
  const { pages, className,opts, ...rest } = props;

  const classes = useStyles();

  //const [selectedIndex, setSelectedIndex] = useState(0)
  const [down, setDown] = useState();
  const [status, setStatus] = useState(false)

  // const handleListItemClick = (event,index)=>{
  //   setSelectedIndex(index)
  // }

  const handleClick = (event,index)=>{
    //setSelectedIndex('')
    setDown(index)
    setStatus(!status)
  }

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {
        opts.map((item, index) => (
          <div key={index}>
            <ListItem 
              className={classes.item}
              disableGutters  
              onClick={(event)=>handleClick(event,index)}
            >
              <Button
                className={classes.button}
              >
                <div className={classes.icons}>{item.icon}</div>
                <ListItemText className={classes.title} classes={{secondary:classes.secondary}} primary={item.name} secondary={item.options.join(', ')} />
                {item.options.length < 1 ? 
                  null:status && down === index ? 
                  <ExpandLessIcon className={classes.icon}/> : null}
              </Button>
            </ListItem>
            {
              item.options.map((opt,i)=>(
                <Collapse key={i} in={status && down === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <Checkbox edge='start'/>
                        </ListItemIcon>
                        <ListItemText className={classes.title} primary={opt} />
                    </ListItem>
                  </List>
                </Collapse>
              ))
            }
            
          </div>
        ))
      }
      {/*pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))*/}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default SidebarNav;
