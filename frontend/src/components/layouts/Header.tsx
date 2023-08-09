import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

import { makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { signOut } from "lib/api/auth";

import { AuthContext } from "App";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: "white",
  },
  linkBtn: {
    textTransform: "none",
    backgroundColor: "black",
  },
  imageContainer: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    elevation: 0,
  },
  image: {
    width: "70%",
    maxWidth: "100%",
    margin: "0 auto",
    textAlign: "center",
    height: "auto",
    elevation: 0,
  },
}));

const Header = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signOut();
      console.log(res);

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);
        navigate("/signin");

        console.log("Succeeded in sign out");
      } else {
        console.log("Failed in sign out");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const AuthButtons = () => {
    if (!loading) {
      if (isSignedIn) {
        return (
          <>
            {/* <Button
              color="inherit"
              className={classes.linkBtn}
              onClick={handleSignOut}
            >
              Sign out
            </Button> */}
          </>
        );
      } else {
        return (
          <>
            <Button
              component={Link}
              to="/signin"
              color="inherit"
              className={classes.linkBtn}
            >
              Sign in
            </Button>
            <Button
              component={Link}
              to="/signup"
              color="inherit"
              className={classes.linkBtn}
            >
              Sign Up
            </Button>
          </>
        );
      }
    } else {
      return <></>;
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={`${classes.toolbar}`}>
          <Paper className={classes.imageContainer} elevation={0}>
            <Link to={"/"}>
              <img
                src={`${process.env.PUBLIC_URL}/images/header/logo.png`}
                alt="Description of the image"
                className={classes.image}
              />
            </Link>
          </Paper>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
