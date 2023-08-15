// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import Hobby from "common/hobby";
import Interest from "common/interest";
// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";

import LikeUserButton from "components/utils/user/LikeUserButton";

import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

export interface UserItemProps {
  myId: string | undefined;
  userId: string | undefined;
  userData: UserData;
  hobbyData: UserHobbyData[];
  interestData: UserInterestData[];
  researchTagData: UserTagData[];
}

const useStyles = makeStyles((theme: Theme) => ({
  tr: {
    display: "block",
    borderBottom: "1px solid #eee",
    margin: "10px 0 0",
    paddingBottom: "5px",
  },
  trLeft: {
    fontSize: "14px",
    fontWeight: 600,
    width: "80px",
  },
  trRight: {
    fontSize: "14px",
    whiteSpace: "pre-wrap",
  },
  userImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
}));

const UserItem = ({
  myId,
  userId,
  userData,
  hobbyData,
  interestData,
  researchTagData,
}: UserItemProps) => {
  //Style
  const classes = useStyles();

  const lastLoginTime = moment(userData.lastLogin);
  const currentTime = moment();
  const timeDifference = currentTime.diff(lastLoginTime, "minutes");

  return (
    <>
      <p className="absolute top-16 right-3">
        {timeDifference <= 10 ? (
          <>
            <span className={`text-green-300 `}>●</span>
            ログイン中
          </>
        ) : timeDifference <= 1440 ? (
          <>
            <span className={`text-yellow-300 `}>●</span>
            24時間以内
          </>
        ) : (
          <>
            <span className={`text-gray-300 `}>●</span>
            3日以上
          </>
        )}
      </p>
      {userData.image?.url ? (
        <img
          src={userData.image.url}
          alt="userData image"
          className={`${classes.userImage}`}
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/images/no-image.jpg`}
          alt="boardData image"
          className={`${classes.userImage}`}
        />
      )}
      <div className="w-96 m-auto">
        <div className="relative">
          <LikeUserButton myId={myId} userId={userId} />
        </div>

        <p className="text-center m-1 text-lg font-semibold">{userData.name}</p>

        <table className="w-full">
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>自己紹介</td>
            <td className={`${classes.trRight}`}>{userData.body}</td>
          </tr>
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>年齢</td>
            <td className={`${classes.trRight}`}>{userData.age}歳</td>
          </tr>
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>学年</td>
            <td className={`${classes.trRight}`}>{userData.gradeCode}</td>
          </tr>
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>性別</td>
            <td className={`${classes.trRight}`}>{userData.genderCode}</td>
          </tr>
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>専攻分野</td>
            <td className={`${classes.trRight}`}>{userData.subjectCode}</td>
          </tr>
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>居住地</td>
            <td className={`${classes.trRight}`}>{userData.prefectureCode}</td>
          </tr>
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>出身地</td>
            <td className={`${classes.trRight}`}>{userData.birthplaceCode}</td>
          </tr>
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>研究タグ</td>
            <td className={`${classes.trRight}`}>
              <div className="flex flex-wrap">
                {researchTagData.map((tag) => (
                  <p
                    key={tag.id}
                    className="bg-blue-base rounded-3xl text-white py-1 px-3 mr-1 mb-1"
                  >
                    {tag.tagName}
                  </p>
                ))}
              </div>
            </td>
          </tr>
          <tr className={`${classes.tr}`}>
            <td className={`${classes.trLeft}`}>趣味</td>
            <td className={`${classes.trRight}`}></td>
            <div className="flex flex-wrap">
              {hobbyData.map((hobby) => {
                const hobbyOption = Hobby.HOB_OPTIONS.find(
                  (option) => option[0] === hobby.hobbyId
                );
                if (hobbyOption) {
                  const [, hobbyName, hobbyImage] = hobbyOption;
                  return (
                    <div key={hobby.hobbyId} className="w-1/5 p-1 relative">
                      <div className="relative">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/hobby/${hobbyImage}`}
                          className="w-full h-auto rounded image-dark"
                        />
                        <span className="absolute bottom-4 left-0 right-0 text-white text-sm text-center py-1">
                          {hobbyName}
                        </span>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </tr>
          <tr className="mt-1 pb-1 block">
            <td className={`${classes.trLeft}`}>興味分野</td>
            <td className={`${classes.trRight}`}></td>
            <div className="flex flex-wrap">
              {interestData.map((interest) => {
                const interestOption = Interest.INT_OPTIONS.find(
                  (option) => option[0] === interest.interestId
                );
                if (interestOption) {
                  const [, interestName, interestImage] = interestOption;
                  return (
                    <div
                      key={interest.interestId}
                      className="w-1/5 p-1 relative"
                    >
                      <div className="relative">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/interest/${interestImage}`}
                          className="w-full h-auto rounded image-dark"
                        />
                        <span className="absolute bottom-4 left-0 right-0 text-white text-sm text-center py-1">
                          {interestName}
                        </span>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </tr>
        </table>
      </div>
    </>
  );
};

export default UserItem;
