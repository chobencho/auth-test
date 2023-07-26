import React, { useCallback } from "react";
import { useContext } from "react";
import { AuthContext } from "App";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { createMessage } from "lib/api/chat";
import ModalChatForm from "components/utils/ModalChatForm";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

interface BoardFormProps {
  handleGetMessages: Function;
}

const ChatForm = ({ handleGetMessages }: BoardFormProps) => {
  const [roomId, setRoomId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const { id } = useParams<{ id: string }>();

  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

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

  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("room_id", id ? id : "");
    formData.append("user_id", stringMyId ? stringMyId : "");
    formData.append("body", body);

    return formData;
  };

  const handleCreateMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = createFormData();

    await createMessage(data).then(() => {
      setRoomId("");
      setUserId("");
      setBody("");
      handleGetMessages();
    });
  };

  return (
    <>
      <form
        onSubmit={handleCreateMessage}
        className="border flex justify-between"
      >
        <input type="hidden" value={id} />

        <input type="hidden" value={stringMyId} />

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
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <div>
          <button
            type="submit"
            disabled={!body || body.length < 0}
            className="border bg-gray-600 text-white px-2"
          >
            送信
          </button>
        </div>
      </form>

      {preview && showModal ? (
        <ModalChatForm
          preview={preview}
          onClose={handleClearPreview}
          roomId={id ?? ""}
          stringMyId={stringMyId ?? ""}
          image={image}
          handleGetMessages={handleGetMessages}
        />
      ) : null}
    </>
  );
};

export default ChatForm;
