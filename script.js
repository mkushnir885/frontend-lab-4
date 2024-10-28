const elementById = document.getElementById('birthplaceTitle');
const elementBySelector = document.querySelector('.birthplace');

const image = document.getElementById('imgBarcelona');
const buttonAdd = document.getElementById('buttonAdd');
const buttonIncrease = document.getElementById('buttonIncrease');
const buttonDecrease = document.getElementById('buttonDecrease');
const buttonDelete = document.getElementById('buttonDelete');

elementById.addEventListener('click', () => {
  const backgroundColor = generateColor();
  const textColor = generateColor();
  elementById.style.backgroundColor = backgroundColor;
  elementById.style.color = textColor;
});

elementBySelector.addEventListener('click', () => {
  const backgroundColor = generateColor();
  const textColor = generateColor();
  elementBySelector.style.backgroundColor = backgroundColor;
  elementBySelector.style.color = textColor;
});

buttonAdd.addEventListener('click', () => {
  image.style.display = 'inline';
});

buttonDelete.addEventListener('click', () => {
  image.style.display = 'none';
});

buttonIncrease.addEventListener('click', () => {
  const imageWidth = image.clientWidth;
  image.style.width = imageWidth * 1.15 + 'px';
});

buttonDecrease.addEventListener('click', () => {
  const imageWidth = image.clientWidth;
  image.style.width = imageWidth * 0.85 + 'px';
});

const generateColor = () => {
  const hexArray = '0123456789ABCDEF';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += hexArray[Math.floor(Math.random() * 16)];
  }
  return `#${code}`;
};
