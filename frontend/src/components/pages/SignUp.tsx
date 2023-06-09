import React, { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import Cookies from "js-cookie"

import { makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import { Typography } from "@material-ui/core"

import { AuthContext } from "App"
import AlertMessage from "components/utils/AlertMessage"
import { signUp } from "lib/api/auth"
import { SignUpParams } from "interfaces/index"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(6)
  },
  submitBtn: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    textTransform: "none"
  },
  header: {
    textAlign: "center"
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 400
  },
  box: {
    marginTop: "2rem"
  },
  link: {
    textDecoration: "none",
    color: "#516AC5"
  }
}))

// サインアップ用ページ
const SignUp: React.FC = () => {
  const classes = useStyles()

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)
  const [alertConfirmMessageOpen, setAlertConfirmMessageOpen] = useState<boolean>(false)


  const confirmSuccessUrl = "http://localhost:3000";

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const params: SignUpParams = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
      confirmSuccessUrl: confirmSuccessUrl
    }

    try {
      const res = await signUp(params)
      console.log(res)

      if (res.status === 200) {
        // アカウント作成と同時にログインさせてしまう
        // 本来であればメール確認などを挟むべきだが、今回はサンプルなので
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsSignedIn(true)
        setCurrentUser(res.data.data)

        // navigate("/")

        // alert("confirm email");
        setAlertConfirmMessageOpen(true)

        console.log("Signed in successfully!")
      } else {
        setAlertMessageOpen(true)
      }
    } catch (err) {
      console.log(err)
      setAlertMessageOpen(true)
    }
  }

  return (
    <>
      <form noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Sign Up" />
          <CardContent>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Name"
              value={name}
              margin="dense"
              onChange={event => setName(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Email"
              value={email}
              margin="dense"
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              margin="dense"
              autoComplete="current-password"
              onChange={event => setPassword(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Password Confirmation"
              type="password"
              value={passwordConfirmation}
              margin="dense"
              autoComplete="current-password"
              onChange={event => setPasswordConfirmation(event.target.value)}
            />

            <TextField
              type="hidden"
              value={confirmSuccessUrl}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              color="default"
              disabled={!name || !email || !password || !passwordConfirmation ? true : false}
              className={classes.submitBtn}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Box textAlign="center" className={classes.box}>
              <Typography variant="body2">
                Have an account? &nbsp;
                <Link to="/signin" className={classes.link}>
                  Sign In now!
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </form>
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="Invalid email or password"
      />
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertConfirmMessageOpen}
        setOpen={setAlertConfirmMessageOpen}
        severity="error"
        message="Confirm email. Check your mailbox."
      />
    </>
  )
}

export default SignUp


