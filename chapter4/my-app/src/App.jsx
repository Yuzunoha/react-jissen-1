import { useState } from 'react';
import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  console.log('レンダリング');
  // Stateの定義
  const [num, setNum] = useState(0);
  // ボタン押下時に呼ぶ関数
  const onClickButton = () => {
    setNum((n) => n++);
    setNum((n) => n++);
    setNum((n) => n++);
    setNum((n) => ++n);
    setNum((n) => ++n);
  };

  const styleH1 = { color: 'red' };
  return (
    <>
      <h1 style={styleH1}>こんにちは！！</h1>
      <ColoredMessage color='blue'>お元気ですか？</ColoredMessage>
      <ColoredMessage color='pink'>元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
