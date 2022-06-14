export const App = () => {
  // ボタン押下時に呼ぶ関数
  const onClickButton = () => {
    alert();
  };

  // CSSオブジェクト
  const contentStyle = {
    color: 'blue',
    fontSize: '20px',
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
      <p style={contentStyle}>お元気ですか。</p>
      <p style={contentPinkStyle}>元気です！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
