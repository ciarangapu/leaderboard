// class Game {
//   async startGame(name) {
//     const response = await fetch('https://leaderboard-api-tqaq.onrender.com/games', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name }),
//     });
//     return response.json();
//   }

//   async addScore({ gameId, user, score }) {
//     await fetch('https://leaderboard-api-tqaq.onrender.com/scores', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ gameId, user, score }),
//     });
//   }

//   async getLeaderBoard() {
//     const response = await fetch('https://leaderboard-api-tqaq.onrender.com/scores');
//     return response.json();
//   }
// }
class Fetch {
  static async startGame(name) {
    const response = await fetch('https://leaderboard-api-tqaq.onrender.com/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    return response.json();
  }

  static async addScore({ gameId, user, score }) {
    const response = await fetch('https://leaderboard-api-tqaq.onrender.com/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gameId, user, score }),
    });
    return response;
  }

  static async getLeaderBoard() {
    const response = await fetch('https://leaderboard-api-tqaq.onrender.com/scores');
    return response.json();
  }
}

export default Fetch; // Don't forget to export the class