import { useState, useEffect } from "react"
import { getEditUserData } from "lib/api/user"
import { useParams } from "react-router-dom"
import { UserData } from "interfaces/index"
import UserEditForm from "components/utils/UserEditForm"
import UserEditItem from "components/utils/UserEditItem"

const UserEdit = () => {
  const [userData, setUserData] = useState<UserData | null>(null)
  const { id } = useParams<{ id: string }>();

  const handleGetUserData = async () => {
    getEditUserData(id).then((res) => setUserData(res.data))
  }

  useEffect(() => {
    handleGetUserData()
  }, [])

  return (
    <>


      {userData !== null && (
        <>
          <UserEditForm
            handleGetUserData={handleGetUserData}
            userData={userData}
          />
          <UserEditItem
            handleGetUserData={handleGetUserData}
            userData={userData}
          />
        </>
      )}
    </>
  )
}

export default UserEdit
