import { useState } from "react";
import { createComment } from "lib/api/board";

interface CommentFormProps {
  boardId: string | undefined;
  userId: string | undefined;
  handleGetBoardComment: Function;
}

const CommentForm = ({ boardId, userId, handleGetBoardComment }: CommentFormProps) => {
  // State
  const [comment, setComment] = useState<string>("")

  // 送信用フォームデータ作成関数
  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("board_id", boardId ? boardId : "");
    formData.append("user_id", userId ? userId : "");
    formData.append("comment", comment);

    return formData;
  };

  const handleCreateComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = createFormData();

    await createComment(data).then(() => {
      setComment("");
      handleGetBoardComment();
    });
  };
  return (
    <>
      <form
        onSubmit={handleCreateComment}
        className="border flex justify-between p-2"
      >
        <textarea
          placeholder="comment"
          // className→whitespace-pre-wrapで改行している
          className="border w-4/5 p-2"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <button
          type="submit"
          disabled={!comment || comment.length < 0}
          className="border bg-gray-600 text-white px-2"
        >
          送信
        </button>
      </form>
    </>
  )
}

export default CommentForm
