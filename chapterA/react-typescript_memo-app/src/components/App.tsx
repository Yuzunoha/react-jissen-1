import { ChangeEvent, useState, FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import { MemoList } from './MemoList';

export const App: FC = () => {
  // テキストボックス State
  const [text, setText] = useState<string>('');

  // メモ一覧 State
  const [memos, setMemos] = useState<string[]>([]);

  // テキストボックス入力時に入力内容を State に設定する
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 追加ボタン押下時
  const onClickAdd = () => {
    // State 変更を正常に検知させるための新たな配列を生成する
    const newMemos = [...memos];
    // テキストボックスの入力内容をメモ配列に追加
    newMemos.push(text);
    setMemos(newMemos);
    // テキストボックスクリア
    setText('');
  };

  // 削除ボタン押下時(何番目が押されたかを引数で受け取る)
  const onClickDelete = useCallback(
    (index: number) => {
      // State 変更を正常に検知させるための新たな配列を生成する
      const newMemos = [...memos];
      // メモ配列から該当の要素を削除する
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return (
    <div>
      <h1>簡易メモアプリ</h1>
      <input type='text' value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
