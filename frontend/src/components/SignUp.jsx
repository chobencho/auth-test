import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../api/auth";
import { AuthContext } from "../App";

export const SignUp = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const confirmSuccessUrl = "http://localhost:3000";

  // サインアップ時に登録するアカウント情報をパラメータとして設定
  const generateParams = () => {
    const signUpParams = {
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
      name: "noName",
      nickname: "noNickname",
      image: "sample.jpg",
      confirmSuccessUrl: confirmSuccessUrl,
    };
    return signUpParams;
  };

  // サインアップ時の処理
  // paramsに登録情報をぶち込む
  // 認証メールを送ったアラートを出す
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const params = generateParams();
    try {
      const res = await signUp(params);
      console.log(res);
      alert("登録いただいたメールアドレスにメールを送りました。\n 届いたメールに記載されているURLをクリックして登録を完了してください。");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1 class="text-center text-xl">サインアップページです</h1>
      <form>
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
        <div>
          <input
            type="password"
            class="border border-gray-200 border-solid rounded w-full mt-3"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="パスワード確認用"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <div>
          <input
            type="hidden"
            id="confirm_success_url"
            name="confirm_success_url"
            value={confirmSuccessUrl}
          />
        </div>
        <button type="submit" class="border border-gray-200 bg-green-500 border-solid rounded w-full mt-3" onClick={(e) => handleSignUpSubmit(e)}>
          登録
        </button>

        <p class="text-xs text-center mt-3">アカウントをすでにお持ちの方はこちら</p>
        <Link to="/signin" class="inline-block border border-gray-200 bg-green-500 border-solid rounded text-center w-full mt-3">ログイン</Link>

      </form>

    </>
  );
};
