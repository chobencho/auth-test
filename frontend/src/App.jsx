import { createContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { getCurrentUser } from "./api/auth";
import { Home } from "./components/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Test } from "./components/Test";
import { Boards } from "./components/Boards";

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
                path="/boards"
                element={
                  <Private path="/boards">
                    <Boards currentUser={currentUser}/>
                  </Private>
                }
              />

              <Route
                path="/test"
                element={
                  <Private path="/test">
                    <Test currentUser={currentUser}/>
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
