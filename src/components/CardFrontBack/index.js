import CardGame from '../CardGame';

const CardFrontBack = () => {
  return /*html*/ `
    <article class='card-front-back'>
      ${CardGame('javascript', 'logo do javascript')}
      ${CardGame('css', 'logo do css')}
      ${CardGame('html', 'logo do html')}
      ${CardGame('alura', 'logo da alura')}
    </article>
  `;
};

export default CardFrontBack;
