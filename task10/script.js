document.querySelector('.remove-button').remove();
document.querySelectorAll('.pane').forEach((item) => {
  const btn = document.createElement('button');
  btn.classList.add('remove-button');
  btn.textContent = '[x]';
  btn.style.cssText = `
    position: absolute;
    top: 0;
    right: 10px;`;
  item.style.cssText = 'position: relative';
  item.append(btn);
});
