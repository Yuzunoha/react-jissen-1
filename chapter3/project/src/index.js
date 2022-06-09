const main = () => {
  const p = console.log;

  const addContainerForBody = (text) => {
    const bodyEl = document.getElementsByTagName('body')[0];
    const newContainerEl = document.createElement('div');
    newContainerEl.className = 'container';
    const memoId = `memoId${new Date().getTime()}`;
    newContainerEl.id = memoId;
    const pEl = document.createElement('p');
    pEl.textContent = text;
    newContainerEl.appendChild(pEl);

    // コンテナに削除ボタンを追加する
    const btnDeleteEl = document.createElement('button');
    btnDeleteEl.textContent = '削除';
    btnDeleteEl.addEventListener('click', () => deleteMemo(memoId));
    newContainerEl.appendChild(btnDeleteEl);

    // ボディにコンテナを追加する
    bodyEl.appendChild(newContainerEl);
  };

  const onClickAddMemo = () => {
    // テキストを取得する
    const addTextEl = document.getElementById('add-text');
    const text = addTextEl.value;

    // 空は禁止する
    if (!text.trim().length) {
      return;
    }

    // コンテナを追加する
    addContainerForBody(text);
  };

  const deleteMemo = (memoId) => {
    const memo = document.getElementById(memoId);
    memo.remove();
  };

  const addButtonEl = document.getElementById('add-button');

  addButtonEl.addEventListener('click', onClickAddMemo);
};

document.addEventListener('DOMContentLoaded', main);
