import { createContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { getCurrentUser } from "./api/auth";
import { Home } from "./components/Home";
import { User } from "./components/User";
import { UserEdit } from "./components/UserEdit";
import { SearchUser } from "./components/SearchUser";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Test } from "./components/Test";
import { Boards } from "./components/Boards";
import { Board } from "./components/Board";
import { BoardCreate } from "./components/BoardCreate";
import { BoardEdit } from "./components/BoardEdit";
import { MyBoard } from "./components/MyBoard";
import { SearchBoard } from "./components/SearchBoard";
import { Messages } from "./components/Messages";
import { Message } from "./components/Message";
import { Mypage } from "./components/Mypage";
import { Setting } from "./components/Setting";
import { Inquiry } from "./components/Inquiry";
import { DeleteAccount } from "./components/DeleteAccount";
import { ChangePassword } from "./components/ChangePassword";
import { Terms } from "./components/Terms";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { MyFav } from "./components/MyFav";
import { Information } from "./components/Information";
import { Info } from "./components/Info";
import { Verification } from "./components/Verification";

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
        console.log(res?.data.data);
      } else {
        console.log("no current user");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser]);

  const Private = ({ children }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Navigate to="../../signin" />;
      }
    } else {
      return <></>;
    }
  };
  return (
    <div class="w-full mx-auto bg-red-300 min-h-screen">
      <div class="w-full mx-auto bg-red-200 min-h-screen">

        <AuthContext.Provider
          value={{
            loading,
            setLoading,
            isSignedIn,
            setIsSignedIn,
            currentUser,
            setCurrentUser,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />

              {/* PrivatePage */}
              <Route
                path="/"
                element={
                  <Private path="/">
                    <Home currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/users/:id"
                element={
                  <Private path="/users/:id">
                    <User currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/users/:id/edit"
                element={
                  <Private path="/users/:id/edit">
                    <UserEdit currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/searchuser"
                element={
                  <Private path="/searchuser">
                    <SearchUser currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/boards"
                element={
                  <Private path="/boards">
                    <Boards currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/board/:id"
                element={
                  <Private path="/board/:id">
                    <Board currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/boardCreate"
                element={
                  <Private path="/boardCreate">
                    <BoardCreate currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/board/:id/edit"
                element={
                  <Private path="/board/:id/edit">
                    <BoardEdit currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/myboard/:id"
                element={
                  <Private path="/myboard/:id">
                    <MyBoard currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/searchboard"
                element={
                  <Private path="/searchboard">
                    <SearchBoard currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/messages"
                element={
                  <Private path="/messages">
                    <Messages currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/message"
                element={
                  <Private path="/message">
                    <Message currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/mypage/:id"
                element={
                  <Private path="/mypage/:id">
                    <Mypage currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/setting"
                element={
                  <Private path="/setting">
                    <Setting currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/inquiry"
                element={
                  <Private path="/inquiry">
                    <Inquiry currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/deleteaccount"
                element={
                  <Private path="/deleteaccount">
                    <DeleteAccount currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/changepassword"
                element={
                  <Private path="/changepassword">
                    <ChangePassword currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/privacypolicy"
                element={
                  <Private path="/privacypolicy">
                    <PrivacyPolicy currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/terms"
                element={
                  <Private path="/terms">
                    <Terms currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/myfav"
                element={
                  <Private path="/myfav">
                    <MyFav currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/information"
                element={
                  <Private path="/information">
                    <Information currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/info/:id"
                element={
                  <Private path="/info/:id">
                    <Info currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/verification"
                element={
                  <Private path="/verification">
                    <Verification currentUser={currentUser} />
                  </Private>
                }
              />

              <Route
                path="/test"
                element={
                  <Private path="/test">
                    <Test currentUser={currentUser} />
                  </Private>
                }
              />

            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;
