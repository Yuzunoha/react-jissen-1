export const App = () => {
  // ボタン押下時に呼ぶ関数
  const onClickButton = () => {
    alert();
  };
  const styleH1 = { color: 'red' };
  return (
    <>
      <h1 style={styleH1}>こんにちは！！</h1>
      <p>お元気ですか。</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
