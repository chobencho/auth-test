import { useState } from "react"
// Components
import ModalDeleteAccount from "components/utils/user/ModalDeleteAccount";

const DeleteAccount = () => {
  const [showModal, setShowModal] = useState(false);

  // モーダル非表示
  const handleClearModal = () => {
    setShowModal(false); // モーダルを非表示にする
  };

  // モーダル表示
  const showModalWindow = () => {
    setShowModal(true); // 画像が選択されたときにモーダルを表示
  };

  return (
    <>
      <p>アカウントを削除します</p>
      <button className="border"
        onClick={() => {
          showModalWindow();
        }}
      >アカウント削除</button>

      {/* メッセージ入力モーダル */}
      {showModal ? (
        <ModalDeleteAccount
          onClose={handleClearModal}
        />
      ) : null}
    </>
  )
}

export default DeleteAccount
