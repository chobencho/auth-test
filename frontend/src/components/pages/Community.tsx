import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "App";
// Interface
import { CommunityData } from "interfaces/index";
import { CommunityCommentData } from "interfaces/index";
// Function
import { getCommunityData } from "lib/api/community";
import { getCommunityCommentData } from "lib/api/community";
import { getSubscribedCommunity } from "lib/api/community";
// Components
import CommunityTop from "components/utils/community/CommunityTop";
import CommunityItem from "components/utils/community/CommunityItem";
import CommunityForm from "components/utils/community/CommunityForm";
import ModalSubscribeCommunity from "components/utils/community/ModalSubscribeCommunity";

const Community = () => {
  const [community, setCommunity] = useState<CommunityData | null>(null);
  const [comments, setComments] = useState<CommunityCommentData[]>([]);
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

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
            {comments.map((comment) => (
              <CommunityItem
                comment={comment}
                stringMyId={stringMyId || undefined}
              />
            ))}
          </div>
          <CommunityForm
            handleGetCommunityCommentData={handleGetCommunityCommentData}
            id={id ?? ""}
            stringMyId={stringMyId ?? ""}
          />
        </>
      )}

      {/* 画像拡大モーダル */}
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
