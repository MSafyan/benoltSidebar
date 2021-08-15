import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'
// import { SvgIconProps } from '@material-ui/core/SvgIcon'

import {List,MenuItem,Menu,Button,Fade} from '@material-ui/core'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

import { NavLink } from 'react-router-dom'
import { Link } from '@material-ui/core'

import AppMenuItemComponent from './AppMenuItemComponent'
import { ThemeContext } from '../../context'

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
}


const AppMenuItem = props => {
  const { name, link, Icon, items = [] } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)
  const {context,setContext}=React.useContext(ThemeContext);
  const {openSide}=context;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openpop = Boolean(anchorEl);


  const handleClosepop = () => {
    setAnchorEl(null);
  };

  function handleClick(event) {
    if(openSide){
      setOpen(!open)
    }
    setAnchorEl(event.currentTarget);

  }

  const MenuItemRoot = (
    <AppMenuItemComponent className={classes.menuItem} link={link} onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon ? (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon/>
        </ListItemIcon>
      ):<span style={{paddingLeft:'8px'}}></span>}
      <ListItemText primary={name} inset={!Icon}  />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </AppMenuItemComponent>
  )

  const MenuItemChildren = isExpandable && openSide? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  const MenuItemPop = isExpandable && !openSide ? (
    <>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={openpop}
        onClose={handleClosepop}
        TransitionComponent={Fade}
        style={{marginLeft:'4rem'}}
      >
        {items.map((item,i)=> 
          <NavLink to={item.link} style={{textDecoration:'none',color:'black'}}>
        <MenuItem onClick={handleClosepop}>
          {item.name}
        </MenuItem>
          </NavLink>
        
        )}
      </Menu> 
    </>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
      {MenuItemPop}
    </>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    menuItem: {
      fontSize:"0.7rem",
      color: theme.palette.primary,
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    menuItemIcon: {
      fontSize:"0.7rem",
      // paddingLeft:'1rem'
    [theme.breakpoints.up('sm')]: {
      marginLeft:'8px'      
    }
    },
  }),
)

export default AppMenuItem
