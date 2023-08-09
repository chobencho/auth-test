import { Link } from "react-router-dom";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// Interface
import { UserData } from "interfaces/index";

interface UsersProps {
  handleGetUsersData: Function;
  user: UserData;
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    textAlign: "center",
  },
  cardContainer: {
    width: "50%",
    padding: "1%",
  },
  card: {
    width: "100%",
    border: "0.1px solid #eee",
  },
  box: {
    width: "50%",
    border: "1px solid #000",
  },
  cardContent: {
    padding: "5px",
  },
  flexbox: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  squareImageContainer: {
    width: "100%",
    paddingTop: "100%", // 1:1のアスペクト比を設定
    position: "relative",
  },
  squareImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover", // 画像をコンテナに収める
    borderBottom: "0.5px solid #eee",
  },
  name: {
    fontSize: "14px",
    fontWeight: 600,
  },
  login: {
    fontSize: "10px",
  },
  circle: {
    color: "lightgreen",
    fontSize: "14px",
  },
  age: {
    fontSize: "12px",
  },
}));

const UsersItem = ({ user }: UsersProps) => {
  //Style
  const classes = useStyles();

  return (
    <>
      <Link to={`/user/${user.id}`} className={`${classes.cardContainer}`}>
        <Card className={classes.card}>
          {user.image?.url ? (
            <Box className={classes.squareImageContainer}>
              <CardMedia
                component="img"
                src={user.image.url}
                alt="user image"
                className={classes.squareImage}
              />
            </Box>
          ) : null}

          <CardContent className={classes.cardContent}>
            <Box className={`${classes.flexbox}`}>
              <Typography variant="body1" className={`${classes.name}`}>
                {user.name}
              </Typography>
              <Typography variant="body1" className={`${classes.login}`}>
                <span className={`${classes.circle}`}>●</span>ログイン中
              </Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography variant="body1" className={`${classes.age}`}>
                {user.age}歳 {user.prefectureCode}
              </Typography>
              <Typography variant="body1" className={`${classes.age}`}>
                {user.subjectCode}専攻
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default UsersItem;
