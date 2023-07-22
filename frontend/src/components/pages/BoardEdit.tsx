import { useState, useEffect } from "react"

const BoardEdit = () => {
  const [name, setName] = useState<string>("")
  const handleEditUserData = () => {

  }

  return (
    <>
      <form onSubmit={handleEditUserData}>

        <h6>名前</h6>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }}
        />
      </form>
    </>
  )
}

export default BoardEdit
