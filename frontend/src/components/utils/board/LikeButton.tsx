import { useState, useEffect } from "react"
// Style
import { FaHeart } from "react-icons/fa6";
// Function
import { getLike } from "lib/api/boardLike"
import { createLike } from "lib/api/boardLike"
import { deleteLike } from "lib/api/boardLike"

interface LikeFormProps {
    boardId: string
    myId: string
    handleGetBoardData: Function
}

const LikeButton = ({ boardId, myId, handleGetBoardData }: LikeFormProps) => {
    // State
    const [like, setLike] = useState<boolean>(false);

    // いいねする関数
    const handleCreateLike = async () => {
        createLike(boardId, myId).then(() => {
            setLike(true)
            handleGetBoardData()
        })
    }

    // いいねを外す関数
    const handleDeleteLike = async () => {
        deleteLike(boardId, myId).then(() => {
            setLike(false)
            handleGetBoardData()
        })
    }

    // いいねの状態を取得する関数
    const handleGetLike = async () => {
        getLike(boardId, myId).then((res) => setLike(res.data))
    }

    useEffect(() => {
        handleGetLike();
    }, []);

    return (
        <>
            {
                like ? (
                    <button onClick={handleDeleteLike} ><FaHeart className="text-xl text-red-400 my-3" /></button>
                ) : (
                    <button onClick={handleCreateLike} ><FaHeart className="text-xl my-3" /></button>
                )
            }
        </>
    )
}

export default LikeButton
