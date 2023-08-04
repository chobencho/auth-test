import { Link } from "react-router-dom";
// Interface
import { CommentData } from "interfaces/index"


interface CommentItemProps {
  comment: CommentData;
}

const CommentItem = ({ comment }: CommentItemProps) => {

  return (
    <>
      <div className="border p-2 m-2">
        <Link to={`/user/${comment.userId}`}>
          {comment.image?.url ? (
            <img
              src={comment.image.url.replace('/board_comment/image/', `/user/image/${comment.userId}/`)}
              alt="comment image"
              className="w-1/5"
            />
          ) : null}
          <h6>{comment.name}</h6>
        </Link>

        <p>{comment.body}</p>
      </div>

    </>
  )
}

export default CommentItem
