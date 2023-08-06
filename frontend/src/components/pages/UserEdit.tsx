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
  const [interestData, setInterestData] = useState<UserInterestData[]>([]);
  const [researchTagData, setResearchTagData] = useState<UserTagData[]>([]);
  // Id
  const { id } = useParams<{ id: string }>();

  // ユーザ情報取得
  const handleGetUserData = async () => {
    // Promise.allを使ってすべての非同期処理が完了するのを待つ
    const [userDataRes, hobbyDataRes, interestDataRes, researchTagDataRes] = await Promise.all([
      getEditUserData(id),
      getHobbyData(id),
      getInterestData(id),
      getResearchTagData(id),
    ]);

    setUserData(userDataRes.data);
    setHobbyData(hobbyDataRes.data);
    setInterestData(interestDataRes.data);
    setResearchTagData(researchTagDataRes.data);
  };

  useEffect(() => {
    // 初回のみデータを取得するようにする
    if (userData === null) {
      handleGetUserData();
    }
  }, [userData]);

  return (
    <>
      {userData !== null && (
        <>
          {/* ユーザ編集フォーム */}
          <UserEditForm
            handleGetUserData={handleGetUserData}
            userData={userData}
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

