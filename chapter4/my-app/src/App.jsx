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
      <ColoredMessage color='blue' message='お元気ですか？' />
      <ColoredMessage color='pink' message='元気です！' />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
