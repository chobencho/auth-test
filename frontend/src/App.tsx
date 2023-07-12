import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import CommonLayout from "components/layouts/CommonLayout"
import Home from "components/pages/Home"
import SignUp from "components/pages/SignUp"
import SignIn from "components/pages/SignIn"
import Board from "components/pages/Board"
import BoardCreate from "components/pages/BoardCreate"
import BoardEdit from "components/pages/BoardEdit"
import Boards from "components/pages/Boards"
import ChangePassword from "components/pages/ChangePassword"
import DeleteAccount from "components/pages/DeleteAccount"
import Info from "components/pages/Info"
import Information from "components/pages/Information"
import Inquiry from "components/pages/Inquiry"
import Message from "components/pages/Message"
import Messages from "components/pages/Messages"
import MyBoard from "components/pages/MyBoard"
import MyFav from "components/pages/MyFav"
import MyPage from "components/pages/MyPage"
import PrivacyPolicy from "components/pages/PrivacyPolicy"
import SearchBoard from "components/pages/SearchBoard"
import SearchUser from "components/pages/SearchUser"
import Setting from "components/pages/Setting"
import Terms from "components/pages/Terms"
import User from "components/pages/User"
import UserEdit from "components/pages/UserEdit"
import Verification from "components/pages/Verification"

import { getCurrentUser } from "lib/api/auth"
import { UserData } from "interfaces/index"

// グローバルで扱う変数・関数
export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: UserData | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<UserData | undefined>>
})

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<UserData | undefined>()

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])


  // ユーザーが認証済みかどうかでルーティングを決定
  // 未認証だった場合は「/signin」ページに促す
  const Private = ({ children }: { children: React.ReactElement }) => {
    if (!loading) {
      if (isSignedIn) {
        return children
      } else {
        return <Navigate to="/signin" />
      }
    } else {
      return <></>
    }
  }

  return (
    <Router>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser}}>
        <CommonLayout>
          <Routes>
            <Route  path="/signup" element={<SignUp/>} />
            <Route  path="/signin" element={<SignIn/>} />
              <Route
                path="/"
                element={
                  <Private>
                    <Home/>
                  </Private>
              }/>
              <Route
                path="/boards"
                element={
                  <Private>
                    <Boards/>
                  </Private>
              }/>
              <Route
                path="/boardCreate"
                element={
                  <Private>
                    <BoardCreate/>
                  </Private>
              }/>
              <Route
                path="/board/:id/edit"
                element={
                  <Private>
                    <BoardEdit/>
                  </Private>
              }/>
              <Route
                path="/board/:id"
                element={
                  <Private>
                    <Board/>
                  </Private>
              }/>
              <Route
                path="/changePassword"
                element={
                  <Private>
                    <ChangePassword/>
                  </Private>
              }/>
              <Route
                path="/deleteAccount"
                element={
                  <Private>
                    <DeleteAccount/>
                  </Private>
              }/>
              <Route
                path="/info/:id"
                element={
                  <Private>
                    <Info/>
                  </Private>
              }/>
              <Route
                path="/information"
                element={
                  <Private>
                    <Information/>
                  </Private>
              }/>
              <Route
                path="/inquiry"
                element={
                  <Private>
                    <Inquiry/>
                  </Private>
              }/>
              <Route
                path="/message"
                element={
                  <Private>
                    <Message/>
                  </Private>
              }/>
              <Route
                path="/messages"
                element={
                  <Private>
                    <Messages/>
                  </Private>
              }/>
              <Route
                path="/myBoard/:id"
                element={
                  <Private>
                    <MyBoard/>
                  </Private>
              }/>
              <Route
                path="/myFav"
                element={
                  <Private>
                    <MyFav/>
                  </Private>
              }/>
              <Route
                path="/myPage/:id"
                element={
                  <Private>
                    <MyPage/>
                  </Private>
              }/>
              <Route
                path="/privacyPolicy"
                element={
                  <Private>
                    <PrivacyPolicy/>
                  </Private>
              }/>
              <Route
                path="/searchBoard"
                element={
                  <Private>
                    <SearchBoard/>
                  </Private>
              }/>
              <Route
                path="/searchUser"
                element={
                  <Private>
                    <SearchUser/>
                  </Private>
              }/>
              <Route
                path="/setting"
                element={
                  <Private>
                    <Setting/>
                  </Private>
              }/>
              <Route
                path="/terms"
                element={
                  <Private>
                    <Terms/>
                  </Private>
              }/>
              <Route
                path="/user/:id"
                element={
                  <Private>
                    <User/>
                  </Private>
              }/>
              <Route
                path="/user/:id/edit"
                element={
                  <Private>
                    <UserEdit/>
                  </Private>
              }/>
              <Route
                path="/verification"
                element={
                  <Private>
                    <Verification/>
                  </Private>
              }/>
          </Routes>
        </CommonLayout>
      </AuthContext.Provider>
    </Router>
  )
}

export default App
