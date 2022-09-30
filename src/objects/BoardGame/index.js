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

  const $htmlCardsList = cards.map((card) => {
    return (
      CardFrontBack(card.icon, card.alt) + CardFrontBack(card.icon, card.alt)
    );
  });

  const $htmlCards = $htmlCardsList.join('');

  return /*html*/ `
    <section class='board-game'>
      ${$htmlCards}
    </section>
  `;
};

export default BoardGame;
