// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
// Function
import { subscribeCommunity } from "lib/api/community";
// Components
import GoBackButton from "components/utils/common/GoBackButton";

export interface ModalSubscribeProps {
  community_id: string | undefined;
  user_id: string | undefined;
  handleGetSubscribedCommunity: Function;
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
    width: "80%",
    maxHeight: "80%",
    background: "#fff",
    textAlign: "center",
  },
}));

const ModalSubscribeCommunity = ({
  community_id,
  user_id,
  handleGetSubscribedCommunity,
}: ModalSubscribeProps) => {
  const classes = useStyles();

  // 送信用フォームデータ作成関数
  const createFormData = (): FormData => {
    const formData = new FormData();

    formData.append("community_id", community_id ? community_id : "");
    formData.append("user_id", user_id ? user_id : "");

    return formData;
  };

  const handleSubscribeCommunity = async (
    e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = createFormData();

    await subscribeCommunity(data).then(() => {
      handleGetSubscribedCommunity();
    });
  };

  return (
    <>
      <form onSubmit={handleSubscribeCommunity} className={`${classes.modal}`}>
        <div className={`${classes.modalContent}`}>
          <h1 className="text-2xl m-5">このコミュニティに参加しますか？</h1>
          <button
            type="submit"
            className="border bg-gray-600 text-white px-2 m-5"
          >
            参加する
          </button>
          <GoBackButton />
        </div>
      </form>
    </>
  );
};

export default ModalSubscribeCommunity;
