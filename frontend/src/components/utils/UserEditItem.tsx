import React from 'react'
import { UserData } from "interfaces/index"

interface UserEditItemProps {
  handleGetUserData: Function
  userData: UserData
}

const UserEditItem = ({ userData, handleGetUserData }: UserEditItemProps) => {

  return (
    <>
      <p>名前:{userData.name}</p>
      <p>画像:
        {userData.image?.url ?
          <img
            src={userData.image.url}
            alt="userData image"
            className="w-1/2"
          /> : null
        }
      </p>
      <p 
        // className→whitespace-pre-wrapで改行している
        className="whitespace-pre-wrap"
      >
        紹介文:{userData.body}
      </p>
      <p>年齢:{userData.age}</p>
    </>
  )
}

export default UserEditItem
