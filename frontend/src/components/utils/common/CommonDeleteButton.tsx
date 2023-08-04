import { useNavigate } from 'react-router-dom';
import { deleteBoard } from "lib/api/board"
import { deleteChatRoom } from "lib/api/chat"

export interface CommonDeleteButtonProps {
  generalId: string | undefined
  discrimination: string
}

const CommonDeleteButton = ({ generalId, discrimination }: CommonDeleteButtonProps) => {
  const navigate = useNavigate()

  const handleDeleteData = async () => {
    if (discrimination == "board") {
      if (window.confirm("削除すると元の状態に戻せませんがよろしいですか？")) {
        await deleteBoard(generalId).then(() => {
          navigate("/boards")
        })
      }
    } else if (discrimination == "chat") {
      if (window.confirm("削除すると元の状態に戻せませんがよろしいですか？")) {
        await deleteChatRoom(generalId).then(() => {
          navigate("/messages")
        })
      }
    }
  }

  return (
    <>
      <button
        className="border p-2 m-2 bg-gray-600 text-white"
        onClick={() => handleDeleteData()}
      >
        削除する
      </button>
    </>
  )
}

export default CommonDeleteButton
