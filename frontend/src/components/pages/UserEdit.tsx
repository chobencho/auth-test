import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Function
import { getEditUserData } from "lib/api/user";
import { getHobbyData } from "lib/api/user";
import { getInterestData } from "lib/api/user";
import { getResearchTagData } from "lib/api/user";
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
  const [hobbyData, setHobbyData] = useState<UserHobbyData[]>([]);
  const [interestData, setInterestData] = useState<UserInterestData[]>(
    []
  );
  const [researchTagData, setResearchTagData] = useState<UserTagData[]>(
    []
  );
  // Id
  const { id } = useParams<{ id: string }>();

  // ユーザ情報取得
  const handleGetUserData = async () => {
    getEditUserData(id).then((res) => setUserData(res.data));
  };
  // ユーザ趣味情報取得
  const handleGetHobbyData = async () => {
    getHobbyData(id).then((res) => setHobbyData(res.data));
  };
  // ユーザ興味情報取得
  const handleGetInterestData = async () => {
    getInterestData(id).then((res) => setInterestData(res.data));
  };

  // ユーザ研究タグ情報取得
  const handleGetResearchTagData = async () => {
    getResearchTagData(id).then((res) =>
      setResearchTagData(res.data)
    );
  };

  useEffect(() => {
    handleGetUserData();
    handleGetHobbyData();
    handleGetInterestData();
    handleGetResearchTagData();
  }, []);

  return (
    <>
      {userData !== null && (
        <>
          {/* ユーザ編集フォーム */}
          <UserEditForm
            handleGetUserData={handleGetUserData}
            handleGetHobbyData={handleGetHobbyData}
            handleGetInterestData={handleGetInterestData}
            handleGetResearchTagData={handleGetResearchTagData}
            userData={userData}
            userHobbyData={hobbyData}
            userInterestData={interestData}
            userResearchTagData={researchTagData}
          />
          {/* ユーザプレビュー */}
          <UserEditItem
            userData={userData}
            userHobbyData={hobbyData}
            userInterestData={interestData}
            userResearchTagData={researchTagData}
          />
        </>
      )}
    </>
  );
};

export default UserEdit;
