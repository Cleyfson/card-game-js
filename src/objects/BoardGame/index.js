import './style.css';

import CardFrontBack from '../../components/CardFrontBack';

const BoardGame = (amountCards) => {
  const $htmlCardFrontBack = CardFrontBack();
  const $htmlBoardGame = $htmlCardFrontBack.repeat(amountCards);

  return /*html*/ `
    <section class='board-game'>
      ${$htmlBoardGame}
    </section>
  `;
};

export default BoardGame;
