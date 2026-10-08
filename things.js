const randomJoys = [
  'drink a warm cup of masala chai while listening to soft rain sounds',
  'doodle a silly little cat on the margin of your science notebook',
  'put your headphones on and listen to your favorite song from class 8',
  'take a quick picture of the evening sky right now through your window',
  'send a random silly meme to your best friend with no context',
  'put your phone away for 10 minutes and read a chapter of a cozy book',
  'reorganize your desk and arrange your pastel highlighters by color',
  'open your window, feel the cool breeze, and take three deep slow breaths',
  'write down three tiny things that made you smile this week'
];

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnRandom');
  const resultDisplay = document.getElementById('randomResult');

  if (btn && resultDisplay) {
    btn.addEventListener('click', () => {
      btn.disabled = true;
      resultDisplay.style.opacity = '0.4';

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * randomJoys.length);
        resultDisplay.textContent = randomJoys[randomIndex];
        resultDisplay.style.opacity = '1';
        btn.disabled = false;
      }, 180);
    });
  }
});