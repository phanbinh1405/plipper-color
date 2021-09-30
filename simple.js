const color = ['violet', 'green', '#36adad', 'Rgba(133,122,200)']

const buttonChangeColor = document.querySelector('.btn');
const colorName = document.querySelector('.color');

buttonChangeColor.onclick = function () {

  const randomNumber = random();
  
  document.body.style.backgroundColor = color[randomNumber]
  colorName.textContent = color[randomNumber]
}

function random () {
  return Math.floor(Math.random() * color.length)
}