import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
//==============icons================//
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navIcon: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      padding: "0",
    },
    color: "white",
  },
  title: {
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function ButtonAppBar() {
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
      <AppBar style={{ background: "transparent" }} position="static">
        <Toolbar>
          <Button className={classes.navIcon} href="/sharespot">
            <InstagramIcon className={classes.navIcon} />
          </Button>
          <Button className={classes.navIcon}>
            <FacebookIcon className={classes.navIcon} />
          </Button>
          <Button className={classes.navIcon}>
            <YouTubeIcon className={classes.navIcon} />
          </Button>

          <Typography variant="h6" className={classes.title}>
            SpotShredder
          </Typography>

          <Button
            className={classes.navButton}
            href="/sharespot"
            color="inherit"
          >
            Videos
          </Button>
          <Button
            className={classes.navButton}
            href="/sharespot"
            color="inherit"
          >
            Add Spot
          </Button>
          <Button
            className={classes.navButton}
            href="/sharespot"
            color="inherit"
          >
            Spots
          </Button>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

{
  /* <List component="nav" aria-label="main mailbox folders">
          <ListItem className={classes.gutters} button>
            <ListItemLink href="/">
              <ListItemIcon className={classes.toolbarBtn}>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemLink>
          </ListItem>

          <ListItem className={classes.gutters} button>
            <ListItemLink href="/videos">
              <ListItemIcon className={classes.toolbarBtn}>
                <OndemandVideoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Videos" />
            </ListItemLink>
          </ListItem>

          <ListItem className={classes.gutters} button>
            <ListItemLink href="/spots">
              <ListItemIcon className={classes.toolbarBtn}>
                <RoomOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Spots" />
            </ListItemLink>
          </ListItem>

          <ListItem className={classes.gutters} button>
            <ListItemLink href="/sharespot">
              <ListItemIcon className={classes.toolbarBtn}>
                <AddLocationOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Add Spots" />
            </ListItemLink>
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItemLink href="/signup">
            <ListItemText primary="Signup" />
          </ListItemLink>

          <ListItemLink href="/news">
            <ListItemText primary="News" />
          </ListItemLink>
        </List> */
}
