import { useState, useCallback } from "react";
import { UserData } from "interfaces/index";
import { searchUsers } from "lib/api/search";
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
  handleSetResearchKeyword: (researchKeyword: string) => void; // 追加: handleSetNameの型定義
  handleSetBody: (body: string) => void; // 追加: handleSetNameの型定義
}

const ModalSearchForm = ({
  onClose,
  handleGetUsersData,
  stringMyId,
  handleSetResearchKeyword,
  handleSetBody,
}: ModalSearchFormProps) => {
  // State
  const [users, setUsers] = useState<UserData[]>([]);
  const [researchKeyword, setResearchKeyword] = useState<string>("");
  const [body, setBody] = useState<string>("");
  // Style
  const classes = useStyles();

  // モーダル非表示
  const handleClearModal = () => {
    onClose();
  };

  const handleSearchUsers = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGetUsersData();
    handleClearModal();
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
              value={researchKeyword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setResearchKeyword(e.target.value);
                handleSetResearchKeyword(e.target.value);
              }}
            />

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
