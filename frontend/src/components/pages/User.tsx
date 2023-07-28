import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "lib/api/user";
import { UserData } from "interfaces/index";
import UserEditButton from "components/utils/UserEditButton";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
import { getEditUserData } from "lib/api/user";
import { getEditUserHobbyData } from "lib/api/user";
import { getEditUserInterestData } from "lib/api/user";
import { getEditUserResearchTagData } from "lib/api/user";

const User = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userHobbyData, setUserHobbyData] = useState<UserHobbyData[]>([]);
  const [userInterestData, setUserInterestData] = useState<UserInterestData[]>(
    []
  );
  const [userResearchTagData, setUserResearchTagData] = useState<UserTagData[]>(
    []
  );

  // 閲覧先のユーザIDを取得
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
      {userData && (
        <>
          <p className="border m-2 p-2">ID:{userData.id}</p>
          <p className="border m-2 p-2">名前:{userData.name}</p>
          <p className="whitespace-pre-wrap border m-2 p-2">
            紹介文:{userData.body}
          </p>
          <p className="border m-2 p-2">年齢:{userData.age}</p>
          <p className="border m-2 p-2">性別:{userData.genderCode}</p>
          <p className="border m-2 p-2">学年:{userData.gradeCode}</p>
          <p className="border m-2 p-2">専攻分野:{userData.subjectCode}</p>
          <p className="m-2">研究キーワード:</p>
          <div className="flex border m-2 p-2">
            {userResearchTagData.map((tag) => (
              <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
                {tag.tagName}
              </p>
            ))}
          </div>
          <br />
          {userData.image?.url ? (
            <img
              src={userData.image.url}
              alt="userData image"
              className="w-1/3 border m-2 p-2"
            />
          ) : null}
          <p className="m-2">趣味:</p>
          <div className="flex border m-2 p-2">
            {userHobbyData.map((hobby) => (
              <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
                {hobby.hobbyCode}
              </p>
            ))}
          </div>
          <p className="m-2">興味分野:</p>
          <div className="flex border m-2 p-2">
            {userInterestData.map((interest) => (
              <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
                {interest.interestCode}
              </p>
            ))}
          </div>
          <UserEditButton userId={id || ""} />
        </>
      )}
    </>
  );
};

export default User;
