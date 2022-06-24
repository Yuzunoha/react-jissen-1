import { useCallback, useState } from 'react';

// メモ一覧に関するカスタムフック
export const useMemoList = () => {
  // メモ一覧 State
  const [memos, setMemos] = useState<string[]>([]);

  // メモ追加ロジック
  const addTodo = useCallback(
    (text: string) => {
      // State 変更を正常に検知させるための新たな配列を生成する
      const newMemos = [...memos];
      // テキストボックスの入力内容をメモ配列に追加
      newMemos.push(text);
      setMemos(newMemos);
    },
    [memos]
  );

  // メモ削除ロジック
  const deleteTodo = useCallback(
    (index: number) => {
      // State 変更を正常に検知させるための新たな配列を生成する
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
