import { useState } from "react";
import CommunityCreate from "components/utils/community/CommunityCreate";
// Interface
import { CommunityData } from "interfaces/index";
// Components
import CommunitiesItem from "components/utils/community/CommunitiesItem";
import ModalCategoryCommunity from "components/utils/community/ModalCategoryCommunity";
// Style
import Category from "common/category";
// Function
import { clearModal } from "lib/api/helper";

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

  // モーダルクリア機能
  const handleCloseModal = () => {
    clearModal(setShowModal); // handleClearPreviewを使うように変更
  };

  return (
    <>
      <h5 className="text-sm text-center pt-5 pb-3">カテゴリから探す</h5>
      <div className=" flex flex-wrap px-3">
        {Category.CAT_OPTIONS.map((option) => {
          const stringValue = String(option[0]);
          return (
            <button
              key={option[0]}
              value={option[0]}
              className=" w-1/3 text-center flex items-center justify-center py-2"
              onClick={() => handleDisplayCategoryCommunity(stringValue)}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/hobby/${option[2]}`}
                className="w-1/2 h-11 w-11 rounded-3xl mr-2"
                alt=""
              />
              <span className="text-sm">{option[1]}</span>
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
          onClose={handleCloseModal}
          selectedCategoryData={selectedCategoryData}
        />
      ) : null}
    </>
  );
};

export default CommunitiesBranchSearch;
