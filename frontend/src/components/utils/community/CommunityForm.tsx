import React, { useState, useCallback } from 'react'
// Function
import { createCommunityComment } from "lib/api/community";
// Components
import ModalCommentForm from "components/utils/community/ModalCommentForm";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

export interface CommunityCommentFormProps {
  handleGetCommunityCommentData: Function
  id: string
  stringMyId: string
}

const CommunityForm = ({ handleGetCommunityCommentData, id, stringMyId }: CommunityCommentFormProps) => {
  const [comment, setComment] = useState<string>("")
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  // モーダルを制御するstate
  const [showModal, setShowModal] = useState(false);

  // 画像アップロード機能
  const uploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  }, []);

  // プレビュー機能
  const previewImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(window.URL.createObjectURL(file));
      setShowModal(true); // 画像が選択されたときにモーダルを表示
    } else {
      setPreview(""); // ファイルが選択されていない場合はプレビューをクリア
      setShowModal(false); // モーダルを非表示にする
    }
  }, []);

  // プレビュークリア機能
  const handleClearPreview = () => {
    setPreview("");
    setShowModal(false); // モーダルを非表示にする
  };

  // 送信用フォームデータ作成関数
  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("community_id", id ? id : "");
    formData.append("user_id", stringMyId ? stringMyId : "");
    formData.append("comment", comment);

    return formData;
  };

  const handleCreateCommunityComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = createFormData();

    await createCommunityComment(data).then(() => {
      setComment("");
      handleGetCommunityCommentData();
    });
  };

  return (
    <>
      <form
        onSubmit={handleCreateCommunityComment}
        className="border flex justify-between"
      >

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
            className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            htmlFor="icon-button-file"
          >
            <PhotoCameraBackIcon />
          </label>
        </div>

        <b>内容</b>
        <textarea
          placeholder="Hello World"
          // className→whitespace-pre-wrapで改行している
          className="border w-4/5 p-2"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>

        <div>
          <button
            type="submit"
            disabled={!comment || comment.length < 0}
            className="border bg-gray-600 text-white px-2"
          >
            送信
          </button>
        </div>
      </form>
      {/* メッセージ入力モーダル */}
      {preview && showModal ? (
        <ModalCommentForm
          preview={preview}
          onClose={handleClearPreview}
          communityId={id ?? ""}
          stringMyId={stringMyId ?? ""}
          image={image}
          handleGetCommunityCommentData={handleGetCommunityCommentData}
        />
      ) : null}

    </>
  )
}

export default CommunityForm
