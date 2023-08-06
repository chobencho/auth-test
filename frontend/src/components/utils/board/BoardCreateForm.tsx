import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
// Function
import { createBoardData } from "lib/api/board";
import { useAuthData } from "components/utils/common/useAuthData";
import { clearPreview } from "lib/api/helper";
import { uploadImage } from "lib/api/helper";
import { previewImage } from "lib/api/helper";

const BoardCreateForm = () => {
  const navigate = useNavigate();
  // State
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");
  // Id
  const { stringMyId } = useAuthData();

  // 画像アップロード機能
  const handleUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => uploadImage(e, setImage),
    [setImage]
  );

  // プレビュー機能
  const handlePreviewImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => previewImage(e, setPreview),
    [setPreview]
  );

  // プレビュー削除機能
  const handleClearPreview = () => {
    setPreview("")
    clearPreview();
  };

  // FormData形式でデータを作成
  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("user_id", stringMyId || "");
    formData.append("title", title);
    if (image) formData.append("image", image);
    formData.append("body", body);

    return formData;
  };

  // 掲示板情報を作成する
  const handleCreateBoardData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = createFormData();

    await createBoardData(data).then(() => {
      navigate("/boards");
    });
  };

  return (
    <>
      <form onSubmit={handleCreateBoardData}>
        <b>タイトル</b>
        <input
          type="text"
          placeholder="title"
          className="border p-2 m-2"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />

        <div>
          <input
            id="icon-button-file"
            type="file"
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleUploadImage(e);
              handlePreviewImage(e);
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

        <b>内容</b>
        <textarea
          placeholder="body"
          // className→whitespace-pre-wrapで改行している
          className="border p-2 m-2 w-full whitespace-pre-wrap h-40"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <button type="submit" className="border text-white bg-gray-600 p-2 m-2">
          作成する
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
};

export default BoardCreateForm;
