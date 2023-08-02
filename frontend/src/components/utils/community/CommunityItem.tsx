import { useState, useEffect } from "react";
// Interface
import { CommunityCommentData } from "interfaces/index";
// Function

import ModalImage from "components/utils/common/ModalImage";

export interface CommunityCommentProps {
  comment: CommunityCommentData;
  stringMyId: string | undefined;
}

const CommunityItem = ({ comment, stringMyId }: CommunityCommentProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleExpansionImage = () => {
    setShowModal(true);
  };

  // プレビュークリア機能
  const handleClearPreview = () => {
    setShowModal(false); // モーダルを非表示にする
  };

  useEffect(() => {}, []);

  return (
    <>
      {comment.userId == stringMyId ? (
        <div className="border m-4 text-right">
          {comment.image?.url ? (
            <img
              src={comment.image.url}
              alt="boardData image"
              className="w-1/2 ml-auto"
              onClick={() => handleExpansionImage()}
            />
          ) : null}
          <p className="whitespace-pre-wrap">{comment.comment}</p>
        </div>
      ) : (
        <div className="border m-2 text-left">
          {comment.image?.url ? (
            <img
              src={comment.image.url}
              alt="boardData image"
              className="w-1/2 mr-auto"
              onClick={() => handleExpansionImage()}
            />
          ) : null}
          <p className="whitespace-pre-wrap">{comment.comment}</p>
        </div>
      )}
      {/* 画像拡大モーダル */}
      {comment.image?.url && showModal ? (
        <ModalImage onClose={handleClearPreview} image={comment.image.url} />
      ) : null}
    </>
  );
};

export default CommunityItem;
