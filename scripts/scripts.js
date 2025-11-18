let currentRange = 'weekly';


const iconMap = { 
    "Work": "images/icon-work.svg", 
    "Play": "images/icon-play.svg", 
    "Study": "images/icon-study.svg", 
    "Exercise": "images/icon-exercise.svg", 
    "Social": "images/icon-social.svg", 
    "Self Care": "images/icon-self-care.svg" 
};


const colorMap = { 
    "Work": "hsl(15, 100%, 70%)", 
    "Play": "hsl(195, 74%, 60%)", 
    "Study": "hsl(348, 100%, 68%)", 
    "Exercise": "hsl(145, 58%, 55%)", 
    "Social": "hsl(264, 60%, 55%)", 
    "Self Care": "hsl(43, 84%, 65%)" 
};

function renderCards(data) {
  const grid = document.querySelector('.activity-grid');
  grid.innerHTML = '';

  data.forEach(item => {
    const title = item.title;
    const icon = iconMap[title];
    const bgColor = colorMap[title];
    const current = item.timeframes[currentRange].current;
    const previous = item.timeframes[currentRange].previous;

    const card = document.createElement('div');
    card.className = 'activity-card';
    card.innerHTML = `
      <div class="card-bg" style="background-color: ${bgColor}">
        <img src="/assets/${icon}" class="card-icon" alt="${title} icon" />
      </div>
      <div class="card-content">
        <div class="card-header">
          <h3>${title}</h3>
          <img src="/assets/images/icon-ellipsis.svg" alt="Options" />
        </div>
        <div class="card-body">
          <h2>${current}hrs</h2>
          <p>Last ${currentRange} - ${previous}hrs</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

fetch('/data/time-data.json')
  .then(res => res.json())
  .then(data => {
    renderCards(data);

    const buttons = document.querySelectorAll('.timeframe-selector button');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentRange = btn.dataset.range;
        renderCards(data);
      });
    });
  });