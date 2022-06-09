const main = () => {
  const p = console.log;

  const addContainerForBody = (text) => {
    const bodyEl = document.getElementsByTagName('body')[0];
    const newContainerEl = document.createElement('div');
    newContainerEl.className = 'container';
    const pEl = document.createElement('p');
    pEl.textContent = text;
    newContainerEl.appendChild(pEl);
    bodyEl.appendChild(newContainerEl);
  };

  const onClickAddMemo = () => {
    alert('押された');
  };

  const addButtonEl = document.getElementById('add-button');

  addButtonEl.addEventListener('click', onClickAddMemo);
};

document.addEventListener('DOMContentLoaded', main);
