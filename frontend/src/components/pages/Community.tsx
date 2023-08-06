import { useEffect, useState } from "react";
// Interface
import { CommunityData } from "interfaces/index";
import { MessageItemsData } from "interfaces/index";
// Function
import { getCommunityData } from "lib/api/community_chats";
import { getCommunityCommentData } from "lib/api/community_chats";
import { getSubscribedCommunity } from "lib/api/community_chats";
// Components
import CommunityTop from "components/utils/community/CommunityTop";
import CommonMessageItems from "components/utils/common/CommonMessageItems";
import CommonMessageForms from "components/utils/common/CommonMessageForms";
import ModalSubscribeCommunity from "components/utils/community/ModalSubscribeCommunity";
import { useAuthData } from "components/utils/common/useAuthData";

const Community = () => {
  const [community, setCommunity] = useState<CommunityData | null>(null);
  const [comments, setComments] = useState<MessageItemsData[]>([]);
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const { stringMyId, id } = useAuthData();

  // コミュニティ情報取得
  const handleGetCommunityData = async () => {
    getCommunityData(id).then((res) => setCommunity(res.data));
  };

  // コメント情報取得
  const handleGetCommunityCommentData = async () => {
    getCommunityCommentData(id, stringMyId).then((res) =>
      setComments(res.data)
    );
  };

  // 本コミュニティに参加済みかどうかを判定
  const handleGetSubscribedCommunity = async () => {
    getSubscribedCommunity(stringMyId, id).then((res) =>
      setSubscribed(res.data)
    );
  };

  useEffect(() => {
    handleGetCommunityData();
    handleGetCommunityCommentData();
    handleGetSubscribedCommunity();
  }, []);

  return (
    <>
      {community && (
        <>
          <CommunityTop
            community={community}
            community_id={id || undefined}
            user_id={stringMyId || undefined}
          />
          <div className="my-20">
            {comments.map((message) => (
              <CommonMessageItems
                message={message}
                stringMyId={stringMyId || undefined}
              />
            ))}
          </div>
          <CommonMessageForms
            handleGetData={handleGetCommunityCommentData}
            id={id ?? ""}
            stringMyId={stringMyId ?? ""}
            discrimination={"community"}
          />
        </>
      )}

      {/* コミュニティ登録画面 */}
      {subscribed ? null : (
        <ModalSubscribeCommunity
          community_id={id}
          user_id={stringMyId}
          handleGetSubscribedCommunity={handleGetSubscribedCommunity}
        />
      )}
    </>
  );
};
export default Community;
