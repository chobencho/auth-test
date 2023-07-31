import { Link } from 'react-router-dom'
import { CommunityData } from "interfaces/index";

type CommunityProps = {
  community: CommunityData;
};

const CommunitiesItem = ({ community }: CommunityProps) => {
  return (
    <>
      <Link to={`/community/${community.id}`} className="inline-block w-11/12 border p-2 m-2">
        <img src="" alt="" />
        <h4>{community.title}</h4>
      </Link>
    </>
  )
}

export default CommunitiesItem
