import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  // ボタン押下時に呼ぶ関数
  const onClickButton = () => {
    alert();
  };

  // ピンクように追加
  const contentPinkStyle = {
    color: 'pink',
    fontSize: '20px',
  };

  const styleH1 = { color: 'red' };
  return (
    <>
      <h1 style={styleH1}>こんにちは！！</h1>
      <ColoredMessage color='blue' message='お元気ですか？' />
      <p style={contentPinkStyle}>元気です！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
