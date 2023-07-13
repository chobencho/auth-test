import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "App"

import { getUsers } from "lib/api/user"
import { UserData } from "interfaces/index"

// とりあえず認証済みユーザーの名前やメールアドレスを表示
const Home = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext)
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const f = async () => {
      getUsers().then((res) => setUsers(res.data))
    };
    f();
}, []);

  return (
    <>
      {users?.map((user) => (
        <p key={user.id}>{user.id}</p>
      ))}
    </>
  )
}

export default Home
