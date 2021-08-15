import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Primary Menu 1',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'sub menu 1.1',
        link: '/submenu1.1',
      },
      {
        name: 'sub menu 1.2',
        link: '/submenu1.2',
      },
    ],
  },
  {
    name: 'Primary Menu 2',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'sub menu 2.1',
        link: '/submenu2.1',
      },
      {
        name: 'sub menu 2.2',
        link: '/submenu2.2',
      },
    ],
  },
  {
    name: 'Primary Menu 3',
    link: '/primarymenu3',
    Icon: IconLibraryBooks,
  },
]

const AppMenu = ({UNSET_LOADING}) => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu