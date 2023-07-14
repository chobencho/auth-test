import { useContext } from "react"
import { AuthContext } from "App"

import { Link } from 'react-router-dom'

type ChildComponentProps = {
    id: string;
  };

const EditButton = ({id}: ChildComponentProps) => {
    const { currentUser } = useContext(AuthContext)

  return (
    <>
        {
            id == `${currentUser?.id}` ? (
                <Link to={`/user/${id}/edit`} className="border bg-gray-200">編集</Link>
            ) : (
                <Link to="/messages" className="border bg-gray-200">メッセージを送る</Link>
            )
        }
    </>
  )
}

export default EditButton