import { useState } from 'react';
import { useFetchUsers } from './hooks/useFetchUsers';

export const App = () => {
  const { userList, onClickFetchUser } = useFetchUsers();
  console.log(userList);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ユーザリストをhtmlにする関数
  const dispUserList = () => userList.map((user) => <p key={user.id}>{`${user.id}:${user.name}(${user.age}歳)`}</p>);

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {isError && <p style={{ color: 'red' }}>エラーが発生しました</p>}
      {isLoading ? <p>データ取得中です</p> : dispUserList()}
    </div>
  );
};
