import { useState } from "react";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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
    padding: "5px",
  },
}));

interface ModalSearchFormProps {
  onClose: Function;
  handleGetUsersData: Function;
  stringMyId: string;
}

const ModalSearchForm = ({
  onClose,
  handleGetUsersData,
}: ModalSearchFormProps) => {
  // State
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  // Style
  const classes = useStyles();

  // ユーザ検索関数
  const handleSearchUsers = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGetUsersData(tags);
    onClose();
  };

  // 検索キーワード追加
  const handleAddTag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (tag.trim() !== "") {
      setTags((prevTags) => [...prevTags, tag.trim()]);
      setTag("");
    }
  };

  // 追加したキーワードを削除
  const handleRemoveTag = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    tagToRemove: string
  ) => {
    e.preventDefault();
    // タグを取り除くために、現在のtagsステートから対象のタグをフィルタリングします
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <form
        onSubmit={handleSearchUsers}
        className="border flex justify-between"
      >
        <div className={`${classes.modal}`}>
          <div className={`${classes.modalContent}`}>
            <button onClick={() => onClose()} className="">
              <HighlightOffIcon />
            </button>
            <div className="p-3">
              <p className="text-xs text-center">
                キーワードを追加してユーザ検索してみよう
              </p>
              <input
                type="text"
                placeholder="キーワード"
                className="border py-1 px-2 m-2 rounded-md"
                value={tag}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTag(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const addButton = document.getElementById("addBtn");
                    if (addButton) {
                      addButton.click();
                    }
                  }
                }}
              />
              <button
                id="addBtn"
                className="border rounded-md py-1 px-2 border-blue-600 text-blue-600"
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  handleAddTag(e);
                }}
              >
                追加
              </button>
              {/* 追加されたタグを表示 */}
              <div className="border m-2 p-2 flex flex-wrap">
                <b>追加されたタグ：</b>
                {tags.map((tag, index) => (
                  <p key={index} className="border p-1 m-1 bg-blue-100 w-1/8">
                    {tag}
                    <button
                      className="my-1 mx-2 px-2 text-xl bg-gray-600 text-white"
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => handleRemoveTag(e, tag)}
                    >
                      ×
                    </button>
                  </p>
                ))}
              </div>
              <div>
                <button className="border text-white bg-gray-600 p-2 m-2">
                  この条件で検索
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalSearchForm;
