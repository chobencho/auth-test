// Interface
import { CommunityData } from "interfaces/index";
// Style
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TocIcon from '@mui/icons-material/Toc';

export interface CommunityProps {
  community: CommunityData
}

const CommunityTop = ({ community }: CommunityProps) => {
  return (
    <>
      <div className="border flex">
        <span><ArrowBackIosNewIcon className="text-xl my-3 mx-5" /></span>
        <>
          <p>{community.title}</p>
          <img src="" alt="" />
        </>
        <span><TocIcon className="text-xl my-3 mx-5" /></span>
      </div>
    </>
  )
}

export default CommunityTop
