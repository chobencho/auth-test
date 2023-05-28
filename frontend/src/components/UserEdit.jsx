import React from 'react'

export const UserEdit = () => {
  return (
    <div>
      <table>
        <tr>
          <th>名前</th>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <th>趣味</th>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <th>自己紹介</th>
          <td><textarea name="" id="" cols="30" rows="10"></textarea></td>
        </tr>
      </table>
      <br />
      <br />
      <button>
        保存する
      </button>
    </div >
  )
}

