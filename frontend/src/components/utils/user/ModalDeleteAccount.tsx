// Style
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useContext } from "react"
import { AuthContext } from "App"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
// Function
import { deleteAccount } from "lib/api/auth"

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
    padding: "20px",
  },
}));

interface ModalDeleteAccountProps {
  onClose: Function;
}

const ModalDeleteAccount = ({ onClose }: ModalDeleteAccountProps) => {
  const navigate = useNavigate()
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)
  // Style
  const classes = useStyles();

  // モーダル非表示
  const handleClearModal = () => {
    onClose();
  };

  const handleDeleteAccount = async () => {
    try {
      const res = await deleteAccount()
      console.log(res)
      if (res.status === 200) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")
        setIsSignedIn(false)
        navigate("/signin")
        console.log("Succeeded in delete account")
      } else {
        console.log("Failed in delete account")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className={`${classes.modal}`}>
        <div className={`${classes.modalContent}`}>
          <p>本当にアカウント削除しますか？</p>
          <button
            onClick={() => handleDeleteAccount()}
            className="border text-2xl text-white bg-gray-600 px-3 py-1"
          >
            削除する
          </button>
          <button
            onClick={() => handleClearModal()}
            className="border text-2xl text-white bg-gray-600 px-3 py-1"
          >
            ×
          </button>
        </div>
      </div>
    </>
  )
}

export default ModalDeleteAccount
