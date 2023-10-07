const shoesAndSocksInventory = (products) => {
  const shoesAndSocks = products.filter(
    (product) => product.type === "shoes" || product.type === "socks"
  );
  const shoesAndSocksNumber = shoesAndSocks.map((product) => product.number);
  const totalNumber = shoesAndSocksNumber.reduce((acc, cur) => acc + cur, 0);
  return totalNumber;
};

//348
const players = [
  {
    name: "a",
    position: "a",
  },
  {
    name: "b",
    position: "b",
  },
  {
    name: "c",
    position: "a",
  },
  {
    name: "d",
    position: "b",
  },
  {
    name: "e",
    position: "e",
  },
];

const BestPosition = (players) => {
  //이미 점수 높은 순으로 정렬되어 있다.
  const bestPlayers = {};
  players.forEach((player) => {
    if (!bestPlayers[player.position]) {
      bestPlayers[player.position] = player.name;
    }
  });
  return bestPlayers;
};

console.log(BestPosition(players));

//349
const recommendPositionObj = (playersNameArr) => {
  return playersNameArr.map((playerName) => {
    return {
      name: playerName,
      position: recommendPosition(playerName),
    };
  });
};

//350
const evaluations = (recommendations) => {
  return recommendations.map((recommendation) => {
    const { name, position } = recommendation;
    const score = scorePlayers(name, position);
    return {
      name,
      position,
      score,
    };
  });
};
