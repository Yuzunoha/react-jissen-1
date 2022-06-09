const main = () => {
  const p = console.log;

  const addContainerForBody = (text) => {
    const bodyEl = document.getElementsByTagName('body')[0];
    const newContainerEl = document.createElement('div');
    newContainerEl.className = 'container';
    newContainerEl.id = `memoId${new Date().getTime()}`;
    const pEl = document.createElement('p');
    pEl.textContent = text;
    newContainerEl.appendChild(pEl);
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

  const addButtonEl = document.getElementById('add-button');

  addButtonEl.addEventListener('click', onClickAddMemo);
};

document.addEventListener('DOMContentLoaded', main);
