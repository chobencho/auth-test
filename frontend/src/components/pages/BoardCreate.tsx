// Components
import BoardCreateForm from "components/utils/board/BoardCreateForm";
import GoBackButton from "components/utils/common/GoBackButton";

const BoardCreate = () => {

  return (
    <>
      <p className="text-center py-3">掲示板新規作成</p>
      <BoardCreateForm />
    </>
  );
};

export default BoardCreate;
