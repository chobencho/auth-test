import { useState } from "react";
import CommunityCreate from "components/utils/community/CommunityCreate";
// Interface
import { CommunityData } from "interfaces/index";
// Components
import CommunitiesItem from "components/utils/community/CommunitiesItem";
import ModalCategoryCommunity from "components/utils/community/ModalCategoryCommunity";

import Category from "common/category";

type CommunityProps = {
  allCommunity: CommunityData[];
  popularCommunity: CommunityData[];
  newCommunity: CommunityData[];
};

const CommunitiesBranchSearch = ({
  allCommunity,
  popularCommunity,
  newCommunity,
}: CommunityProps) => {
  // モーダルを制御するstate
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryData, setSelectedCategoryData] = useState<
    CommunityData[]
  >([]);

  const handleDisplayCategoryCommunity = (value: string) => {
    setSelectedCategory(value); // 選択されたカテゴリをセット
    const categoryData = allCommunity.filter(
      (com) => String(com.categoryId) === value
    );
    setSelectedCategoryData(categoryData);
    setShowModal(true);
  };

  // プレビュークリア機能
  const handleClearPreview = () => {
    setShowModal(false); // モーダルを非表示にする
  };

  return (
    <>
      <h5>カテゴリから探す</h5>
      <div className="border p-2 m-2 flex flex-wrap">
        {Category.CAT_OPTIONS.map((option) => {
          const stringValue = String(option[0]);
          return (
            <button
              key={option[0]}
              value={option[0]}
              className="border p-2 m-2 w-1/4 text-center"
              onClick={() => handleDisplayCategoryCommunity(stringValue)}
            >
              {option[1]}
            </button>
          );
        })}
      </div>

      <h5>人気コミュニティ</h5>

      <div className="border p-2 m-2">
        {popularCommunity.map((popCom) => (
          <CommunitiesItem community={popCom} />
        ))}
      </div>

      <h5>新着コミュニティ</h5>
      <div className="border p-2 m-2">
        {newCommunity.map((newCom) => (
          <CommunitiesItem community={newCom} />
        ))}
      </div>
      <CommunityCreate />
      {/* メッセージ入力モーダル */}
      {showModal ? (
        <ModalCategoryCommunity
          onClose={handleClearPreview}
          selectedCategoryData={selectedCategoryData}
        />
      ) : null}
    </>
  );
};

export default CommunitiesBranchSearch;
