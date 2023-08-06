// Interface
import { UserData } from "interfaces/index";
import { UserHobbyData } from "interfaces/index";
import { UserInterestData } from "interfaces/index";
import { UserTagData } from "interfaces/index";

export interface UserItemProps {
  userData: UserData;
  hobbyData: UserHobbyData[];
  interestData: UserInterestData[];
  researchTagData: UserTagData[];
}
const UserItem = ({ userData, hobbyData, interestData, researchTagData }: UserItemProps) => {
  return (
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
        {researchTagData.map((tag) => (
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
        {hobbyData.map((hobby) => (
          <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
            {hobby.hobbyCode}
          </p>
        ))}
      </div>
      <p className="m-2">興味分野:</p>
      <div className="flex border m-2 p-2">
        {interestData.map((interest) => (
          <p className="border bg-yellow-200 rounded py-1 px-2 m-1">
            {interest.interestCode}
          </p>
        ))}
      </div>
    </>
  )
}

export default UserItem
