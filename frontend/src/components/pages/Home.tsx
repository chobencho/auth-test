import React, { useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "App";
import { getUsers } from "lib/api/user";
import { UserData } from "interfaces/index";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import UsersItem from "components/utils/UsersItem";
import SearchButton from "components/utils/SearchButton";

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
  const [researchKeyword, setResearchKeyword] = useState<string>("");
  const [body, setBody] = useState<string>("");
  // Style
  const classes = useStyles();
  // Id
  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

  // 検索条件に合ったユーザを取得
  const handleGetSearchUsers = async () => {
    // getMessages(id, chatPartnerId).then((res) => setMessages(res.data));
  };

  //  researchKeywordを設定するコールバック関数
  const handleSetResearchKeyword = useCallback((newResearchKeyword: any) => {
    setResearchKeyword(newResearchKeyword);
  }, []);

  const handleSetBody = useCallback((newBody: any) => {
    setBody(newBody);
  }, []);

  const handleGetUsersData = async () => {
    getUsers(stringMyId, researchKeyword).then((res) => setUsers(res.data));
    setResearchKeyword("");
  };

  useEffect(() => {
    handleGetUsersData();
  }, []);

  return (
    <>
      <Box className={classes.flexbox}>
        <SearchButton
          handleGetUsersData={handleGetUsersData}
          stringMyId={stringMyId ?? ""}
          handleSetResearchKeyword={handleSetResearchKeyword}
          handleSetBody={handleSetBody}
        />

        <UsersItem handleGetUsersData={handleGetUsersData} users={users} />
      </Box>
    </>
  );
};

export default Home;
