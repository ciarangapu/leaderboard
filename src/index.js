// import './style.css';
// import Game from './modules/game.js';
// import Display from './modules/display.js';

// const nameInput = document.getElementById('name-input');
// const scoreInput = document.getElementById('score-input');
// const submitBtn = document.getElementById('Submit-btn');
// const refreshBtn = document.getElementById('refreshBtn');
// const scoreList = document.querySelector('.list');
// const game = new Game();
// const display = new Display();
// let gameId;

// if (module.hot) {
//   module.hot.accept();
// }

// const startGame = () => {
//   game
//     .startGame('Football tournament')
//     .then((response) => {
//       gameId = response.id;
//       getLeaderBoard();
//     });
// };

// const getLeaderBoard = () => {
//   game.getLeaderBoard()
//     .then((res) => {
//       display.renderToPage(res);
//     });
// };

// const addScore = (event) => {
//   const score = {
//     gameId,
//     user: nameInput.value,
//     score: scoreInput.value,
//   };
//   event.preventDefault();

//   game.addScore(score)
//     .then(() => {
//       display.cleanPageInputs();
//       getLeaderBoard();
//     });
// };
// document.addEventListener('DOMContentLoaded', startGame);
// scoreForm.addEventListener('submit', addScore);
// refreshBtn.addEventListener('click', getLeaderBoard);

import './style.css';
import Game from './modules/game.js';
import Display from './modules/display.js';

const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const scoreForm = document.getElementById('score-form'); // Assuming you have a form with id 'score-form'
const refreshBtn = document.getElementById('refreshBtn');
const game = new Game();
const display = new Display();
let gameId;

if (module.hot) {
  module.hot.accept();
}

const getLeaderBoard = () => {
  game.getLeaderBoard()
    .then((res) => {
      display.renderToPage(res);
    });
};

const startGame = () => {
  game
    .startGame('Football tournament')
    .then((response) => {
      gameId = response.id;
      getLeaderBoard();
    });
};

const addScore = (event) => {
  const score = {
    gameId,
    user: nameInput.value,
    score: scoreInput.value,
  };
  event.preventDefault();

  game.addScore(score)
    .then(() => {
      display.cleanPageInputs();
      getLeaderBoard();
    });
};

document.addEventListener('DOMContentLoaded', startGame);
scoreForm.addEventListener('submit', addScore);
refreshBtn.addEventListener('click', getLeaderBoard);