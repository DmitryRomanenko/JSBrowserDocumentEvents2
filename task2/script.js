const showNotification = ({ top, right, html, className }) => {
  let notificationBlock = document.createElement('div');
  notificationBlock.textContent = html;
  notificationBlock.classList.add('notification');
  if (className) {
    notificationBlock.classList.add(className);
  }
  notificationBlock.style.cssText = `

  top: ${top}px;
  right: ${right}px`;
  document.body.append(notificationBlock);
  setTimeout(() => {
    notificationBlock.remove();
  }, 1500);
};

showNotification({
  top: 10,
  right: 10,
  html: 'Hello!',
  className: 'welcome',
});
