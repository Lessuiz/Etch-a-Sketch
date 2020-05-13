let container = document.querySelector('#container');
let clearButton = document.querySelector('#clear');
let size = 16;
createDivs();

function createDivs() {
  for (let i = 0; i < (size**2); i++) {
    let newSquare = document.createElement('div');
    newSquare.addEventListener('mouseover', () => {
      newSquare.classList.add('highlight');
    });
    newSquare.classList.add('square');
    container.appendChild(newSquare);
  };
};

function clearContainer() {
  container.innerHTML = "";
};

clearButton.addEventListener('click', clearContainer);
