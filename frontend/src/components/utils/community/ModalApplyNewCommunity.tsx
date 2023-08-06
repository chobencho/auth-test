import React, { useState, useContext } from "react";
import { AuthContext } from "App";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { sendMailApplyNewCommunity } from "lib/api/community";
import { useAuthData } from "components/utils/common/useAuthData";

export interface ModalApplyNewCommunityProps {
  onClose: Function;
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
    background: "#fff",
  },
  modalImg: {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ModalApplyNewCommunity = ({ onClose }: ModalApplyNewCommunityProps) => {
  const classes = useStyles();
  // State
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  // Id
  const { stringMyId } = useAuthData();

  // 新規コミュニティ申請
  const handleApplyNewCommunity = async (
    e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (stringMyId !== undefined) {
      await sendMailApplyNewCommunity(stringMyId, title, body).then(() => { });
    }
  };

  return (
    <>
      <form onSubmit={handleApplyNewCommunity} className={`${classes.modal}`}>
        <div className={`${classes.modalContent}`}>
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

          <button
            type="submit"
            className="border text-white bg-gray-600 p-2 m-2"
          >
            送信する
          </button>
          <button
            onClick={() => onClose()}
            className="border text-2xl text-white bg-gray-600 px-3 py-1"
          >
            ×
          </button>
        </div>
      </form>
    </>
  );
};

export default ModalApplyNewCommunity;
