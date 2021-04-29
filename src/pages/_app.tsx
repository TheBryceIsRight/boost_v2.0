import { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from '../../components/Theme'
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Media, MediaContextProvider } from "../../utils/media";


import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Menu,
  MenuItem,
  ListItemText,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { fade } from '@material-ui/core/styles'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert'; 
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MessageIcon from '@material-ui/icons/Message';
import useTranslation from '../../hooks/useTranslation';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ThemeContext from '../../components/Theme';
import { useRouter } from 'next/router';
import { locales, languageNames } from '../../translations/config';
import TranslateIcon from '@material-ui/icons/Translate';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from '@material-ui/core/Divider';
import StoreIcon from '@material-ui/icons/Store';
import WorkIcon from '@material-ui/icons/Work'; 
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from "@material-ui/core/Box";


const themeContext = {
  name: 'dark',
  type: [
    'light',
    'dark'
  ],
  switch: true,
  language: [
    'en',
    'fr',
    'pl',
    'es'
  ],
  index: 0,
}


const useStyles = makeStyles((theme: Theme) => createStyles({
  body: {
      margin:0,
    },
    list: {
        width: 'auto',
      },
      fullList: {
        width: 'auto',
      },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 2,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'primary',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
}));


function MyApp({ Component, pageProps }: AppProps) {

  const containerSmall = {
    maxWidth: '36rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const containerMedium = {
    maxWidth: '45rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const containerLarge = {
    maxWidth: '56rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const containerHuge = {
    maxWidth: '72rem',
    padding: '0 1rem',
    margin: '3rem auto 6rem'
  };

  const [isMounted, setIsMounted] = useState(false);
	const [darkState, setDarkState] = useState(true);

	const handleThemeChange = () => {
    setDarkState(!darkState);
    themeContext.name = darkState ? themeContext.type[0] : themeContext.type[1] ;
    themeContext.switch = darkState ? false : true ;
  };
  

  let theme = darkState ? lightTheme : darkTheme;

  theme = responsiveFontSizes(theme);

	useEffect(() => {
    setIsMounted(true)}, [])


  const NavigationBar: React.FC = () => {
  
  const classes = useStyles();

  const { t,  locale} = useTranslation()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isNotificationsMenuOpen = Boolean(notificationsAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
      setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event: any) => {
    setNotificationsAnchorEl(event.currentTarget);
  };


  const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
  };

  const handleNotificationsMenuCLose  = () => {
    setNotificationsAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: any) => {
      setMobileMoreAnchorEl(event.currentTarget);
  };

  /////////////////////////////
  //Language Selector
  /////////////////////////////

  const router = useRouter();

  const [languageAnchorEl, setlanguageAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setlanguageAnchorEl(null);
    themeContext.index = index;
    const { myValue } = event.currentTarget.dataset;
    const regex = new RegExp(`^/(${locales.join('|')})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${myValue}`));
  };

  const handleLanguageMenuOpen = (event: any) => {
    setlanguageAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setlanguageAnchorEl(null);
  };

  ///////////////////////////
  //End of Language Selector
  ///////////////////////////

  function Logo() {
    if (!darkState) {
      return (
      <Link href="/[lang]/" as={`/${locale}/`} passHref>
        <ButtonBase>
        <img src='/logo_dark.svg' alt='Logo' height={36} width={94} />
        </ButtonBase>
      </Link>
      );
    } else {
    return (
      <Link href="/[lang]/" as={`/${locale}/`} passHref>
        <ButtonBase>
        <img src='/logo.svg' alt='Logo' height={36} width={94}/>
        </ButtonBase>
      </Link>
      );
    }
  }


  const menuId = 'primary-search-account-menu';

  const renderMenu = (
      <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      >
      <Link href="/api/login" passHref >
      <MenuItem>
            <ListItemIcon>
              <VpnKeyIcon/>
            </ListItemIcon>
            <ListItemText>
                  <Typography>
                    {t("login")}
                  </Typography>
            </ListItemText>
      </MenuItem>
      </Link>
      <Link href="/api/logout" passHref >
      <MenuItem>
            <ListItemIcon>
              <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText>
                  <Typography>
                  {t("logout")}
                  </Typography>
            </ListItemText>
      </MenuItem>
      </Link>

      <Link href="/profile" passHref >
      <MenuItem>
        
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText>
                  <Typography>
                  {t("profile")}
                  </Typography>
            </ListItemText>

      </MenuItem>
      </Link>

      <Link href="/[lang]/settings" as={`/${locale}/settings`} passHref >
      <MenuItem>
        
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText>
                  <Typography>
                    {t("settings")}
                  </Typography>
            </ListItemText>

      </MenuItem>
      </Link>

      </Menu>
  );

  const languageMenuId = 'language settings';
  const renderLanguageMenu = (
    <React.Fragment>
      
      <Menu
        id={languageMenuId}
        anchorEl={languageAnchorEl}
        keepMounted
        open={Boolean(languageAnchorEl)}
        onClose={handleClose}
      >
        {locales.map((option, index) => (
          <MenuItem
            key={option}
            data-my-value={[option]}
            id={languageNames[option]}
            selected={index === themeContext.index}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {languageNames[option]}
          </MenuItem>
        ))}
      </Menu>
  </React.Fragment> 
  );

  const notificationsMenuId = 'notifications-menu';
  const renderNotifcationsMenu = (
      <Menu
      anchorEl={notificationsAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={notificationsMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isNotificationsMenuOpen}
      onClose={handleNotificationsMenuCLose}
      >
      <MenuItem>
      All notifications are read!
      </MenuItem>
      </Menu>
  );


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
      <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      >
      <MenuItem onClick={handleProfileMenuOpen}>
          <ListItemIcon><AccountCircle />
          </ListItemIcon>
          <ListItemText primary={t("profile")} />
      </MenuItem>
      <MenuItem onClick={handleNotificationMenuOpen}>
          <ListItemIcon><NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary={t("notifications")}/>
      </MenuItem>
      <MenuItem onClick={handleThemeChange} >
          <ListItemIcon><Brightness3Icon/>
          </ListItemIcon>
          <ListItemText primary={t("dark_mode")} />
      </MenuItem>
      <MenuItem onClick={handleLanguageMenuOpen}>
          <ListItemIcon><TranslateIcon/>
          </ListItemIcon>
          <ListItemText primary={t("language")} />
      </MenuItem>
      </Menu>
  );

  const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
      checkedA: true,
      checkedB: true,
  });

  const toggleDrawer = (anchor:any, open:any) => (event:any) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
      }

      setState({ ...state, [anchor]: open });
  };

  const list = (anchor:any) => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <React.Fragment>
      <div className={classes.drawerHeader}>
        <Grid container direction="row" spacing={1} justify="flex-end" alignItems="center">
            <Grid item>
            <Box style={{width:140}}/>
            </Grid>
            <Grid item>
            <IconButton onClick={toggleDrawer(anchor, false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
            </Grid>
        </Grid>
          
        </div>
      <div
      // className={clsx(classes.list, {
      //     [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      // })}
      // role="navigation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
      >
      <List>

      <ListItem button>
          <ListItemIcon><StoreIcon/>
          </ListItemIcon>
          <ListItemText primary='Merchants' />
      </ListItem>
      <Link href="/Index" passHref >
      <ListItem button>
          <ListItemIcon><WorkIcon/>
          </ListItemIcon>
          <ListItemText primary="Cases" />
      </ListItem>
      </Link>

      <ListItem button>
          <ListItemIcon><InsertDriveFileIcon/>
          </ListItemIcon>
          <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
          <ListItemIcon><SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary='Settings' />
      </ListItem>
      <Divider/>

      <ListItem button>
          <ListItemIcon><MessageIcon/>
          </ListItemIcon>
          <ListItemText primary="Feedback" />
      </ListItem>
      <Divider/>
      
      </List>
      </div>
      </React.Fragment>
  );

{/*End of Top */}
    
    
    return (
      
    
        <div className={classes.grow}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow:'none'}}>
              <Toolbar disableGutters={true}>
                <React.Fragment>
                <IconButton
                    className={classes.menuButton}
                    color="primary"
                    aria-label="open menu"
                    onClick={toggleDrawer('left', true)}
                    > 
                <MenuIcon />
                </IconButton>   
                <Drawer 
                    anchor={'left'} 
                    variant="persistent"
                    open={state['left']} 
                    onClose={toggleDrawer('left', false)}>{list('left')}
                    
                </Drawer>
                </React.Fragment>
                <Logo/>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                <Tooltip title={t("language")}>
                  <IconButton
                    edge='end'
                    aria-label={t("language")}
                    aria-haspopup='true'
                    onClick={handleLanguageMenuOpen}
                    color='primary'>
                      <TranslateIcon/>
                    </IconButton>
                  </Tooltip>
                </div>
                <div className={classes.sectionDesktop}>
                <Tooltip title={t("dark_mode")}>
                  <IconButton
                    edge="end"
                    aria-label={t("dark_mode")}
                    aria-haspopup="false"
                    onClick={handleThemeChange}
                    color="primary"
                  >
                    <Brightness3Icon />
                  </IconButton>
                  </Tooltip>
                </div>
                <div className={classes.sectionDesktop}>
                <Tooltip title={t("notifications")}>
                  <IconButton
                    edge="end"
                    aria-label={t("notifications")}
                    aria-controls={notificationsMenuId}
                    aria-haspopup="true"
                    onClick={handleNotificationMenuOpen}
                    color="primary"
                  >
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
                </div>
                
  
                <div className={classes.sectionDesktop}>
                <Tooltip title={t("profile")}>
                  <IconButton
                      aria-label={t("profile")}
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="primary"
                    >
                      <AccountCircle />
                    </IconButton>
                </Tooltip>
                </div>
                
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="primary"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            <br/>
            {renderMobileMenu}
            {renderMenu}
            {renderNotifcationsMenu}
            {renderLanguageMenu}
          </div>
    );
    };


  return (
  <ThemeContext.Provider value={themeContext.switch}>
  <MediaContextProvider>
  <Media at="sm">
  <div style={containerSmall} >
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <nav role='navigation'>
        <NavigationBar/>
        </nav>
        <main role='main'>
        {isMounted && <Component {...pageProps} />}
        <br/>
        </main>
        <div role='contentinfo'>
        </div>
    </ThemeProvider>
    </div>
    </Media>
    <Media at="mo">
    <div style={containerSmall} >
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <nav role='navigation'>
          <NavigationBar/>
          </nav>
          <main role='main'>
          {isMounted && <Component {...pageProps} />}
          <br/>
          </main>
          <div role='contentinfo'>
          </div>
      </ThemeProvider>
      </div>
    </Media>
    <Media at="md">
      <div style={containerMedium} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <nav role='navigation'>
            <NavigationBar/>
            </nav>
            <main role='main'>
            {isMounted && <Component {...pageProps} />}
            <br/>
            </main>

        </ThemeProvider>
      </div>
    </Media>
    <Media at="lg">
      <div style={containerLarge} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <nav role='navigation'>
            <NavigationBar/>
            </nav>
            <main role='main'>
            {isMounted && <Component {...pageProps} />}
            <br/>
            </main>

        </ThemeProvider>
      </div>
    </Media>
    <Media greaterThan="lg">
      <div style={containerHuge} >
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <nav role='navigation'>
            <NavigationBar/>
            </nav>
            <main>
            {isMounted && <Component {...pageProps} />}
            <br/>
            </main>
            
        </ThemeProvider>
      </div>
    </Media>
    </MediaContextProvider> 
    </ThemeContext.Provider> 
    )
}

export default MyApp