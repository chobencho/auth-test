import { useState, useEffect } from "react";
// Interface
import { CommunityCommentData } from "interfaces/index";
import { MessageItemsData } from "interfaces/index";
// Function

import ModalCommonExpansionImage from "components/utils/common/ModalCommonExpansionImage";

export interface CommunityCommentProps {
  message: MessageItemsData;
  stringMyId: string | undefined;
}

const CommonMessageItems = ({ message, stringMyId }: CommunityCommentProps) => {

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleExpansionImage = () => {
    setShowModal(true);
  };

  // プレビュークリア機能
  const handleClearPreview = () => {
    setShowModal(false); // モーダルを非表示にする
  };

  return (
    <>
      {message.userId == stringMyId ? (
        <div className="border m-4 text-right">
          {message.image?.url ? (
            <img
              src={message.image.url}
              alt="boardData image"
              className="w-1/2 ml-auto"
              onClick={() => handleExpansionImage()}
            />
          ) : null}
          <p className="whitespace-pre-wrap">{message.body}</p>
        </div>
      ) : (
        <div className="border m-2 text-left">
          {message.image?.url ? (
            <img
              src={message.image.url}
              alt="boardData image"
              className="w-1/2 mr-auto"
              onClick={() => handleExpansionImage()}
            />
          ) : null}
          <p className="whitespace-pre-wrap">{message.body}</p>
        </div>
      )}

      {message.image?.url && showModal ? (
        <ModalCommonExpansionImage
          onClose={handleClearPreview}
          image={message.image.url}
        />
      ) : null}
    </>
  )
}

export default CommonMessageItems
