import { useEffect, useState, useContext } from "react";
import { AuthContext } from "App"
import { useParams } from "react-router-dom";
// Function
import { getEditUserData } from "lib/api/user";
import { getEditUserHobbyData } from "lib/api/user";
import { getEditUserInterestData } from "lib/api/user";
import { getEditUserResearchTagData } from "lib/api/user";
// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";
// Components
import UserEditButton from "components/utils/user/UserEditButton";

const User = () => {
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
  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

  // 閲覧先のユーザIDを取得
  const { id } = useParams<{ id: string }>();

  // ユーザ情報を取得
  const handleGetUserData = async () => {
    getEditUserData(id).then((res) => setUserData(res.data));
  };
  // ユーザ趣味情報を取得
  const handleGetUserHobbyData = async () => {
    getEditUserHobbyData(id).then((res) => setUserHobbyData(res.data));
  };
  // ユーザ興味情報を取得
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
          <UserEditButton userId={id || ""} myId={stringMyId || ""} />
        </>
      )}
    </>
  );
};

export default User;
