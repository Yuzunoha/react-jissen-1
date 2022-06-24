import { useState } from 'react';
import axios from 'axios';

// ユーザー取得ボタン押下アクション
export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  return { userList, isLoading, isError, onClickFetchUser };
};
