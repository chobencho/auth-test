import { useEffect, useState } from "react";
// Interface
import { CommunityData } from "interfaces/index";
// Function
import { getAllCommunityData } from "lib/api/community";
import { getPopularCommunityData } from "lib/api/community";
import { getNewCommunityData } from "lib/api/community";
import { getMyCommunityData } from "lib/api/community";
// Components
import CommunitiesBranchSearch from "components/utils/community/CommunitiesBranchSearch";
import CommunitiesBranchJoin from "components/utils/community/CommunitiesBranchJoin";
import { useAuthData } from "components/utils/common/useAuthData";

const Communities = () => {
  const [allCommunity, setAllCommunity] = useState<CommunityData[]>([]);
  const [popularCommunity, setPopularCommunity] = useState<CommunityData[]>([]);
  const [newCommunity, setNewCommunity] = useState<CommunityData[]>([]);
  const [myCommunity, setMyCommunity] = useState<CommunityData[]>([]);
  const [searchButtonActive, setSearchButtonActive] = useState(true);
  const [joinButtonActive, setJoinButtonActive] = useState(false);

  const { stringMyId } = useAuthData();

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

  // コミュニティ情報一括取得
  const handleGetCommunityData = async () => {
    // Promise.allを使ってすべての非同期処理が完了するのを待つ
    const [allCommunityRes, popularCommunityRes, newCommunityRes, myCommunityRes] = await Promise.all([
      getAllCommunityData(),
      getPopularCommunityData(),
      getNewCommunityData(),
      getMyCommunityData(stringMyId),
    ])

    setAllCommunity(allCommunityRes.data);
    setPopularCommunity(popularCommunityRes.data);
    setNewCommunity(newCommunityRes.data);
    setMyCommunity(myCommunityRes.data);
  }

  useEffect(() => {
    handleGetCommunityData();
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
      {searchButtonActive ? (
        <CommunitiesBranchSearch
          allCommunity={allCommunity}
          popularCommunity={popularCommunity}
          newCommunity={newCommunity}
        />
      ) : (
        <CommunitiesBranchJoin myCommunity={myCommunity} />
      )}
    </>
  );
};

export default Communities;
