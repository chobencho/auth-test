import { Link } from "react-router-dom";

import { makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from "@mui/icons-material/Groups";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@material-ui/styles";

import Box from "@material-ui/core/Box";

import React, { useContext } from "react";
import { AuthContext } from "App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#516AC5",
    },
    secondary: {
      main: "#679D5F",
    },
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  linkBtn: {
    textTransform: "none",
  },
  box: {
    margin: "10px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  icon: {
    margin: "auto",
  },
  text: {
    fontSize: "10pt",
  },
  transitionButton: {
    width: "15%",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar component="footer" position="static" color="inherit">
          <Box textAlign="center" className={classes.box}>
            <Link to="/" className={`${classes.transitionButton}`}>
              <PersonSearchIcon fontSize="large" className={classes.icon} />
              <p className={`${classes.text}`}>ユーザ検索</p>
            </Link>
            <Link to="/boards" className={`${classes.transitionButton}`}>
              <AssignmentIcon fontSize="large" className={classes.icon} />
              <p className={`${classes.text}`}>掲示板</p>
            </Link>
            <Link to="/communities" className={`${classes.transitionButton}`}>
              <GroupsIcon fontSize="large" className={classes.icon} />
              <p className={`${classes.text}`}>コミュニティ</p>
            </Link>
            <Link to="/messages" className={`${classes.transitionButton}`}>
              <MessageIcon fontSize="large" className={classes.icon} />
              <p className={`${classes.text}`}>チャット</p>
            </Link>
            <Link
              to={`/myPage/${currentUser?.id}`}
              className={`${classes.transitionButton}`}
            >
              <AccountBoxIcon fontSize="large" className={classes.icon} />
              <p className={`${classes.text}`}>マイページ</p>
            </Link>
          </Box>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Footer;
