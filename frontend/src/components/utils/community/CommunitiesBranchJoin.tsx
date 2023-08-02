import CommunitiesItem from "components/utils/community/CommunitiesItem";
import { CommunityData } from "interfaces/index";

type CommunityProps = {
  myCommunity: CommunityData[];
};

const CommunitiesBranchJoin = ({ myCommunity }: CommunityProps) => {
  return (
    <>
      {myCommunity.map((community) => (
        <CommunitiesItem community={community} />
      ))}

    </>
  )
}

export default CommunitiesBranchJoin