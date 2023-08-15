import client from "lib/api/client";
import Cookies from "js-cookie";

// パスワード再設定関連の型
export type SendResetMailType = {
  email: string;
};
export type PasswordResetType = {
  resetPasswordToken: string;
  password: string;
  passwordConfirmation: string;
};

// パスワード再設定メール送信関数
// const sendEmail = async ({ email }: SendResetMailType) =>
//   fetch(authUrl("auth/password"), {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user: {
//         email,
//       },
//     }),
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     throw new Error(res.toString());
//   });

export const sendEmail = ({ email }: SendResetMailType) => {
  return client.post(
    "auth/password",
    {
      email: email, // 正しい形式でemailデータをリクエストボディに含める
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

// パスワード再設定実行関数
// const onReset = async ({
//   resetPasswordToken,
//   password,
//   passwordConfirmation,
// }: PasswordResetType) =>
//   fetch(authUrl("password"), {
//     method: "put",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user: {
//         reset_password_token: resetPasswordToken,
//         password,
//         password_confirmation: passwordConfirmation,
//       },
//     }),
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     throw new Error(res.toString());
//   });

export const onReset = async ({
  resetPasswordToken,
  password,
  passwordConfirmation,
}: PasswordResetType) => {
  return client.put(
    "auth/password",
    {
      reset_password_token: resetPasswordToken,
      password,
      password_confirmation: passwordConfirmation,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

// export
export const PasswordReset = {
  sendEmail,
  onReset,
};
