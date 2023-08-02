import React from "react";
import { useContext } from "react";
import { AuthContext } from "App";

import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";

const useStyles = makeStyles(() => ({
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 999,
  },
  container: {
    marginTop: "3rem",
  },
}));

interface CommonLayoutProps {
  children: React.ReactElement;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  const classes = useStyles();
  const { isSignedIn, currentUser } = useContext(AuthContext);

  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <main className="pt-14 pb-32">
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </main>
      {isSignedIn && currentUser ? (
        <>
          <footer className="fixed bottom-0 w-full">
            <Footer />
          </footer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CommonLayout;
