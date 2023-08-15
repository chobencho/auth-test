import React, { useState, useEffect, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import CommonLayout from "components/layouts/CommonLayout";
import Home from "components/pages/Home";
import SignUp from "components/pages/SignUp";
import SignIn from "components/pages/SignIn";
import ResetPassword from "components/pages/PasswordResetForm";
import Board from "components/pages/Board";
import Boards from "components/pages/Boards";
import BoardCreate from "components/pages/BoardCreate";
import BoardEdit from "components/pages/BoardEdit";
import Communities from "components/pages/Communities";
import Community from "components/pages/Community";
import Messages from "components/pages/Messages";
import Message from "components/pages/Message";
import User from "components/pages/User";
import MyPage from "components/pages/MyPage";
import MyFav from "components/pages/MyFav";
import MyBoard from "components/pages/MyBoard";
import Setting from "components/pages/Setting";
import DeleteAccount from "components/pages/DeleteAccount";
import Info from "components/pages/Info";
import Information from "components/pages/Information";

import { getCurrentUser } from "lib/api/auth";
import { checkAge } from "lib/api/common";
import { UserData } from "interfaces/index";
import ChangePassword from "components/pages/ChangePassword";
import Terms from "components/pages/Terms";
import PrivacyPolicy from "components/pages/PrivacyPolicy";
import Verification from "components/pages/Verification";
import UserEdit from "components/pages/UserEdit";

import { updateLastLogin } from "lib/api/auth";

export const AuthContext = createContext(
  {} as {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: UserData | undefined;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserData | undefined>>;
    verifiedAge: boolean;
  }
);

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserData | undefined>();
  const [verifiedAge, setVerifiedAge] = useState<boolean>(false);

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);

        console.log(res?.data.data);
      } else {
        console.log("No current user");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleCheckAge = () => {
    if (currentUser !== undefined) {
      const stringMyId = currentUser.id.toString();
      checkAge(stringMyId).then((res) => setVerifiedAge(res.data));
    }
  };

  const handleUpdateLastLogin = () => {
    if (currentUser !== undefined) {
      const stringMyId = currentUser.id.toString();
      updateLastLogin(stringMyId);
    }
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser]);

  useEffect(() => {
    handleCheckAge();
  }, [currentUser]);

  useEffect(() => {
    handleUpdateLastLogin();
  }, [currentUser]);

  const Private = ({ children }: { children: React.ReactElement }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Navigate to="/signin" />;
      }
    } else {
      return <></>;
    }
  };

  return (
    <Router>
      <AuthContext.Provider
        value={{
          loading,
          setLoading,
          isSignedIn,
          setIsSignedIn,
          currentUser,
          setCurrentUser,
          verifiedAge,
        }}
      >
        <CommonLayout>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route
              path="/"
              element={
                <Private>
                  <Home />
                </Private>
              }
            />
            <Route
              path="/boards"
              element={
                <Private>
                  <Boards />
                </Private>
              }
            />
            <Route
              path="/board/:id"
              element={
                <Private>
                  <Board />
                </Private>
              }
            />
            <Route
              path="/boardCreate"
              element={
                <Private>
                  <BoardCreate />
                </Private>
              }
            />
            <Route
              path="/board/:id/edit"
              element={
                <Private>
                  <BoardEdit />
                </Private>
              }
            />
            <Route
              path="/communities"
              element={
                <Private>
                  <Communities />
                </Private>
              }
            />
            <Route
              path="/community/:id"
              element={
                <Private>
                  <Community />
                </Private>
              }
            />

            <Route
              path="/messages"
              element={
                <Private>
                  <Messages />
                </Private>
              }
            />
            <Route
              path="/message/:id"
              element={
                <Private>
                  <Message />
                </Private>
              }
            />
            <Route
              path="/user/:id"
              element={
                <Private>
                  <User />
                </Private>
              }
            />
            <Route
              path="/user/:id/edit"
              element={
                <Private>
                  <UserEdit />
                </Private>
              }
            />
            <Route
              path="/myBoard/:id"
              element={
                <Private>
                  <MyBoard />
                </Private>
              }
            />
            <Route
              path="/mypage/:id"
              element={
                <Private>
                  <MyPage />
                </Private>
              }
            />
            <Route
              path="/myFav"
              element={
                <Private>
                  <MyFav />
                </Private>
              }
            />
            <Route
              path="/setting"
              element={
                <Private>
                  <Setting />
                </Private>
              }
            />
            <Route
              path="/deleteAccount"
              element={
                <Private>
                  <DeleteAccount />
                </Private>
              }
            />
            <Route
              path="/information"
              element={
                <Private>
                  <Information />
                </Private>
              }
            />
            <Route
              path="/info/:id"
              element={
                <Private>
                  <Info />
                </Private>
              }
            />
            <Route
              path="/changePassword"
              element={
                <Private>
                  <ChangePassword />
                </Private>
              }
            />
            <Route
              path="/terms"
              element={
                <Private>
                  <Terms />
                </Private>
              }
            />
            <Route
              path="/privacyPolicy"
              element={
                <Private>
                  <PrivacyPolicy />
                </Private>
              }
            />
            <Route
              path="/verification"
              element={
                <Private>
                  <Verification />
                </Private>
              }
            />
          </Routes>
        </CommonLayout>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
