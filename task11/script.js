const selectBLock = document.querySelector('#genres');
document.querySelectorAll('option').forEach((item) => item.removeAttribute('selected'));
const option = document.createElement('option');
option.setAttribute('selected', '');
option.setAttribute('value', 'classic');
option.textContent = 'Класика';
selectBLock.prepend(option);
