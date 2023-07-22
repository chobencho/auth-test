import { deleteChatRoom } from "lib/api/chat"
import { useNavigate } from 'react-router-dom';

interface DeleteButtonProps {
    room_id: string | undefined
}

const DeleteButton = ({ room_id }: DeleteButtonProps) => {
    const navigate = useNavigate();

    const handleDeleteChat = async (room_id: string | undefined) => {
        if (room_id !== undefined) {
            if (window.confirm("削除すると元の状態に戻せませんがよろしいですか？")) {
                await deleteChatRoom(room_id).then(() => {
                    navigate("/messages")
                })
            }
        } else {
            console.log("room_idがundefinedです。削除できません。");
        }
    }

    return (
        <>
            <button
                className="border p-2 m-2 bg-gray-600 text-white"
                onClick={() => handleDeleteChat(room_id)}
            >
                削除する
            </button>
        </>

    )
}

export default DeleteButton