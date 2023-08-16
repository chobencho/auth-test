// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";

import LikeButton from "views/components/modules/common/LikeButton";
import TableTr from "views/components/block/TableTr";
import JudgeLogin from "views/components/block/JudgeLogin";
import UserImage from "views/components/block/UserImage";

import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

export interface UserItemProps {
  myId: string | undefined;
  userId: string | undefined;
  handleGetUserData: Function;
  userData: UserData;
  hobbyData: UserHobbyData[];
  interestData: UserInterestData[];
  researchTagData: UserTagData[];
}

const UserItem = ({
  myId,
  userId,
  handleGetUserData,
  userData,
  hobbyData,
  interestData,
  researchTagData,
}: UserItemProps) => {
  const lastLoginTime = moment(userData.lastLogin);
  const currentTime = moment();
  const timeDifference = currentTime.diff(lastLoginTime, "minutes");

  let stateLogin = "";
  let iconColor = "";

  if (timeDifference <= 10) {
    stateLogin = "ログイン中";
    iconColor = "text-green-300";
  } else if (timeDifference <= 1440) {
    stateLogin = "24時間以内";
    iconColor = "text-yellow-300";
  } else {
    stateLogin = "3日以上";
    iconColor = "text-gray-300";
  }

  return (
    <>
      <JudgeLogin stateLogin={stateLogin} iconColor={iconColor} />

      <UserImage generalData={userData} />

      <div className="w-96 m-auto">
        <div className="relative">
          <LikeButton
            myId={myId}
            generalId={userId}
            generalData={userData}
            handleData={handleGetUserData}
          />
        </div>

        <p className="text-center m-1 text-lg font-semibold">{userData.name}</p>

        <table className="w-full">
          <TableTr trTitle={"自己紹介"} trData={userData.body} />
          <TableTr trTitle={"年齢"} trData={userData.age.toString()} />
          <TableTr trTitle={"学年"} trData={userData.gradeCode} />
          <TableTr trTitle={"性別"} trData={userData.genderCode} />
          <TableTr trTitle={"専攻分野"} trData={userData.subjectCode} />
          <TableTr trTitle={"居住地"} trData={userData.prefectureCode} />
          <TableTr trTitle={"出身地"} trData={userData.birthplaceCode} />
          <TableTr trTitle={"研究タグ"} trData={researchTagData} />
          <TableTr trTitle={"趣味"} trData={hobbyData} />
          <TableTr trTitle={"興味分野"} trData={interestData} />
        </table>
      </div>
    </>
  );
};

export default UserItem;
