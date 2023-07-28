import { useState, useEffect } from "react";
import { getEditUserData } from "lib/api/user";
import { getEditUserHobbyData } from "lib/api/user";
import { getEditUserInterestData } from "lib/api/user";
import { useParams } from "react-router-dom";
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import UserEditForm from "components/utils/UserEditForm";
import UserEditItem from "components/utils/UserEditItem";
import { getEditUserResearchTagData } from "lib/api/user";

const UserEdit = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userHobbyData, setUserHobbyData] = useState<UserHobbyData[]>([]);
  const [userInterestData, setUserInterestData] = useState<UserInterestData[]>(
    []
  );
  const [userResearchTagData, setUserResearchTagData] = useState<UserTagData[]>(
    []
  );

  const { id } = useParams<{ id: string }>();

  const handleGetUserData = async () => {
    getEditUserData(id).then((res) => setUserData(res.data));
  };

  const handleGetUserHobbyData = async () => {
    getEditUserHobbyData(id).then((res) => setUserHobbyData(res.data));
  };

  const handleGetUserInterestData = async () => {
    getEditUserInterestData(id).then((res) => setUserInterestData(res.data));
  };

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
