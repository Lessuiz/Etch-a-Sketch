let container = document.querySelector('#container')
for (let i = 0; i < 256; i++) {
  let newSquare = document.createElement('div');
  newSquare.classList.add('square');
  container.appendChild(newSquare);
}
