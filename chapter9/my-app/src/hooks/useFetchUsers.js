import { useState } from 'react';

// ユーザー一覧を取得するカスタムフック
export const useFetchUsers = () => {
  const [userList, setUserList] = useState([{ id: 1 }]);
  const onClickFetchUser = () => alert('関数実行');

  return { userList, onClickFetchUser };
};
