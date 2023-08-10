import { useEffect, useState } from "react";

// Function
import { getUsers } from "lib/api/user";
// Interface
import { UserData } from "interfaces/index";
// Components
import UsersItem from "components/utils/home/UsersItem";
import SearchButton from "components/utils/home/SearchButton";
import { useAuthData } from "components/utils/common/useAuthData";


const Home = () => {
  // State
  const [users, setUsers] = useState<UserData[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  // Style
  // Id
  const { stringMyId, verifiedAge } = useAuthData();

  // ユーザ情報を取得
  const handleGetUsersData = async (tags: string[]) => {
    getUsers(stringMyId, tags).then((res) => setUsers(res.data));
  };

  useEffect(() => {
    handleGetUsersData(tags);
  }, []);

  return (
    <>

      <div className="w-96 m-auto flex flex-wrap pt-2">
        {/* 検索ボタン */}
        <SearchButton
          handleGetUsersData={handleGetUsersData}
          stringMyId={stringMyId ?? ""}
          tags={tags}
          verifiedAge={verifiedAge}
        />

        <div className="w-full flex flex-wrap">
          {/* ユーザ情報表示 */}
          {users.map((user) => (
            <UsersItem handleGetUsersData={handleGetUsersData} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
