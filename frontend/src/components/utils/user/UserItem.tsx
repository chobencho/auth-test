// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";

export interface UserItemProps {
  userData: UserData;
  hobbyData: UserHobbyData[];
  interestData: UserInterestData[];
  researchTagData: UserTagData[];
}

const useStyles = makeStyles((theme: Theme) => ({
  name: {
    textAlign: "center",
    position: "relative",
    top: 5,
    fontWeight: 600,
    fontSize: "18px",
  },
  login: {
    fontSize: "10px",
    position: "absolute",
    top: 60,
    right: 10,
  },
  circle: {
    color: "lightgreen",
    fontSize: "14px",
  },
  table: {
    borderCollapse: "separate",
    borderSpacing: "0 8px", // Adjust the spacing as needed
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
}));

const UserItem = ({
  userData,
  hobbyData,
  interestData,
  researchTagData,
}: UserItemProps) => {
  //Style
  const classes = useStyles();

  return (
    <>
      <Typography variant="body1" className={`${classes.login}`}>
        <span className={`${classes.circle}`}>●</span>ログイン中
      </Typography>
      <Paper elevation={0}>
        {userData.image?.url ? (
          <img
            src={userData.image.url}
            alt="userData image"
            className="w-full"
          />
        ) : null}
      </Paper>
      <Typography variant="body1" className={`${classes.name}`}>
        {userData.name}
      </Typography>

      <TableContainer
        className="w-1/2"
        style={{ width: "96%", margin: "auto" }}
      >
        <Table>
          <TableBody>
            <TableRow className={`${classes.tableRow}`}>
              <TableCell style={{ borderBottom: "none" }}>自己紹介</TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                {userData.body}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderBottom: "none" }}>年齢</TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                {userData.age}歳
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderBottom: "none" }}>学年</TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                {userData.gradeCode}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderBottom: "none" }}>性別</TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                {userData.genderCode}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderBottom: "none" }}>専攻分野</TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                {userData.subjectCode}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderBottom: "none" }}>居住地</TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                {userData.prefectureCode}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderBottom: "none" }}>出身地</TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                {userData.prefectureCode}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <p className="border m-2 p-2">ID:{userData.id}</p>
      <p className="whitespace-pre-wrap border m-2 p-2">
        紹介文:{userData.body}
      </p>
      <p className="border m-2 p-2">年齢:{userData.age}</p>
      <p className="border m-2 p-2">性別:{userData.genderCode}</p>
      <p className="border m-2 p-2">学年:{userData.gradeCode}</p>
      <p className="border m-2 p-2">専攻分野:{userData.subjectCode}</p>
      <p className="m-2">研究キーワード:</p>
      <div className="flex border m-2 p-2">
        {researchTagData.map((tag) => (
          <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
            {tag.tagName}
          </p>
        ))}
      </div>
      <br />
      <p className="m-2">趣味:</p>
      <div className="flex border m-2 p-2">
        {hobbyData.map((hobby) => (
          <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
            {hobby.hobbyCode}
          </p>
        ))}
      </div>
      <p className="m-2">興味分野:</p>
      <div className="flex border m-2 p-2">
        {interestData.map((interest) => (
          <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
            {interest.interestCode}
          </p>
        ))}
      </div>
    </>
  );
};

export default UserItem;
