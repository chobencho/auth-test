import { useContext, useEffect, useState } from "react";
import { AuthContext } from "App";
// Interface
import { CommunityCategoryData } from "interfaces/index";
import { CommunityData } from "interfaces/index";
// Function
import { getCommunityCategoryData } from "lib/api/community";
import { getPopularCommunityData } from "lib/api/community";
import { getNewCommunityData } from "lib/api/community";
import { getMyCommunityData } from "lib/api/community";
// Components
import CommunitiesBranchSearch from "components/utils/community/CommunitiesBranchSearch";
import CommunitiesBranchJoin from "components/utils/community/CommunitiesBranchJoin";

const Communities = () => {
  const [communityCategory, setCommunityCategory] = useState<CommunityCategoryData[]>([])
  const [popularCommunity, setPopularCommunity] = useState<CommunityData[]>([])
  const [newCommunity, setNewCommunity] = useState<CommunityData[]>([])
  const [myCommunity, setMyCommunity] = useState<CommunityData[]>([])
  const [searchButtonActive, setSearchButtonActive] = useState(true);
  const [joinButtonActive, setJoinButtonActive] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const myId = currentUser ? currentUser.id : null;
  const stringMyId = myId?.toString();

  // コミュニティを探すボタンをクリックしたときの処理
  const handleSearchClick = () => {
    setSearchButtonActive(true);
    setJoinButtonActive(false);
  };

  // 参加中のコミュニティボタンをクリックしたときの処理
  const handleJoinClick = () => {
    setSearchButtonActive(false);
    setJoinButtonActive(true);
  };

  // コミュニティカテゴリ取得
  const handleGetCommunityCategoryData = async () => {
    getCommunityCategoryData().then((res) => setCommunityCategory(res.data));
  };

  // 人気コミュニティ取得
  const handleGetPopularCommunityData = async () => {
    getPopularCommunityData().then((res) => setPopularCommunity(res.data));
  };

  // 新着コミュニティ取得
  const handleGetNewCommunityData = async () => {
    getNewCommunityData().then((res) => setNewCommunity(res.data));
  };

  // 参加中のコミュニティ取得
  const handleGetMyCommunityData = async () => {
    getMyCommunityData(stringMyId).then((res) => setMyCommunity(res.data));
  };

  useEffect(() => {
    handleGetCommunityCategoryData();
    handleGetPopularCommunityData();
    handleGetNewCommunityData();
    handleGetMyCommunityData();
  }, []);

  return (
    <>
      <div className="flex justify-between w-2/3 m-auto">
        <button
          className={`border p-2 m-2 ${searchButtonActive ? "border-red-500" : ""}`}
          onClick={handleSearchClick}
        >
          コミュニティを探す
        </button>
        <button
          className={`border p-2 m-2 ${joinButtonActive ? "border-red-500" : ""}`}
          onClick={handleJoinClick}
        >
          参加中のコミュニティ
        </button>
      </div>
      {searchButtonActive ?
        <CommunitiesBranchSearch
          communityCategory={communityCategory}
          popularCommunity={popularCommunity}
          newCommunity={newCommunity}
        />
        :
        <CommunitiesBranchJoin
          myCommunity={myCommunity}
        />
      }
    </>
  )
}

export default Communities
