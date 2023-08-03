import { useState } from "react";
// Components
import ModalApplyNewCommunity from "components/utils/community/ModalApplyNewCommunity";

const CommunityCreate = () => {
  // モーダルを制御するstate
  const [showModal, setShowModal] = useState(false);

  const handleModalApplyNewCommunity = () => {
    setShowModal(true);
  };

  // プレビュークリア機能
  const handleClearPreview = () => {
    setShowModal(false); // モーダルを非表示にする
  };
  return (
    <>
      <div className="text-center">
        <button
          className="border text-white bg-gray-600 p-2 m-2"
          onClick={() => handleModalApplyNewCommunity()}
        >
          新規コミュニティ申請
        </button>
      </div>
      {/* 新規コミュニティ申請モーダル */}
      {showModal ? (
        <ModalApplyNewCommunity onClose={handleClearPreview} />
      ) : null}
    </>
  );
};

export default CommunityCreate;
