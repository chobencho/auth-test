import React, { useState } from "react";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { createMessage } from "lib/api/chat";

interface ModalChatFormProps {
  preview: string;
  onClose: Function;
  roomId: string;
  stringMyId: string;
  image: File | null;
  handleGetMessages: Function;
}

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
  modalContent: {
    maxWidth: "80%",
    maxHeight: "80%",
  },
  modalImg: {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ModalChatForm = ({
  preview,
  onClose,
  roomId,
  stringMyId,
  image,
  handleGetMessages,
}: ModalChatFormProps) => {
  const classes = useStyles();
  // State
  const [modalBody, setModalBody] = useState<string>("");
  const [modalPreview, setModalPreview] = useState<string>(preview);
  const [modalRoomId, setModalRoomId] = useState<string>(roomId);
  const [userId, setUserId] = useState<string>("");

  // プレビュークリア機能
  const handleClearPreview = () => {
    setModalPreview("");
    // プレビューをクリアすると同時に、inputタグの内容もクリア
    const fileInput = document.getElementById(
      "icon-button-file"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
    onClose();
  };

  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("room_id", roomId ? roomId : "");
    formData.append("user_id", stringMyId ? stringMyId : "");
    formData.append("body", modalBody);
    if (image) formData.append("image", image);

    return formData;
  };

  const handleCreateMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = createFormData();

    await createMessage(data).then(() => {
      setModalRoomId("");
      setUserId("");
      setModalBody("");
      handleGetMessages();
    });
    handleClearPreview();
  };

  return (
    <>
      <form
        onSubmit={handleCreateMessage}
        className="border flex justify-between"
      >
        <div className={`${classes.modal}`}>
          <button
            onClick={() => handleClearPreview()}
            className="border text-2xl text-white bg-gray-600 px-3 py-1"
          >
            ×
          </button>
          <div className={`${classes.modalContent}`}>
            <img
              src={preview}
              alt="preview img"
              className={`${classes.modalImg}`}
            />

            <textarea
              placeholder="Hello World"
              className="border w-4/5 p-2"
              value={modalBody}
              onChange={(e) => {
                setModalBody(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="border bg-gray-600 text-white px-2"
            >
              送信
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalChatForm;
