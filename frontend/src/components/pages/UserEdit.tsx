import { useState, useEffect, useCallback } from "react"
import { getEditUserData, editUserData } from "lib/api/user"
import { useParams } from "react-router-dom"
import { UserData } from "interfaces/index"
import UserEditForm from "components/utils/UserEditForm"

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
        {userData.name}
        {userData.image?.url ?
          <img
            src={userData.image.url}
            alt="userData image"
          /> : null
        }

          <UserEditForm 
            handleGetUserData={handleGetUserData}
          />
        </>
      )}
    </>
  )
}

export default UserEdit
