import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserData } from "lib/api/user"
import { UserData } from "interfaces/index"
import UserEditButton from "components/utils/UserEditButton"


const User = () => {
  const [user, setUser] = useState<UserData | null>(null)
  // 閲覧先のユーザIDを取得
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const f = async () => {
      getUserData(id).then((res) => setUser(res.data))
    };
    f();
  }, []);

  return (
    <>
      {user &&
        <>
          <p>ID:{user.id}</p>
          <p>名前:{user.name}</p>
          <p className="whitespace-pre-wrap">紹介文:{user.body}</p>
          <p>年齢:{user.age}</p>
          <p>性別:{user.genderCode}</p>
          <p>学年:{user.gradeCode}</p>
          <p>専攻分野:{user.subjectCode}</p>
          <p>研究キーワード:</p>
          <p>タグ1</p>
          <p>タグ2</p>
          <p>タグ3</p>
          <p>興味分野:</p>
          <p>{user.interestId_1}</p>
          <p>{user.interestId_2}</p>
          <p>{user.interestId_3}</p>
          <p>趣味:</p>
          <p>{user.hobbyId_1}</p>
          <p>{user.hobbyId_2}</p>
          <p>{user.hobbyId_3}</p>
          <p>{user.hobbyId_4}</p>
          <p>{user.hobbyId_5}</p>

          {user.image?.url ?
            <img
              src={user.image.url}
              alt="userData image"
              className="w-1/3"
            /> : null
          }
          <UserEditButton userId={id || ''} />
        </>
      }
    </>
  )
}

export default User
