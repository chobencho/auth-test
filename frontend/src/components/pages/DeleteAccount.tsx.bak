import React, { useState, useContext } from "react"
import Cookies from "js-cookie"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "App"
import { deleteAccount } from "lib/api/auth"

const DeleteAccount = () => {
  const navigate = useNavigate()
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

  const handleDeleteAccount = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm("アカウントを削除すると元の状態に戻せませんがよろしいですか？")) {

      try {
        const res = await deleteAccount()
        console.log(res)

        if (res.status === 200) {
          // サインアウト時には各Cookieを削除
          Cookies.remove("_access_token")
          Cookies.remove("_client")
          Cookies.remove("_uid")

          setIsSignedIn(false)
          navigate("/signin")

          console.log("Succeeded in delete account")
        } else {
          console.log("Failed in delete account")
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <p>アカウントを削除します</p>
      <button className="border" onClick={handleDeleteAccount}>アカウント削除</button>
    </>
  )
}

export default DeleteAccount
