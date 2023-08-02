// Style
import { makeStyles, Theme } from "@material-ui/core/styles";

interface ModalImageProps {
  onClose: Function;
  image: string
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
  },
  modalImg: {
    display: "block",
    margin: "0 auto",
    maxWidth: "80%",
    maxHeight: "80%",
  },
}));

const ModalImage = ({ onClose, image }: ModalImageProps) => {
  const classes = useStyles();

  // プレビュークリア機能
  const handleClearPreview = () => {
    onClose();
  };

  // モーダルの外側をクリックしても何もしないようにする関数
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // クリックイベントが親要素に伝播しないようにする
  };

  return (
    <>
      <div className={classes.modal} onClick={handleClearPreview}>
        <img src={image} alt="modal image" className={`${classes.modalImg}`} onClick={handleBackdropClick} />
      </div>
    </>
  )
}

export default ModalImage