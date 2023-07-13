import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "App"

import { makeStyles, Theme } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Box from "@material-ui/core/Box"
import { Typography } from "@material-ui/core"

import { getUsers } from "lib/api/user"
import { UserData } from "interfaces/index"

const useStyles = makeStyles((theme: Theme) => ({

  header: {
    textAlign: "center"
  },
  card: {
    width: "100%",
    margin: "5px",
    border: "0.1px solid #eee"
  },
  box: {
    margin: "10px",
    width: "50%",
    border: "1px solid #000"
  },
  cardContent: {
    padding: "0px"
  },
  flexbox: {
    display: "flex"
  }
}))


const Home = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const classes = useStyles()

  useEffect(() => {
    const f = async () => {
      getUsers().then((res) => setUsers(res.data))
    };
    f();
}, []);

  return (
    <>
      <Box className={classes.flexbox}>
        {users?.map((user) => (
          <Card className={classes.card}>
            <CardMedia
              component="img"
              src={`${process.env.PUBLIC_URL}/images/${user.image}`}
              alt="user image"
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="body2">
                {user.name}
              </Typography>
              <Typography variant="body2">
                {user.name} / {user.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default Home

