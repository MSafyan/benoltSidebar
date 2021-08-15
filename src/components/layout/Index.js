import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'

import { ThemeContext } from '../../context';

import AppMenu from './AppMenu';

function Copyright() {
  return (
    <Typography style={{position:"absolute",bottom:'20px'}} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      display:'none'
    }
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none !important',
  },
  menuButtonHidden: {
    display: 'none',
  },
  logoTitle:{
    display:'flex',
    alignItems:"center"
  },
  logo:{
    fontSize:'20px'
  },
  title: {
    flexGrow: 1,
    fontSize:'16px',
    marginLeft:'0.5rem'
  },
  drawerPaper: {
    position: 'relative',
    height:"100vh",
    overflow:'hidden',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background:theme.palette.background.default,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    [theme.breakpoints.down('xs')]: {
      width: 0,
      display:'none',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
    toolbarButtonUnhidden:{
    color:'white',
    [theme.breakpoints.up('md')]: {
      minWidth:"0px",
      padding:'0px'
    },
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
  },
  hideCard:{
    [theme.breakpoints.down('xs')]: {
      display:"none !important"
    }
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  // logo:{
  //   margin:'auto',
  //   display:'flex',
  //   alignItems:"baseline",
  //   color:theme.palette.primary
  // },
  lightFill:{
    color:theme.palette.primary
  },
  sideBarFlex:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    height:'100%'
  },
  Lock:{
    [theme.breakpoints.up('sm')]: {
      marginLeft:'8px'      
    }
  }
}));

const Index = (props) => {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(true);
    const {context,setContext}=React.useContext(ThemeContext);
    const {openSide}=context;
    const handleDrawerOpen = () => {
        // setOpen(true);
        setContext({openSide:true});
    };
    const handleDrawerClose = () => {
      // console.log(props);
      // setOpen(false);
      setContext({openSide:false});
    };
    return (
        <>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, openSide && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, openSide && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" onClick={handleDrawerClose} className={clsx(classes.menuButton, !openSide && classes.menuButtonHidden)}>
            <ChevronLeftIcon/>
          </IconButton>
          <div className={classes.logoTitle}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.logo}>
            SSENSE
          </Typography>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Order Management System
          </Typography>

          </div>
          {/* {props.isAuthenticated === false ? (
						<Link href='/register' style={{ textDecoration: 'none' }}>
							<Button variant='outlined'>
								SignUp
							</Button>
						</Link>
						) : (
            <Link style={{ textDecoration: 'none' }}>
							<Button variant='outlined' onClick={()=>props.LOGOUT()} className={classes.getStartMobile}>
								LogOut
							</Button>
						</Link>
						)} */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !openSide && classes.drawerPaperClose),
        }}
        open={openSide}
      >
        <div className={classes.toolbarIcon}>
          <div className={classes.logo}>

          </div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon className={classes.lightFill}/>
          </IconButton>
        </div>
        <Divider />
        <div className={classes.sideBarFlex}>
          <AppMenu />
          <ListItem className={classes.Lock}>
            <ListItemIcon>
                <LockOpenIcon/>
            </ListItemIcon>
            <ListItemText>
              Lock the Menu
            </ListItemText>
          </ListItem>
        </div>

      </Drawer>
      <main className={clsx(classes.content, {
              [classes.hideCard]: openSide,
            })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
        </>
    )
}

export default Index;