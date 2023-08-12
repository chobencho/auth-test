import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Function
import { getChatRooms } from "lib/api/message";
import { useAuthData } from "components/utils/common/useAuthData";
// Interface
import { ChatUserData } from "interfaces/index";
import moment from "moment"; // moment ライブラリをインポート
import "moment/locale/ja"; // 日本語ロケールをインポート

const Messages = () => {
  // State
  const [chatUsers, setChatUsers] = useState<ChatUserData[]>([]);
  //Id
  const { stringMyId } = useAuthData();

  // 自分の入っているチャットルームを取得
  const handleGetChatRooms = async () => {
    getChatRooms(stringMyId).then((res) => setChatUsers(res.data));
  };

  useEffect(() => {
    handleGetChatRooms();
  }, []);

  return (
    <>
      <p className="text-center text-sm pt-4 pb-2">チャット一覧</p>
      {chatUsers?.map((chatUser) => (
        <Link
          to={`/message/${chatUser.roomId}?buddyId=${chatUser.id}`}
          className="border m-2 inline-block"
        >
          <p>名前:{chatUser.name}</p>
          {chatUser.image?.url ? (
            <img
              src={chatUser.image.url}
              alt="userData image"
              className="w-1/2"
            />
          ) : null}
          <p>最新やり取り:{chatUser.latestMessageBody}</p>
          <p className="">
            {moment(chatUser.createdAt).format("MM月DD日 HH:mm")}
          </p>
        </Link>
      ))}
    </>
  );
};

export default Messages;
