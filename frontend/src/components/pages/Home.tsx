import { useEffect, useState, useContext } from "react";
import { AuthContext } from "App";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// Function
import { getUsers } from "lib/api/user";
// Interface
import { UserData } from "interfaces/index";
// Components
import UsersItem from "components/utils/home/UsersItem";
import SearchButton from "components/utils/home/SearchButton";

const useStyles = makeStyles((theme: Theme) => ({
  flexbox: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
}));

const Home = () => {
  // State
  const [users, setUsers] = useState<UserData[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  // Style
  const classes = useStyles();
  // Id
  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

  // ユーザ情報を取得
  const handleGetUsersData = async (tags: string[]) => {
    getUsers(stringMyId, tags).then((res) => setUsers(res.data));
  };

  useEffect(() => {
    handleGetUsersData(tags);
  }, []);

  return (
    <>
      <Box className={classes.flexbox}>
        {/* 検索ボタン */}
        <SearchButton
          handleGetUsersData={handleGetUsersData}
          stringMyId={stringMyId ?? ""}
          tags={tags}
        />
        {/* ユーザ情報表示 */}
        <UsersItem handleGetUsersData={handleGetUsersData} users={users} />
      </Box>
    </>
  );
};

export default Home;
