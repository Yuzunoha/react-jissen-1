import { ChangeEvent, useState, FC } from 'react';
import styled from 'styled-components';

export const App: FC = () => {
  // テキストボックス State
  const [text, setText] = useState<string>('');

  // メモ一覧 State
  const [memos, setMemos] = useState<string[]>([]);

  return <h1>簡易メモアプリ</h1>;
};
