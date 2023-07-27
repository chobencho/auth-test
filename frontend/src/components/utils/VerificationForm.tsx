<<<<<<< HEAD
import React, { useState, useCallback } from "react";
import { useContext } from "react";
import { AuthContext } from "App";
import { sendCertificateImage } from "lib/api/verification";

const VerificationForm = () => {
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");

  // 自分のユーザIDをログインユーザ情報から取得
  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

  // 画像アップロード機能
  const uploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file);
  }, []);

  // プレビュー機能
  const previewImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(window.URL.createObjectURL(file));
    } else {
      setPreview(""); // ファイルが選択されていない場合はプレビューをクリア
    }
  }, []);

  // プレビュークリア機能
  const handleClearPreview = () => {
    setPreview("");
    // プレビューをクリアすると同時に、inputタグの内容もクリア
    const fileInput = document.getElementById(
      "icon-button-file"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // FormData形式でデータを作成
  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("user_id", stringMyId ? stringMyId : "");
    formData.append("check_age", "0"); // この段階では年齢チェックが終わっていないので0を送信する
    if (image) formData.append("image", image);

    return formData;
  };

  // ユーザ情報を変更する
  const handleSendCertificateImage = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const data = createFormData();

    await sendCertificateImage(data).then(() => {
      setPreview("");
      setImage(undefined);
    });
  };

  return (
    <>
      <form onSubmit={handleSendCertificateImage}>
        <div>
          <input
            id="icon-button-file"
            type="file"
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              uploadImage(e);
              previewImage(e);
            }}
          />
          <label
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            htmlFor="icon-button-file"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  写真のアップロードはここをクリック
                </span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          </label>
        </div>
        <button type="submit" className="border text-white bg-gray-600 p-2 m-2">
          送信する
        </button>
      </form>
      {preview ? (
        <div>
          <button
            onClick={() => handleClearPreview()}
            className="border text-2xl text-white bg-gray-600 px-3 py-1"
          >
            ×
          </button>
          <img src={preview} alt="preview img" className="border" />
        </div>
      ) : null}
    </>
  );
=======
// import React, { useState, useCallback } from "react";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "App";
// import { v4 as uuidv4 } from "uuid";
// import { sendCertificateImage } from "lib/api/verification";
// import { sendMail } from "lib/api/verification";
// import GoBackButton from "components/utils/GoBackButton";

// const VerificationForm = () => {
//   const navigate = useNavigate();
//   const [image, setImage] = useState<File | undefined>();
//   const [preview, setPreview] = useState<string>("");

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   // 自分のユーザIDをログインユーザ情報から取得
//   const { currentUser } = useContext(AuthContext);
//   const myId = currentUser ? currentUser.id : null;
//   const stringMyId = myId?.toString();

//   // 画像アップロード機能
//   // const uploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const file = e.target.files?.[0];
//   //   if (file) {
//   //     // ファイル名をUUIDでユニークに変更
//   //     const uniqueFileName = uuidv4() + "-" + file.name;
//   //     // ファイル名を変更したファイルをstateにセット
//   //     setImage(new File([file], uniqueFileName, { type: file.type }));
//   //   }
//   // }, []);

//   const uploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     setImage(file);
//   }, []);

//   // プレビュー機能
//   const previewImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setPreview(window.URL.createObjectURL(file));
//     } else {
//       setPreview(""); // ファイルが選択されていない場合はプレビューをクリア
//     }
//   }, []);

//   // プレビュークリア機能
//   const handleClearPreview = () => {
//     setPreview("");
//     // プレビューをクリアすると同時に、inputタグの内容もクリア
//     const fileInput = document.getElementById(
//       "icon-button-file"
//     ) as HTMLInputElement;
//     if (fileInput) {
//       fileInput.value = "";
//     }
//   };

//   // FormData形式でデータを作成
//   const createFormData = (): FormData => {
//     const formData = new FormData();

//     formData.append("user_id", stringMyId ? stringMyId : "");
//     if (image) formData.append("image", image);
//     formData.append("check_age", "0");

//     return formData;
//   };

//   const handleSendCertificateImage = async (
//     e: React.FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();

//     const data = createFormData();

//     await sendCertificateImage(data).then(() => {
//       setPreview("");
//       setImage(undefined);
//     });

//     if (stringMyId !== undefined) {
//       await sendMail(stringMyId, name, email, message, image).then(() => {});
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSendCertificateImage}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="名前"
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="メールアドレス"
//         />
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="メッセージ"
//         />
//         <div>
//           <input
//             id="icon-button-file"
//             type="file"
//             className="hidden"
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//               uploadImage(e);
//               previewImage(e);
//             }}
//           />
//           <label
//             className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
//             htmlFor="icon-button-file"
//           >
//             <div className="flex flex-col items-center justify-center pt-5 pb-6">
//               <svg
//                 aria-hidden="true"
//                 className="w-10 h-10 mb-3 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                 ></path>
//               </svg>
//               <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                 <span className="font-semibold">
//                   写真のアップロードはここをクリック
//                 </span>
//               </p>
//               <p className="text-xs text-gray-500 dark:text-gray-400">
//                 SVG, PNG, JPG or GIF (MAX. 800x400px)
//               </p>
//             </div>
//           </label>
//         </div>
//         <button type="submit" className="border text-white bg-gray-600 p-2 m-2">
//           送信する
//         </button>
//         <GoBackButton />
//       </form>
//       {preview ? (
//         <div>
//           <button
//             onClick={() => handleClearPreview()}
//             className="border text-2xl text-white bg-gray-600 px-3 py-1"
//           >
//             ×
//           </button>
//           <img src={preview} alt="preview img" className="border" />
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default VerificationForm;

import React from "react";

const VerificationForm = () => {
  return <div>VerificationForm</div>;
>>>>>>> b21bfa0 (add actionMailer, passwoedReset)
};

export default VerificationForm;
