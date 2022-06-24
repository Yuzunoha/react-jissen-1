import { useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => {
    // ボタン押下時
    setIsLoading(true);
    setIsError(false);

    // リザルトをユーザリストに格納する関数
    const setUserListFromResult = (result) => {
      const users = result.data.map((user) => ({
        id: user.id,
        name: `${user.lastname} ${user.firstname}`,
        age: user.age,
      }));
      setUserList(users);
    };

    // APIを叩く
    const url = 'https://markdown.yuzunoha.net/api/react/chapter9';
    axios
      .get(url)
      .then(setUserListFromResult)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

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
