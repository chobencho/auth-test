import { Link } from 'react-router-dom'

const CommunityItem = () => {
  return (
    <>
      {/* 自分の送信コメント */}
      <div className="border m-4 text-right">
        <img
          src=""
          alt="boardData image"
          className="w-1/2 ml-auto"
        />
        <p className="whitespace-pre-wrap">内容</p>
      </div>

      {/* 他人お送信コメント */}
      <div className="border m-2 text-left">
        <img
          src=""
          alt="boardData image"
          className="w-1/2 mr-auto"
        />
        <p className="whitespace-pre-wrap">内容</p>
      </div>
    </>
  )
}

export default CommunityItem
