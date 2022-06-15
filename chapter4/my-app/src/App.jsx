import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  // ボタン押下時に呼ぶ関数
  const onClickButton = () => {
    alert();
  };

  const styleH1 = { color: 'red' };
  return (
    <>
      <h1 style={styleH1}>こんにちは！！</h1>
      <ColoredMessage color='blue'>お元気ですか？</ColoredMessage>
      <ColoredMessage color='pink'>元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
