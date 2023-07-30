import CommunitiesBranchSearch from "components/utils/community/CommunitiesBranchSearch";
import CommunitiesBranchJoin from "components/utils/community/CommunitiesBranchJoin";

const Communities = () => {
  return (
    <>
      <div className="flex justify-between w-2/3 m-auto">
        <div className="border p-2 m-2">コミュニティを探す</div>
        <div className="border p-2 m-2">参加中のコミュニティ</div>
      </div>
      <CommunitiesBranchSearch />
      <CommunitiesBranchJoin />

    </>
  )
}

export default Communities
