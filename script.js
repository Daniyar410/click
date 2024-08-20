const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const box = document.querySelector('#box img');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const box2 = document.querySelector('#box2 img');

console.log(btn);

btn.onclick = () => {
  body.classList.add('red');
  body.classList.remove('blue');
};

btn2.onclick = () => {
  body.classList.add('blue');
  body.classList.remove('red');
};
btn3.onclick = () => {
  box.classList.add('open');
  box.classList.remove('close');

};
btn4.onclick = () => {
  box.classList.add('close');
  box.classList.remove('open');
  box.classList.remove('anim');
};
btn5.onclick = () => {
  box.classList.add('anim');
};
btn6.onclick = () => {
//   box.classList.add('anim')
  // box.classList.add('open');
  box2.classList.add('incom');
  box.classList.add('close');
};
