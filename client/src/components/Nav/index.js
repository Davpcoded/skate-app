import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "@material-ui/icons/Home";
import OndemandVideo from "@material-ui/icons/OndemandVideo";
import AddLocation from "@material-ui/icons/AddLocation";
import Room from "@material-ui/icons/Room";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    height: "60px",
    width: "100%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navIcons: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#dbdbdb",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  buttonWidth: {
    width: "100%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbarBtn: {
    color: "black",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "transparent" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src="images/AppLogoTransparent.png" />
          <InstagramIcon className={classes.navIcons} />
          <FacebookIcon className={classes.navIcons} />
          <YouTubeIcon className={classes.navIcons} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem className={classes.gutters} button>
            <Button className={classes.buttonWidth} href="/">
              <ListItemIcon className={classes.toolbarBtn}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </Button>
          </ListItem>

          <ListItem className={classes.gutters} button>
            <Button className={classes.buttonWidth} href="/videos">
              <ListItemIcon className={classes.toolbarBtn}>
                <OndemandVideo />
              </ListItemIcon>
              <ListItemText primary="Videos" />
            </Button>
          </ListItem>

          <ListItem className={classes.gutters} button>
            <Button className={classes.buttonWidth} href="/spots">
              <ListItemIcon className={classes.toolbarBtn}>
                <Room />
              </ListItemIcon>
              <ListItemText primary="Spots" />
            </Button>
          </ListItem>

          <ListItem className={classes.gutters} button>
            <Button className={classes.buttonWidth} href="/sharespot">
              <ListItemIcon className={classes.toolbarBtn}>
                <AddLocation />
              </ListItemIcon>
              <ListItemText primary="Add Spots" />
            </Button>
          </ListItem>

          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <Button className={classes.buttonWidth} href="/signup">
              <ListItemText primary="Signup" />
            </Button>

            <Button className={classes.buttonWidth} href="/news">
              <ListItemText primary="News" />
            </Button>
          </List>
        </List>
      </Drawer>
    </div>
  );
}
