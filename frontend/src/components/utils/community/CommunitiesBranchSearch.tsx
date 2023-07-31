import CommunityCreate from "components/utils/community/CommunityCreate";
// Interface
import { CommunityCategoryData } from "interfaces/index";
import { CommunityData } from "interfaces/index";

type CommunityProps = {
  communityCategory: CommunityCategoryData[];
  popularCommunity: CommunityData[];
  newCommunity: CommunityData[];
};


const CommunitiesBranchSearch = ({ communityCategory, popularCommunity, newCommunity }: CommunityProps) => {
  return (
    <>
      <h5>カテゴリから探す</h5>
      <div className="border p-2 m-2 flex flex-wrap">
        {communityCategory.map((category) => (
          <p className="border p-2 m-2 w-1/4 text-center">{category.communityCode}</p>
        ))}
      </div>

      <h5>人気コミュニティ</h5>

      <div className="border p-2 m-2">
        {popularCommunity.map((popCom) => (
          <div className="border p-2 m-2">
            <img src="" alt="" />
            <h4>{popCom.title}</h4>
          </div>
        ))}
      </div>

      <h5>新着コミュニティ</h5>
      <div className="border p-2 m-2">
        {newCommunity.map((newCom) => (
          <div className="border p-2 m-2">
            <img src="" alt="" />
            <h4>{newCom.title}</h4>
          </div>
        ))}
      </div>
      <CommunityCreate />
    </>
  )
}

export default CommunitiesBranchSearch
