import { useState } from "react";
// Interface
import { CommunityData } from "interfaces/index";
// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Components
import CommunitiesItem from "components/utils/community/CommunitiesItem";

interface ModalCategoryCommunityProps {
  onClose: Function;
  selectedCategoryData: CommunityData[];
}

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
  modalContent: {
    maxWidth: "80%",
    maxHeight: "80%",
    background: "#fff",
  },
  modalImg: {
    display: "block",
    margin: "0 auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ModalCategoryCommunity = ({
  onClose,
  selectedCategoryData,
}: ModalCategoryCommunityProps) => {
  const classes = useStyles();

  // プレビュークリア機能
  const handleClearPreview = () => {
    onClose();
  };

  return (
    <>
      <div className={`${classes.modal}`}>
        <p className={`${classes.modalContent}`}>
          {selectedCategoryData.map((categoryCommunity) => (
            <>
              <CommunitiesItem community={categoryCommunity} />
            </>
          ))}
        </p>
        <button
          onClick={() => handleClearPreview()}
          className="border text-2xl text-white bg-gray-600 px-3 py-1"
        >
          ×
        </button>
      </div>
    </>
  );
};

export default ModalCategoryCommunity;
