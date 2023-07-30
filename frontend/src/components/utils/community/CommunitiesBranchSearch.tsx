import CommunityCreate from "components/utils/community/CommunityCreate";

const CommunitiesBranchSearch = () => {
  return (
    <>
      <h5>カテゴリから探す</h5>
      <div className="border p-2 m-2 flex flex-wrap">
        <p className="border p-2 m-2 w-1/4 text-center">雑談</p>
        <p className="border p-2 m-2 w-1/4 text-center">恋愛</p>
        <p className="border p-2 m-2 w-1/4 text-center">相談</p>
        <p className="border p-2 m-2 w-1/4 text-center">趣味</p>
        <p className="border p-2 m-2 w-1/4 text-center">研究</p>
        <p className="border p-2 m-2 w-1/4 text-center">学会</p>
        <p className="border p-2 m-2 w-1/4 text-center">学問</p>
        <p className="border p-2 m-2 w-1/4 text-center">募集</p>
        <p className="border p-2 m-2 w-1/4 text-center">進路</p>
      </div>
      <h5>人気コミュニティ</h5>
      <div className="border p-2 m-2">
        <div className="border p-2 m-2">
          <img src="" alt="" />
          <h4>コミュニティ1</h4>
        </div>
        <div className="border p-2 m-2">
          <img src="" alt="" />
          <h4>コミュニティ2</h4>
        </div>
        <div className="border p-2 m-2">
          <img src="" alt="" />
          <h4>コミュニティ3</h4>
        </div>
      </div>
      <h5>新着コミュニティ</h5>
      <div className="border p-2 m-2">
        <div className="border p-2 m-2">
          <img src="" alt="" />
          <h4>コミュニティA</h4>
        </div>
        <div className="border p-2 m-2">
          <img src="" alt="" />
          <h4>コミュニティB</h4>
        </div>
        <div className="border p-2 m-2">
          <img src="" alt="" />
          <h4>コミュニティC</h4>
        </div>
      </div>
      <CommunityCreate />
    </>
  )
}

export default CommunitiesBranchSearch
