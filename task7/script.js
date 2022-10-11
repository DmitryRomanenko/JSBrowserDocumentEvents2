button.addEventListener('click', () => alert('1'));
button.removeEventListener('click', () => alert('1'));
button.onclick = () => alert(2);
//1 потом 2
// Сначала сработает addEventListener
// В removeEventListener передана функиця с одинаковым кодом, но она другая. Обработчик не будет удален
// Срабатывает onClick. Из за использования addEventListener обработчик не перезаписался.
