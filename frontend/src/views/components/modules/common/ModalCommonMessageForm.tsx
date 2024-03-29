import React, { useState } from "react";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { createCommunityComment } from "lib/api/community_chats";
import { createMessage } from "lib/api/chat";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface ModalCommonMessageFormProps {
  preview: string;
  onClose: Function;
  generalId: string;
  stringMyId: string;
  image: File | undefined;
  handleGetData: Function;
  discrimination: string;
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
    zIndex: 100,
  },
  modalContent: {
    maxWidth: "80%",
    maxHeight: "80%",
    backgroundColor: "#fff",
    padding: "5px",
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
  discrimination,
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
    onClose();
  };

  return (
    <>
      <form
        onSubmit={handleCreateCommonMessageForm}
        className="border flex justify-between"
      >
        <div className={`${classes.modal}`}>
          <div className={`${classes.modalContent}`}>
            <button onClick={() => onClose()} className="">
              <HighlightOffIcon />
            </button>
            <p className="text-sm text-center my-3">ファイルの送信</p>
            <img src={preview} alt="preview img" className="w-4/5 m-auto" />
            <div className="text-center my-3">
              <textarea
                placeholder="Hello World"
                className="border w-4/5 rounded p-1"
                value={modalBody}
                onChange={(e) => {
                  setModalBody(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="text-center w-full mb-5">
              <button
                type="submit"
                className="bg-blue-base text-white text-sm px-5 py-1 w-3/5"
              >
                送信
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalCommonMessageForm;
