import { useState, useEffect } from "react"
import { getLike } from "lib/api/like"
import { createLike } from "lib/api/like"
import { deleteLike } from "lib/api/like"
import { FaHeart } from "react-icons/fa6";

interface LikeFormProps {
    boardId: string
    myId: string
    handleGetBoardData: Function
}

const LikeButton = ({ boardId, myId, handleGetBoardData }: LikeFormProps) => {
    const [like, setLike] = useState<boolean>(false);

    // いいねする
    const handleCreateLike = async () => {
        createLike(boardId, myId).then(() => {
            setLike(true)
            handleGetBoardData()
        })
    }

    // いいねを外す
    const handleDeleteLike = async () => {
        deleteLike(boardId, myId).then(() => {
            setLike(false)
            handleGetBoardData()
        })
    }

    useEffect(() => {
        const f = async () => {
            getLike(boardId, myId).then((res) => setLike(res.data))
        };
        f();
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
