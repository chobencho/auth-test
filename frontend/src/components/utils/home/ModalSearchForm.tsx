import { useState } from "react";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";


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
    padding: "20px",
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

  // モーダル非表示
  const handleClearModal = () => {
    onClose();
  };

  // ユーザ検索関数
  const handleSearchUsers = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGetUsersData(tags);
    handleClearModal();
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
            <h3>検索画面</h3>
            <p>研究キーワード</p>
            <input
              type="text"
              placeholder="researchKeyword"
              className="border p-2 m-2"
              value={tag}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTag(e.target.value);
              }}
            />
            <button
              className="border text-white bg-gray-600 p-2 m-2"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
              <button
                onClick={() => handleClearModal()}
                className="border text-2xl text-white bg-gray-600 px-3 py-1"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalSearchForm;