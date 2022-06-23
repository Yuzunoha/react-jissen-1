import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider';

const style = {
  width: '100px',
  padding: '6px',
  borderRadius: '8px',
};

export const EditButton = ({ isAdmin }) => {
  // useContextの引数に参照するContextwo指定する
  const contextValue = useContext(AdminFlagContext);
  alert(JSON.stringify(contextValue));
  // isAdminがfalse(管理者でない)のときにボタンを非活性にする
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
