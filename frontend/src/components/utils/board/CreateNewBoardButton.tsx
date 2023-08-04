import { Link } from 'react-router-dom'

export interface CreateNewBoardButtonProps {
  verifiedAge: boolean
}

const CreateNewBoardButton = ({ verifiedAge }: CreateNewBoardButtonProps) => {
  return (
    <div className={"relative border bg-gray-600 text-white p-2 m-auto w-1/2"}>
      新規作成
      {!verifiedAge && (
        <span
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          年齢確認が完了していません
        </span>
      )}
      {verifiedAge && (<Link to={`/boardCreate`} className="absolute top-0 left-0 w-full h-full opacity-0"></Link>)}
    </div>
  )
}

export default CreateNewBoardButton
