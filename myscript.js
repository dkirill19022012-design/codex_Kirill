const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// Начальные значения масштаба
let noScale = 1;
let yesScale = 1;

// Функция «убегания» кнопки Нет
function taunt() {
  // Случайное смещение в пределах 150px
  const dx = (Math.random() - 0.5) * 300;
  const dy = (Math.random() - 0.5) * 300;
  
  // Уменьшаем кнопку «Нет» на 10% при каждой попытке
  noScale = Math.max(0.2, noScale - 0.1); 
  // Увеличиваем кнопку «Да»
  yesScale += 0.2;

  // Применяем CSS-переменные
  noBtn.style.setProperty('--dx', `${dx}px`);
  noBtn.style.setProperty('--dy', `${dy}px`);
  noBtn.style.setProperty('--shrink', noScale);
  yesBtn.style.setProperty('--grow', yesScale);
  
  // Добавляем класс для активации стилей, если его еще нет
  noBtn.classList.add('btn-no');
  yesBtn.classList.add('btn-yes');
}

// Срабатывает при наведении мыши (для ПК) или касании (для телефонов)
noBtn.addEventListener('pointerenter', taunt);

// Действие при клике на «Да»
yesBtn.onclick = () => {
  // swapToHappyCat(); // Функция замены котика на счастливого
  burstHearts();     // Эффект появления сердечек
};

// function swapToHappyCat() {
//   const video = document.querySelector('video');
//   video.src = 'happy-cat.mp4'; // Путь к новому видео
// }

function burstHearts() {
  alert('Ура! ❤️'); // Временная заглушка вместо анимации
}
