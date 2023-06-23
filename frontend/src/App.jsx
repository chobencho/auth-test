import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "./api/auth";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Mypage } from "./components/Mypage";
import { ValidateAge } from "./components/ValidateAge";
import { Info } from "./components/Info";
import { Information } from "./components/Information";
import { Setting } from "./components/Setting";
import { Inquiry } from "./components/Inquiry";
import { ChangePassword } from "./components/ChangePassword";
import { Terms } from "./components/Terms";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { DeleteAccount } from "./components/DeleteAccount";
import { MyBoard } from "./components/MyBoard";
import { MyFav } from "./components/MyFav";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { User } from "./components/User";
import { SearchUser } from "./components/SearchUser";
import { SearchBoard } from "./components/SearchBoard";
import { Board } from "./components/Board";
import { Boards } from "./components/Boards";
import { BoardsSearch } from "./components/BoardsSearch";
import { BoardCreate } from "./components/BoardCreate";
import { BoardEdit } from "./components/BoardEdit";
import { DirectMessages } from "./components/DirectMessages";
import { Message } from "./components/Message";
import { UserEdit } from "./components/UserEdit";

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  // ログインユーザー取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();
      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        const currnet_user = res?.data.data;
        setCurrentUser(currnet_user);
        console.log(currnet_user);
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

  // ログインしているか確認
  // ログインしていなければSignInページへ遷移
  const Private = ({ children }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Redirect to="signin" />;
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
            <Switch>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/signin">
                <SignIn />
              </Route>
              <Private>
                <Header currentUser={currentUser} />
                  {/* 余白用 */}
                  <div class="h-20"></div>
                  <Route exact path="/">
                    <Home currentUser={currentUser} />
                  </Route>
                  <Route exact path="/mypage/:id">
                    <Mypage currentUser={currentUser} />
                  </Route>

                  <Route exact path="/validateage">
                    <ValidateAge currentUser={currentUser} />
                  </Route>
                  <Route exact path="/info">
                    <Info currentUser={currentUser} />
                  </Route>
                  <Route exact path="/information">
                    <Information currentUser={currentUser} />
                  </Route>
                  <Route exact path="/setting">
                    <Setting currentUser={currentUser} />
                  </Route>
                  <Route exact path="/inquiry">
                    <Inquiry currentUser={currentUser} />
                  </Route>
                  <Route exact path="/changePassword">
                    <ChangePassword currentUser={currentUser} />
                  </Route>
                  <Route exact path="/terms">
                    <Terms currentUser={currentUser} />
                  </Route>
                  <Route exact path="/privacyPolicy">
                    <PrivacyPolicy currentUser={currentUser} />
                  </Route>
                  <Route exact path="/deleteAccount">
                    <DeleteAccount currentUser={currentUser} />
                  </Route>

                  <Route exact path="/myboards/:id">
                    <MyBoard currentUser={currentUser} />
                  </Route>
                  <Route exact path="/myfav">
                    <MyFav currentUser={currentUser} />
                  </Route>


                  <Route exact path="/searchboard">
                    <SearchBoard currentUser={currentUser} />
                  </Route>
                  <Route exact path="/searchuser">
                    <SearchUser currentUser={currentUser} />
                  </Route>
                  <Route exact path="/board/:id">
                    <Board currentUser={currentUser} />
                  </Route>
                  <Route exact path="/boards">
                    <Boards currentUser={currentUser} />
                  </Route>
                  <Route exact path="/boards/search/:id">
                    <BoardsSearch currentUser={currentUser} />
                  </Route>
                  <Route exact path="/boardCreate">
                    <BoardCreate currentUser={currentUser} />
                  </Route>
                  <Route exact path="/board/:id/edit">
                    <BoardEdit currentUser={currentUser} />
                  </Route>
                  <Route exact path="/directMessages">
                    <DirectMessages currentUser={currentUser} />
                  </Route>
                  <Route exact path="/message">
                    <Message currentUser={currentUser} />
                  </Route>
                  <Route exact path="/users/:id">
                    <User currentUser={currentUser} />
                  </Route>
                  <Route exact path="/users/:id/edit">
                    <UserEdit currentUser={currentUser} />
                  </Route>
                  {/* 余白用 */}
                  <div class="h-20"></div>
                <Footer currentUser={currentUser} />
              </Private>
            </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;
