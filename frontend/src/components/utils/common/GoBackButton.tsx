import { useNavigate } from "react-router-dom"

const GoBackButton = () => {
  const navigate = useNavigate();

  // 画面をひとつ戻る関数
  const handleGoBack = () => {
    navigate(-1); // 画面を一つ戻る
  }
  return (
    <button onClick={handleGoBack} className="text-white bg-gray-600 p-2 m-2">戻る</button>
  )
}

export default GoBackButton
