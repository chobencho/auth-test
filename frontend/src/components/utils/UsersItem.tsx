import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { UserData } from "interfaces/index";

interface UsersProps {
  handleGetUsersData: Function;
  users: UserData[];
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    textAlign: "center",
  },
  card: {
    width: "300px",
    margin: "5px",
    border: "0.1px solid #eee",
  },
  box: {
    margin: "10px",
    width: "50%",
    border: "1px solid #000",
  },
  cardContent: {
    padding: "0px",
  },
  flexbox: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
}));

const UsersItem = ({ handleGetUsersData, users }: UsersProps) => {
  //Style
  const classes = useStyles();

  return (
    <>
      {users.map((user) => (
        <Link to={`/user/${user.id}`}>
          <Card className={classes.card}>
            {user.image?.url ? (
              <CardMedia
                component="img"
                src={user.image.url}
                alt="user image"
                className={classes.image}
              />
            ) : null}

            <CardContent className={classes.cardContent}>
              <Typography variant="body2">{user.name}</Typography>
              <Typography variant="body2">
                {user.name} / {user.subjectCode}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default UsersItem;
