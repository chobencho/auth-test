import { useState, useCallback } from "react";
import ModalSearchForm from "components/utils/ModalSearchForm";

interface ModalSearchFormProps {
  handleGetUsersData: Function;
  stringMyId: string;
  handleSetResearchKeyword: (researchKeyword: string) => void; // 追加: handleSetNameの型定義
  handleSetBody: (name: string) => void; // 追加: handleSetNameの型定義
}

const SearchButton = ({
  handleGetUsersData,
  stringMyId,
  handleSetResearchKeyword,
  handleSetBody,
}: ModalSearchFormProps) => {
  // State
  const [showModal, setShowModal] = useState(false);

  // モーダル非表示
  const handleClearModal = () => {
    setShowModal(false); // モーダルを非表示にする
  };

  // モーダル表示
  const showModalWindow = useCallback(() => {
    setShowModal(true); // 画像が選択されたときにモーダルを表示
  }, []);

  return (
    <div className="w-full text-center">
      <button
        className="border text-white bg-gray-600 p-2 m-auto w-1/2"
        onClick={() => {
          showModalWindow();
        }}
      >
        検索
      </button>

      {showModal ? (
        <ModalSearchForm
          onClose={handleClearModal}
          handleGetUsersData={handleGetUsersData}
          stringMyId={stringMyId ?? ""}
          handleSetResearchKeyword={handleSetResearchKeyword} // 追加: handleSetNameを渡す
          handleSetBody={handleSetBody} // 追加: handleSetNameを渡す
        />
      ) : null}
    </div>
  );
};

export default SearchButton;
