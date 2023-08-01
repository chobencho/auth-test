import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { AuthContext } from "App";
// Interface
import { CommunityData } from "interfaces/index";
import { CommunityCommentData } from "interfaces/index";
// Function
import { getCommunityData } from "lib/api/community";
import { getCommunityCommentData } from "lib/api/community";
// Components
import CommunityTop from "components/utils/community/CommunityTop";
import CommunityItem from "components/utils/community/CommunityItem";
import CommunityForm from "components/utils/community/CommunityForm";

const Community = () => {
  const [community, setCommunity] = useState<CommunityData | null>(null)
  const [comments, setComments] = useState<CommunityCommentData[]>([])

  const { id } = useParams()
  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

  // コミュニティ情報取得
  const handleGetCommunityData = async () => {
    getCommunityData(id).then((res) => setCommunity(res.data));
  };

  // コメント情報取得
  const handleGetCommunityCommentData = async () => {
    getCommunityCommentData(id, stringMyId).then((res) => setComments(res.data));
  };

  useEffect(() => {
    handleGetCommunityData();
    handleGetCommunityCommentData();
  }, []);

  return (
    <>
      {community &&
        <>
          <CommunityTop community={community} />
          {comments.map((comment) => (
            <CommunityItem
              comment={comment}
              stringMyId={stringMyId || undefined}
            />
          ))}
          <CommunityForm
            handleGetCommunityCommentData={handleGetCommunityCommentData}
            id={id ?? ""}
            stringMyId={stringMyId ?? ""}
          />
        </>
      }

    </>
  )
}

export default Community
