import './src/styles/elements/base.css';
import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';

import CardGame from './src/components/CardGame';
import PlayerNumber from './src/components/PlayerNumber';
import BoardGame from './src/components/Objects';

const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6);

const $htmlPlayerNumber = PlayerNumber(1) + PlayerNumber(2);

$root.insertAdjacentHTML('afterbegin', $htmlPlayerNumber + $htmlBoardGame);

const $card = document.querySelectorAll('#card-struct');

$card.forEach((card) => {
  const $cardImage = card.firstElementChild;

  card.addEventListener('click', () => {
    $cardImage.classList.toggle('card-image-active');
  });
});
