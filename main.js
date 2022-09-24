import './src/styles/elements/base.css';
import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/settings/global.css';

import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'afterbegin',
  `
 ${PlayerName('Player 1')}
 ${PlayerName('Plater 2')}
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
