import React, { useState } from "react";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { createCommunityComment } from "lib/api/community_chats";
import { createMessage } from "lib/api/chat";

interface ModalCommonMessageFormProps {
  preview: string;
  onClose: Function;
  generalId: string;
  stringMyId: string;
  image: File | undefined;
  handleGetData: Function;
  discrimination: string
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


const ModalCommonMessageForm = ({
  preview,
  onClose,
  generalId,
  stringMyId,
  image,
  handleGetData,
  discrimination
}: ModalCommonMessageFormProps) => {
  const classes = useStyles();
  // State
  const [modalBody, setModalBody] = useState<string>("");

  const createFormData = (general_id: string): FormData => {
    const formData = new FormData();

    formData.append(general_id, generalId ? generalId : "");
    formData.append("user_id", stringMyId ? stringMyId : "");
    formData.append("body", modalBody);
    if (image) formData.append("image", image);

    return formData;
  };

  const handleCreateCommonMessageForm = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (discrimination == "community") {
      const data = createFormData("community_id");

      await createCommunityComment(data).then(() => {
        setModalBody("");
        handleGetData();
      });
    } else if (discrimination == "chat") {
      const data = createFormData("room_id");

      await createMessage(data).then(() => {
        setModalBody("");
        handleGetData();
      });
    }
    onClose()
  };

  return (
    <>
      <form
        onSubmit={handleCreateCommonMessageForm}
        className="border flex justify-between"
      >
        <div className={`${classes.modal}`}>
          <button
            onClick={() => onClose()}
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
  )
}

export default ModalCommonMessageForm
