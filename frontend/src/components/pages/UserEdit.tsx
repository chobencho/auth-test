import { useState, useEffect } from "react";
import { getEditUserData } from "lib/api/user";
import { getEditUserHobbyData } from "lib/api/user";
import { getEditUserInterestData } from "lib/api/user";
import { useParams } from "react-router-dom";
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import UserEditForm from "components/utils/UserEditForm";
import UserEditItem from "components/utils/UserEditItem";

const UserEdit = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userHobbyData, setUserHobbyData] = useState<UserHobbyData[]>([]);
  const [userInterestData, setUserInterestData] = useState<UserInterestData[]>(
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

  useEffect(() => {
    handleGetUserData();
    handleGetUserHobbyData();
    handleGetUserInterestData();
  }, []);

  return (
    <>
      {userData !== null && (
        <>
          <UserEditForm
            handleGetUserData={handleGetUserData}
            handleGetUserHobbyData={handleGetUserHobbyData}
            handleGetUserInterestData={handleGetUserInterestData}
            userData={userData}
            userHobbyData={userHobbyData}
            userInterestData={userInterestData}
          />
          <UserEditItem
            handleGetUserData={handleGetUserData}
            handleGetUserHobbyData={handleGetUserHobbyData}
            handleGetUserInterestData={handleGetUserInterestData}
            userData={userData}
            userHobbyData={userHobbyData}
            userInterestData={userInterestData}
          />
        </>
      )}
    </>
  );
};

export default UserEdit;
