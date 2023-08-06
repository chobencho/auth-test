import { useState } from "react";
// Interface
import { MessageItemsData } from "interfaces/index";
// Function
import ModalCommonExpansionImage from "components/utils/common/ModalCommonExpansionImage";
import { clearModal } from "lib/api/helper";
import { expansionImage } from "lib/api/helper";

export interface CommunityCommentProps {
  message: MessageItemsData;
  stringMyId: string | undefined;
}

const CommonMessageItems = ({ message, stringMyId }: CommunityCommentProps) => {
  // State
  const [showModal, setShowModal] = useState<boolean>(false);

  // 画像拡大機能
  const handleExpansionImage = () => {
    expansionImage(setShowModal)
  };

  // モーダルクリア機能
  const handleCloseModal = () => {
    clearModal(setShowModal);
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
          onClose={handleCloseModal}
          image={message.image.url}
        />
      ) : null}
    </>
  )
}

export default CommonMessageItems
