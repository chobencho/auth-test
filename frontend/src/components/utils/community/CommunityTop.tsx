import { useNavigate } from "react-router-dom";
import { useState } from "react";
// Interface
import { CommunityData } from "interfaces/index";
// Function
import { withdrawCommunity } from "lib/api/community";
// Style
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TocIcon from "@mui/icons-material/Toc";
import { makeStyles, Theme } from "@material-ui/core/styles";

export interface CommunityProps {
  community: CommunityData;
  community_id: string | undefined;
  user_id: string | undefined;
}

const useStyles = makeStyles((theme) => ({
  mainContent: {
    position: "fixed",
    top: 55,
    left: 0,
    display: "flex",
    width: "100%",
    background: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 100,
  },
  title: {
    fontSize: "1.4em",
    margin: "auto 0",
  },
  menuButton: {
    fontSize: "1.4em",
    margin: "auto 10px auto auto",
  },
  slideUpContent: {
    position: "fixed",
    top: -200,
    left: 0,
    width: "100%",
    height: "300px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
    padding: 20,
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.2)",
    transform: "translateY(0)",
    transition: "transform 0.3s ease-in-out",
    zIndex: 50,
  },
  slideUpContentActive: {
    transform: "translateY(100%)",
  },
}));

const CommunityTop = ({ community, community_id, user_id }: CommunityProps) => {
  const [showSlideUpContent, setShowSlideUpContent] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  const handleToggleSlideUpContent = () => {
    setShowSlideUpContent((prev) => !prev);
  };

  const handleWithdrawCommunity = async () => {
    withdrawCommunity(community_id, user_id).then(() =>
      navigate("/communities")
    );
  };

  return (
    <>
      <div className={`${classes.mainContent}`}>
        <span onClick={() => navigate("/communities")}>
          <ArrowBackIosNewIcon className="text-xl my-3 mx-5" />
        </span>
        <>
          <p className={`${classes.title}`}>{community.title}</p>
          <img src="" alt="" />
        </>

        <TocIcon
          className={`${classes.menuButton}`}
          onClick={handleToggleSlideUpContent}
        />
      </div>
      <div
        className={`${classes.slideUpContent} ${
          showSlideUpContent ? classes.slideUpContentActive : ""
        }`}
      >
        <h4 className="mt-5">概要</h4>
        <p>{community.body}</p>
        <h4 className="mt-5">カテゴリ</h4>
        <p>{community.communityCode}</p>
        <h4 className="mt-5">退会</h4>
        <button
          className="border text-white bg-gray-600 p-1 text-sm"
          onClick={() => handleWithdrawCommunity()}
        >
          このコミュニティを退会する
        </button>
      </div>
    </>
  );
};

export default CommunityTop;
