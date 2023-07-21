import React from 'react'
import { useContext } from "react"
import { AuthContext } from "App"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { createMessage } from "lib/api/chat"

interface BoardFormProps {
  handleGetMessages: Function
}

const ChatForm = ({ handleGetMessages }: BoardFormProps) => {
  const [roomid, setRoomid] = useState<string>("")
  const [userid, setUserid] = useState<string>("")
  const [body, setBody] = useState<string>("")

  const { id } = useParams<{ id: string }>();

  const { currentUser } = useContext(AuthContext)
  const userId = currentUser ? currentUser.id : null
  const stringUserId = userId?.toString()

  const createFormData = (): FormData => {
    const formData = new FormData()


    formData.append("room_id", id ? id : "")
    formData.append("user_id", stringUserId ? stringUserId : "")
    formData.append("body", body)

    return formData
  }

  const handleCreateBoard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = createFormData()

    await createMessage(data)
      .then(() => {
        setRoomid("")
        setUserid("")
        setBody("")
        handleGetMessages()
      })
  }


  return (
    <>
      <form onSubmit={handleCreateBoard} className="border flex justify-between">

        <input
          type="hidden"
          value={id}
        />

        <input
          type="hidden"
          value={stringUserId}
        />

        <input
          type="text"
          className="border"
          placeholder="Hello World"
          value={body}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setBody(e.target.value) }}
        />
        <div>

          <button type="submit" disabled={!body || body.length < 0} className="border bg-gray-600 text-white px-2">送信</button>

        </div>
      </form>
    </>
  )
}

export default ChatForm
