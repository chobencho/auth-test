import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signIn } from "../api/auth";
import { AuthContext } from "../App";

export const SignIn = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const generateParams = () => {
    const signInParams = {
      email: email,
      password: password,
    };
    return signInParams;
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const params = generateParams();

    try {
      const res = await signIn(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        history.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1 class="text-center text-xl">サインインページです</h1>
      <form >
        <div>
          <input
            type="email"
            class="border border-gray-200 border-solid rounded w-full mt-3"
            id="email"
            name="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            class="border border-gray-200 border-solid rounded w-full mt-3"
            id="password"
            name="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="border border-gray-200 bg-green-500 border-solid rounded w-full mt-3" onClick={(e) => handleSignInSubmit(e)}>
          ログイン
        </button>

        <div class="text-center">
          <Link to="/signup" class="underline text-xs">パスワードを忘れた方はこちら</Link>
        </div>

        <p class="text-xs text-center mt-3">アカウントをお持ちでない方はこちら</p>


          <Link to="/signup" class="inline-block border border-gray-200 bg-green-500 border-solid rounded text-center w-full mt-3">新規会員登録</Link>

      </form>
    </>
  );
};