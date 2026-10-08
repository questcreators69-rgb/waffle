const moodData = {
  happy: { title: 'happy & calm', desc: 'i found a really good song, the weather is nice, and my tea is warm. today is a gentle day.' },
  sleepy: { title: 'sleepy & slow', desc: 'currently 80% tea and 20% yawning. planning to do nothing productive for the rest of the day.' },
  music: { title: 'headphones on', desc: 'listening to my playlist on max volume. pretending my walk home from school is a movie scene.' },
  tired: { title: 'barely surviving', desc: 'trying to finish science homework while procrastinating on 12 different browser tabs.' }
};

const secretNotes = [
  'i spent 15 minutes looking for my phone yesterday while literally holding it in my hand.',
  'i keep buying cute stationery notebooks and then feel too scared to write on the first page.',
  'i make playlists for trips that haven\'t even been planned yet.',
  'thanks for visiting my little corner! hope you have a gentle day today.'
];

let secondsSpent = 0;

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.mood-btn');
  const titleElem = document.getElementById('moodTitle');
  const descElem = document.getElementById('moodDesc');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-mood');
      if (!moodData[key]) return;
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      titleElem.textContent = moodData[key].title;
      descElem.textContent = moodData[key].desc;
    });
  });

  const form = document.getElementById('guestbookForm');
  const nameInput = document.getElementById('noteAuthor');
  const msgInput = document.getElementById('noteMessage');
  const charCount = document.getElementById('charCount');
  const pinboard = document.getElementById('pinboardNotes');

  if (msgInput) {
    msgInput.addEventListener('input', () => {
      charCount.textContent = `${msgInput.value.length} / 120`;
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = nameInput.value.trim() || 'a visitor';
      const message = msgInput.value.trim();
      if (!message) return;

      const emptyMsg = document.getElementById('emptyMsg');
      if (emptyMsg) emptyMsg.remove();

      const card = document.createElement('div');
      card.className = 'note-item';
      card.innerHTML = `<p>"${message}"</p><div style="font-weight:bold; margin-top:4px;">- ${author}</div>`;
      pinboard.prepend(card);

      nameInput.value = '';
      msgInput.value = '';
      charCount.textContent = '0 / 120';
    });
  }

  const secretBtn = document.querySelector('.secret-btn');
  const secretOutput = document.getElementById('secretNoteOutput');
  if (secretBtn) {
    secretBtn.addEventListener('click', () => {
      const randomSecret = secretNotes[Math.floor(Math.random() * secretNotes.length)];
      secretOutput.textContent = randomSecret;
    });
  }

  const counterElem = document.getElementById('timeCounter');
  if (counterElem) {
    setInterval(() => {
      secondsSpent++;
      counterElem.textContent = `you've been hanging out in my corner for ${secondsSpent} seconds • thanks for stopping by!`;
    }, 1000);
  }
});