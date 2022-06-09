export const App = () => {
  // ボタン押下時に呼ぶ関数
  const onClickButton = () => {
    alert();
  };
  return (
    <>
      <h1>こんにちは！！</h1>
      <p>お元気ですか。</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
