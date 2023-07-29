import { useState, useCallback } from "react";
// Components
import ModalSearchForm from "components/utils/home/ModalSearchForm";

interface ModalSearchFormProps {
  handleGetUsersData: Function;
  stringMyId: string;
  tags: string[];
}

const SearchButton = ({
  handleGetUsersData,
  stringMyId,
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

      {/* 検索モーダル */}
      {showModal ? (
        <ModalSearchForm
          onClose={handleClearModal}
          handleGetUsersData={handleGetUsersData}
          stringMyId={stringMyId ?? ""}
        />
      ) : null}
    </div>
  );
};

export default SearchButton;
