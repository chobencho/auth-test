import React, { useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "App"
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { createCommunityComment } from "lib/api/community";
import { createMessage } from "lib/api/chat";
import { createComment } from "lib/api/board";
// Components
import ModalCommonMessageForm from "components/utils/common/ModalCommonMessageForm";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

export interface CommonMessageFormProps {
  handleGetData: Function;
  id: string;
  stringMyId: string;
  discrimination: string
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
  },
  textarea: {
    width: "100%",
    border: "1px solid #ddd",
    padding: "5px",
  },
}));

const CommonMessageForms = ({
  handleGetData,
  id,
  stringMyId,
  discrimination
}: CommonMessageFormProps) => {
  const classes = useStyles();
  const { verifiedAge } = useContext(AuthContext);
  const [body, setBody] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
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
    // プレビューをクリアすると同時に、inputタグの内容もクリア
    const fileInput = document.getElementById(
      "icon-button-file"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // 送信用フォームデータ作成関数
  const createFormData = (general_id: string): FormData => {
    const formData = new FormData();

    formData.append(general_id, id ? id : "");
    formData.append("user_id", stringMyId ? stringMyId : "");
    formData.append("body", body);

    return formData;
  };

  const handleCreateCommonMessageForm = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (discrimination == "community") {
      const data = createFormData("community_id");

      await createCommunityComment(data).then(() => {
        setBody("");
        handleGetData();
      });
    } else if (discrimination == "chat") {
      const data = createFormData("room_id");

      await createMessage(data).then(() => {
        setBody("");
        handleGetData();
      });
    } else if (discrimination == "board") {
      const data = createFormData("board_id");

      await createComment(data).then(() => {
        setBody("");
        handleGetData();
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleCreateCommonMessageForm}
        className={`${classes.form}`}
      >
        <div className={"relative border p-2 m-auto w-full"}>
          <div className="w-full">
            <div className="flex justify-between p-1">

              {discrimination !== "board" &&
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
              }

              <button
                type="submit"
                disabled={!body || body.length < 0}
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
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          {!verifiedAge && (
            <span
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              年齢確認が完了していません
            </span>
          )}

        </div >
      </form >
      {/* メッセージ入力モーダル */}
      {
        preview && showModal ? (
          <ModalCommonMessageForm
            preview={preview}
            onClose={handleClearPreview}
            generalId={id ?? ""}
            stringMyId={stringMyId ?? ""}
            image={image}
            handleGetData={handleGetData}
            discrimination={discrimination}
          />
        ) : null
      }
    </>
  )
}

export default CommonMessageForms
