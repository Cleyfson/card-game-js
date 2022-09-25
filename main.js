import './src/styles/elements/base.css';
import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/global.css';

import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'afterbegin',
  `
  ${ScoreBoard()}
  ${BoardGame(6)}
  `
);

const $card = document.querySelectorAll('#card-struct');
$card.forEach((card) => {
  const $cardImage = card.firstElementChild;

  card.addEventListener('click', () => {
    $cardImage.classList.toggle('card-image-active');
  });
});
