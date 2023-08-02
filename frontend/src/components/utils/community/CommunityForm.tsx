import React, { useState, useCallback } from "react";
// Function
import { createCommunityComment } from "lib/api/community";
// Components
import ModalCommentForm from "components/utils/community/ModalCommentForm";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";

export interface CommunityCommentFormProps {
  handleGetCommunityCommentData: Function;
  id: string;
  stringMyId: string;
}

const useStyles = makeStyles((theme) => ({
  form: {
    position: "fixed",
    bottom: 55,
    left: 0,
    display: "flex",
    border: "1px solid #eee",
    justifyContent: "space-between",
    width: "100%",
    background: "#fff",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    // zIndex: 100,
  },
  textarea: {
    width: "100%",
    border: "1px solid #ddd",
    padding: "5px",
  },
}));

const CommunityForm = ({
  handleGetCommunityCommentData,
  id,
  stringMyId,
}: CommunityCommentFormProps) => {
  const classes = useStyles();
  const [comment, setComment] = useState<string>("");
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

  const handleCreateCommunityComment = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
        className={`${classes.form}`}
      >
        <div className="w-full">
          <div className="flex justify-between p-1">
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
                className="flex flex-col items-center justify-center w-full  cursor-pointer"
                htmlFor="icon-button-file"
              >
                <PhotoCameraBackIcon className="text-sm" />
              </label>
            </div>

            <button
              type="submit"
              disabled={!comment || comment.length < 0}
              className="border bg-gray-600 text-white px-2 text-xs"
            >
              送信
            </button>
          </div>
          <div className="text-center px-1">
            <textarea
              placeholder="Hello World"
              // className→whitespace-pre-wrapで改行している
              className={`${classes.textarea}`}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
          </div>
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
  );
};

export default CommunityForm;