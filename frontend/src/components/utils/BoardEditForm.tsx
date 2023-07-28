import React, { useState, useCallback } from "react";
import { editBoardData } from "lib/api/board";
import { useParams } from "react-router-dom";
import { BoardData } from "interfaces/index";

interface BoardEditFormProps {
  boardData: BoardData;
  handleGetBoardData: Function;
}

const BoardEditForm = ({
  boardData,
  handleGetBoardData,
}: BoardEditFormProps) => {
  const [title, setTitle] = useState<string>(boardData.title || "");
  const [body, setBody] = useState<string>(boardData.body || "");
  const [image, setImage] = useState<File | undefined>();
  const [preview, setPreview] = useState<string>("");

  const { id } = useParams<{ id: string }>();

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

    formData.append("title", title);
    if (image) formData.append("image", image);
    formData.append("body", body);

    return formData;
  };

  // ユーザ情報を変更する
  const handleEditBoardData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = createFormData();

    await editBoardData(id, data).then(() => {
      handleGetBoardData();
    });

    handleClearPreview();
  };

  return (
    <>
      <form onSubmit={handleEditBoardData}>
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
          変更する
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

export default BoardEditForm;
