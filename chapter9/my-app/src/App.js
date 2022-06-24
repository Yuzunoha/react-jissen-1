import { useContext, useState } from 'react';
import { Card } from './components/Card';
import { AdminFlagContext } from './components/providers/AdminFlagProvider';

export const App = () => {
  // 管理者フラグ
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // [切り替え]押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  const getMsgKanrisha = (b) => (b ? '管理者です' : '管理者以外です');
  return (
    <div>
      {/* 管理者フラグがtrueの時とそれ以外で文字を出し分け */}
      <span>{getMsgKanrisha(isAdmin)}</span>
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};
