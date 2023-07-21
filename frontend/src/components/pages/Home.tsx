import { useContext } from "react"
import { AuthContext } from "App"

import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

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

  const { currentUser } = useContext(AuthContext)
  const myId = currentUser ? currentUser.id : null
  const stringMyId = myId?.toString()

  useEffect(() => {
    const f = async () => {
      const res = await getUsers(stringMyId);
      setUsers(res.data);
    };
    f();
  }, []);

  return (
    <>
      <Box className={classes.flexbox}>
        {users?.map((user) => (
          <Link to={`/user/${user.id}`}>
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
                  {user.name} / {user.subjectCode}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </>
  )
}

export default Home
