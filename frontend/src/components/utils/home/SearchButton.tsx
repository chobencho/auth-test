import { useState, useCallback } from "react";
// Components
import ModalSearchForm from "components/utils/home/ModalSearchForm";

interface ModalSearchFormProps {
  handleGetUsersData: Function;
  stringMyId: string;
  tags: string[];
  verifiedAge: boolean
}

const SearchButton = ({
  handleGetUsersData,
  stringMyId,
  verifiedAge
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

      <div className={"relative border bg-gray-600 text-white p-2 m-auto w-1/2"}>
        検索
        {!verifiedAge && (
          <span
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            年齢確認が完了していません
          </span>
        )}
        {verifiedAge && (<button className="absolute top-0 left-0 w-full h-full opacity-0" onClick={showModalWindow} />)}
      </div>

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
