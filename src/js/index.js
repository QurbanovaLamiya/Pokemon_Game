var gameArr = ["w", "f", "e"];
var userScorePanel = document.querySelector("#userScorePanel");
var compScorePanel = document.querySelector("#compScorePanel");
var userGame = document.querySelector("#userGame");
var compGame = document.querySelector("#compGame");
var userImg = document.querySelector("#userImg");
var compImg = document.querySelector("#compImg");
var userScore = 0;
var compScore = 0;

function compAttack(arr) {
  var randomLetter = Math.floor(Math.random() * arr.length);
  return arr[randomLetter];
}

function resetGame() {
  userScore = 0;
  compScore = 0;

  userGame.innerHTML = "BEGIN";
  compGame.innerHTML = "BEGIN";

  userGame.classList.add("text-white");
  compGame.classList.add("text-white");

  userGame.classList.remove("text-danger");
  compGame.classList.remove("text-success");

  userGame.classList.remove("text-success");
  compGame.classList.remove("text-danger");

  userGame.classList.remove("text-warning");
  compGame.classList.remove("text-warning");

  userScorePanel.innerHTML = `Score: 0`;
  compScorePanel.innerHTML = `Score: 0`;
}

function startGame(e) {
  var userAttack = e.key.toLowerCase();
  var comp = compAttack(gameArr);

  userImg.src = `./src/img/${userAttack}.png`;
  compImg.src = `./src/img/${comp}.png`;

  if (gameArr.indexOf(userAttack) === -1) {
    alert(`Please select one of the " w e f "buttons to play`);
    return;
  }

  if (
    (userAttack === "e" && comp === "w") ||
    (userAttack === "f" && comp === "e") ||
    (userAttack === "w" && comp === "f")
  ) {
    userScore++;
    userScorePanel.innerHTML = `Score: ${userScore}`;

    userGame.innerHTML = "WIN";
    compGame.innerHTML = "LOSE";

    userGame.classList.add("text-success");
    compGame.classList.add("text-danger");

    userGame.classList.remove("text-danger");
    compGame.classList.remove("text-success");

    userGame.classList.remove("text-warning");
    compGame.classList.remove("text-warning");

    console.log("User Win !!!");
  } else if (userAttack === comp) {
    userGame.innerHTML = "DRAW";
    compGame.innerHTML = "DRAW";

    userGame.classList.add("text-warning");
    compGame.classList.add("text-warning");

    userGame.classList.remove("text-danger");
    compGame.classList.remove("text-success");

    userGame.classList.remove("text-success");
    compGame.classList.remove("text-danger");

    console.log("Draw - Draw");
  } else {
    userGame.innerHTML = "LOSE";
    compGame.innerHTML = "WIN";

    compScore++;
    compScorePanel.innerHTML = `Score: ${compScore}`;

    userGame.classList.add("text-danger");
    compGame.classList.add("text-success");

    userGame.classList.remove("text-success");
    compGame.classList.remove("text-danger");

    userGame.classList.remove("text-warning");
    compGame.classList.remove("text-warning");

    console.log("Comp Win !!!");
  }

  if (userScore === 5 && userScore > compScore) {
    alert("User Win!!!!");
    resetGame();
  } else if (compScore === 5 && userScore < compScore) {
    alert("Comp Win!!!!");
    resetGame();
  }

  console.log("user", userAttack);
  console.log("comp", comp);
}

window.onkeydown = startGame;
