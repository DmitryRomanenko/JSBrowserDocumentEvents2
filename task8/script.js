const ball = document.querySelector('#ball');
const field = document.querySelector('#field');
const fieldCoord = field.getBoundingClientRect();
let ballW = ball.clientWidth;
let ballH = ball.clientHeight;
let fieldW = field.clientWidth;
let fieldH = field.clientHeight;
ball.style.cssText = 'position: absolute';
field.style.cssText = 'position: relative';

field.addEventListener('click', (e) => {
  let coordTop = e.clientY - fieldCoord.top - field.clientTop - ballH / 2;
  let coordLeft = e.clientX - fieldCoord.left - field.clientLeft - ballH / 2;
  let coordRight = coordLeft + ballW > fieldW;
  let coordBottom = coordTop + ballH > fieldH;

  if (coordRight) coordLeft = fieldW - ballW;
  if (coordBottom) coordTop = fieldH - ballH;
  if (coordTop < 0) coordTop = 0;
  if (coordLeft < 0) coordLeft = 0;

  ball.style.cssText = `
    position: absolute;
      top: ${coordTop}px;
      left: ${coordLeft}px;
    }`;
});
