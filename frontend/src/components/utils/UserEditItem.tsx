import React from "react";
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";

interface UserEditItemProps {
  handleGetUserData: Function;
  handleGetUserHobbyData: Function;
  handleGetUserInterestData: Function;
  userData: UserData;
  userHobbyData: UserHobbyData[];
  userInterestData: UserInterestData[];
}

const UserEditItem = ({
  userData,
  handleGetUserData,
  handleGetUserHobbyData,
  handleGetUserInterestData,
  userHobbyData,
  userInterestData,
}: UserEditItemProps) => {
  return (
    <>
      <p>名前:{userData.name}</p>
      <p>
        画像:
        {userData.image?.url ? (
          <img
            src={userData.image.url}
            alt="userData image"
            className="w-1/2"
          />
        ) : null}
      </p>
      <p
        // className→whitespace-pre-wrapで改行している
        className="whitespace-pre-wrap"
      >
        紹介文:{userData.body}
      </p>
      <p>年齢:{userData.age}</p>
      <p>性別:{userData.genderCode}</p>
      <p>学年:{userData.gradeCode}</p>
      <p>居住地:{userData.prefectureCode}</p>
      <p>専攻:{userData.subjectCode}</p>
      <div className="flex">
        {userHobbyData.map((hobby) => (
          <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
            {hobby.hobbyCode}
          </p>
        ))}
      </div>
      <div className="flex">
        {userInterestData.map((interest) => (
          <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
            {interest.interestCode}
          </p>
        ))}
      </div>
    </>
  );
};

export default UserEditItem;
