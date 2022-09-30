import './style.css';

import CardFrontBack from '../../components/CardFrontBack';

const BoardGame = () => {
  const cards = [
    {
      icon: 'javascript',
      alt: 'javascript logo',
    },
    {
      icon: 'html',
      alt: 'html logo',
    },
    {
      icon: 'css',
      alt: 'css logo',
    },
  ];

  const hideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove('-active'));
  };

  const changePlayer = () => {
    const $arrowDown = document.querySelector('.arrow-down');
    const value = $arrowDown.getAttribute('data-currentPlayer');
    $arrowDown.setAttribute('data-currentPlayer', value == 1 ? 2 : 1);
  };

  window.boardGame = {};
  window.boardGame.handleClick = () => {
    const $boardGame = document.querySelector('.board-game');
    const $cardsActive = $boardGame.querySelectorAll(
      '.card-front-back.-active'
    );

    if ($cardsActive.length === 2) {
      setTimeout(() => {
        hideCards($cardsActive);
        changePlayer();
      }, 1000);
    }
  };

  const $htmlCardsList = cards.map((card) => {
    return (
      CardFrontBack(card.icon, card.alt) + CardFrontBack(card.icon, card.alt)
    );
  });
  const $htmlCards = $htmlCardsList.join('');

  return /*html*/ `
    <section class='board-game' onClick='boardGame.handleClick()' >
      ${$htmlCards}
    </section>
  `;
};

export default BoardGame;
