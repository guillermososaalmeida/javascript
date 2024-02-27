import { initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
<div id= "dashboard">
    <ul>
    <li><figure id="favorites"><img src="https://res.cloudinary.com/dluwybogp/image/upload/v1690387399/Hub%20App/avatar_ozq4sx.png" alt="go to fav pokemons"><h2>Favorites</h2></figure></li>
    <li><figure id="pokedex"><img src="https://res.cloudinary.com/dluwybogp/image/upload/v1690387537/Hub%20App/pokemon_go_play_game_cinema_film_movie_4_icon-icons.com_69161_l3di8k.png" alt="go to pokedex" ><h2>Pokedex</h2></figure></li>
    <li><figure id="quiz"><img src="https://res.cloudinary.com/dluwybogp/image/upload/v1690386805/5410236881679911902-512_uwlzti.png" alt="go to first game"><h2>WTP?</h2></figure></li>
    <li><figure id="memory"><img src="https://res.cloudinary.com/dluwybogp/image/upload/v1690386062/5966817_uav6dy.png" alt="go to memory game"><h2>Memory Game</h2></figure></li>
    <li><figure id="ticTacToe"><img src="https://res.cloudinary.com/dluwybogp/image/upload/v1690754358/Hub%20App/avatar_jmjnu1.png" alt="go to tic tac toe game"><h2>Tic Tac Toe</h2></figure></li>
</div>
`;

const addListeners = () => {
  const pokedex = document.getElementById("pokedex");
  pokedex.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const quiz = document.getElementById("quiz");
  quiz.addEventListener("click", () => {
    initControler("Quiz");
  });
  const memory = document.getElementById("memory");
  memory.addEventListener("click", () => {
    initControler("Memory");
  });
  const tictactoe = document.getElementById("ticTacToe");
  tictactoe.addEventListener("click", () => {
    initControler("TicTacToe");
  });
  const favorites = document.getElementById("favorites");
  favorites.addEventListener("click", () => {
    initControler("Favorites");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector(".navHeader").style.display = "flex";
  addListeners();
};
