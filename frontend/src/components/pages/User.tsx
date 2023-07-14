import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserData } from "lib/api/user"
import { UserData } from "interfaces/index"
import EditButton from "components/utils/EditButton"


const User = () => {
  const [user, setUser] = useState<UserData | null>(null);

  const { id } = useParams<{ id: string }>();


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
        <img src={`${process.env.PUBLIC_URL}/images/${user.image}`} alt="" />
        <EditButton id={id || ''}/>
      </>
    }

    </>
  )
}

export default User
