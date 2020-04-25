import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Text } from "./Lang/Language";
import Nav from "./Nav";
import { useCalories } from "./Calories";
import LanguageSelector from "./Lang/LanguageSelector";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: "100vw",
    marginLeft: drawerWidth,
    backgroundColor: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#17161a",
    boxShadow: "15px 1px 5px 0px rgba(0,0,0,0.3)",
    "@media(min-width:1024px)": {
      width: "320px",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  data: {
    position: "absolute",
    color: "white",
    display: "none",
    "@media(min-width:768px)": {
      display: "block",
      right: 235,
    },
  },
}));

function DrawerRWD(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { Already } = useCalories();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon style={{ color: "red" }} />
          </IconButton>
        </Toolbar>
        <div className={classes.data}>
          <h2>{new Date().toLocaleDateString()}</h2>
        </div>
        <LanguageSelector />
        <Button
          size="large"
          color="secondary"
          onClick={Already}
          className={classes.button}
        >
          <Text tid="logout">logout</Text>
        </Button>
      </AppBar>
      <nav aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Nav />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

DrawerRWD.propTypes = {
  container: PropTypes.any,
};

export default DrawerRWD;
