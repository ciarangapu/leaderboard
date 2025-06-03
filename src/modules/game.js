// class Game {
//   constructor() {
//     this.scores = JSON.parse(localStorage.getItem('scores')) || [];
//   }

//   addScore({ user, score }) {
//     this.scores.push({ user, score });
//     this.scores.sort((a, b) => b.score - a.score);
//     localStorage.setItem('scores', JSON.stringify(this.scores));
//   }

//   getLeaderBoard() {
//     return this.scores;
//   }
// }
// const game = new Game();
// const nameInput = document.getElementById('name-input');
// const scoreInput = document.getElementById('score-input');
// const submitBtn = document.getElementById('Submit-btn');
// const refreshBtn = document.getElementById('refreshBtn');
// const scoreList = document.querySelector('.list');
// // Add event listener for submit button
// submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const name = nameInput.value.trim();
//   const score = scoreInput.value.trim();
//   if (name && score) {
//     game.addScore({ user: name, score });
//     nameInput.value = '';
//     scoreInput.value = '';
//     updateLeaderboard();
//   }
// });
// // Update leaderboard function
// function updateLeaderboard() {
//   const leaderboard = game.getLeaderBoard();
//   scoreList.innerHTML = '';
//   leaderboard.forEach((score, index) => {
//     const scoreElement = document.createElement('div');
//     scoreElement.textContent = `${score.user} : ${score.score}`;
//     scoreList.appendChild(scoreElement);
//     scoreElement.style.backgroundColor = index % 2 === 0 ? '#c1c1c1' : 'white';
//     scoreElement.style.width = '100%';
//   });
// }
// // Initial leaderboard load
// updateLeaderboard();

class Game {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
  }

  addScore({ user, score }) {
    if (!user || !score) return;
    const scoreValue = parseInt(score, 10);
    if (Number.isNaN(scoreValue)) return;
    this.scores.push({ user, score: scoreValue });
    this.scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }

  getLeaderBoard() {
    return this.scores;
  }
}

const game = new Game();
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const submitBtn = document.getElementById('Submit-btn');
const refreshBtn = document.getElementById('refreshBtn');
const scoreList = document.querySelector('.list');

// Update leaderboard function
function updateLeaderboard() {
  const leaderboard = game.getLeaderBoard();
  scoreList.innerHTML = '';
  leaderboard.forEach((score, index) => {
    const scoreElement = document.createElement('div');
    scoreElement.textContent = `${score.user} : ${score.score}`;
    scoreList.appendChild(scoreElement);
    scoreElement.style.backgroundColor = index % 2 === 0 ? '#c1c1c1' : 'white';
    scoreElement.style.width = '100%';
  });
}

// Add event listener for submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();
  game.addScore({ user: name, score });
  nameInput.value = '';
  scoreInput.value = '';
  updateLeaderboard();
});

// Add event listener for refresh button
refreshBtn.addEventListener('click', () => {
  updateLeaderboard();
});

// Initial leaderboard load
updateLeaderboard();