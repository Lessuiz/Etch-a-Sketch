let container = document.querySelector('#container');
let clearButton = document.querySelector('#clear');
let size = 16;
createDivs();

function createDivs() {
  for (let i = 0; i < (size**2); i++) {
    let newSquare = document.createElement('div');
    newSquare.style.width = `${640/size}px`
    newSquare.style.height = `${640/size}px`
    newSquare.addEventListener('mouseover', () => {
      newSquare.classList.add('highlight');
    });
    newSquare.classList.add('square');
    container.appendChild(newSquare);
  };
};

function clearContainer() {
  container.innerHTML = "";
  size = prompt("Insira o tamanho: ")
  if (size > 64) {
    alert('Insira um número menor.')
    clearContainer()
  }else if (size < 1) {
    alert('Insira um número maior.')
    clearContainer()
  }else {
    createDivs()
  }
};

clearButton.addEventListener('click', clearContainer);
