import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Function
import { getEditUserData } from "lib/api/user";
import { getEditUserHobbyData } from "lib/api/user";
import { getEditUserInterestData } from "lib/api/user";
import { getEditUserResearchTagData } from "lib/api/user";
// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
// Components
import UserEditForm from "components/utils/user/UserEditForm";
import UserEditItem from "components/utils/user/UserEditItem";


const UserEdit = () => {
  // State
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userHobbyData, setUserHobbyData] = useState<UserHobbyData[]>([]);
  const [userInterestData, setUserInterestData] = useState<UserInterestData[]>(
    []
  );
  const [userResearchTagData, setUserResearchTagData] = useState<UserTagData[]>(
    []
  );
  // Id
  const { id } = useParams<{ id: string }>();

  // ユーザ情報取得
  const handleGetUserData = async () => {
    getEditUserData(id).then((res) => setUserData(res.data));
  };
  // ユーザ趣味情報取得
  const handleGetUserHobbyData = async () => {
    getEditUserHobbyData(id).then((res) => setUserHobbyData(res.data));
  };
  // ユーザ興味情報取得
  const handleGetUserInterestData = async () => {
    getEditUserInterestData(id).then((res) => setUserInterestData(res.data));
  };

  // ユーザ研究タグ情報取得
  const handleGetUserResearchTagData = async () => {
    getEditUserResearchTagData(id).then((res) =>
      setUserResearchTagData(res.data)
    );
  };

  useEffect(() => {
    handleGetUserData();
    handleGetUserHobbyData();
    handleGetUserInterestData();
    handleGetUserResearchTagData();
  }, []);

  return (
    <>
      {userData !== null && (
        <>
          {/* ユーザ編集フォーム */}
          <UserEditForm
            handleGetUserData={handleGetUserData}
            handleGetUserHobbyData={handleGetUserHobbyData}
            handleGetUserInterestData={handleGetUserInterestData}
            handleGetUserResearchTagData={handleGetUserResearchTagData}
            userData={userData}
            userHobbyData={userHobbyData}
            userInterestData={userInterestData}
            userResearchTagData={userResearchTagData}
          />
          {/* ユーザプレビュー */}
          <UserEditItem
            userData={userData}
            userHobbyData={userHobbyData}
            userInterestData={userInterestData}
            userResearchTagData={userResearchTagData}
          />
        </>
      )}
    </>
  );
};

export default UserEdit;
