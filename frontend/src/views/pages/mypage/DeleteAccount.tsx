import { useState } from "react";
// Components
import ModalDeleteAccount from "views/components/modules/user/ModalDeleteAccount";
import { openModal } from "lib/api/helper";
import { clearModal } from "lib/api/helper";

const DeleteAccount = () => {
  const [showModal, setShowModal] = useState(false);

  // モーダル表示
  const handleShowModal = () => {
    openModal(setShowModal);
  };

  // モーダル非表示
  const handleCloseModal = () => {
    clearModal(setShowModal);
  };

  return (
    <>
      <p>アカウントを削除します</p>
      <button
        className="border"
        onClick={() => {
          handleShowModal();
        }}
      >
        アカウント削除
      </button>

      {/* メッセージ入力モーダル */}
      {showModal ? <ModalDeleteAccount onClose={handleCloseModal} /> : null}
    </>
  );
};

export default DeleteAccount;
