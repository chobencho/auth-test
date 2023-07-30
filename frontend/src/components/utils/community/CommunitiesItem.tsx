import { Link } from 'react-router-dom'

const CommunitiesItem = () => {
  return (
    <>
      <Link to="/community/1" className="inline-block w-11/12 border p-2 m-2">
        <img src="" alt="" />
        <h4>コミュニティ1</h4>
      </Link>
      <Link to="/community/2" className="inline-block w-11/12 border p-2 m-2">
        <img src="" alt="" />
        <h4>コミュニティ2</h4>
      </Link>
      <Link to="/community/3" className="inline-block w-11/12 border p-2 m-2">
        <img src="" alt="" />
        <h4>コミュニティ3</h4>
      </Link>
    </>
  )
}

export default CommunitiesItem
