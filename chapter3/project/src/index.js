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

addContainerForBody(1);
addContainerForBody(2);
addContainerForBody(3);
