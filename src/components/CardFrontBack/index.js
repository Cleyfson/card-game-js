import CardGame from '../CardGame';
import './style.css';

const CardFrontBack = () => {
  return /*html*/ `
    <article class='card-front-back'>
      <div class='card -front'>
        ${CardGame('alura', 'logo da alura')}
        ${CardGame('alura', 'logo da alura')}
        ${CardGame('alura', 'logo da alura')}
      </div>
      <div class='card -back'>
        ${CardGame('javascript', 'logo do javascript')}
        ${CardGame('css', 'logo do css')}
        ${CardGame('html', 'logo do html')}
      </div>
    </article>
  `;
};

export default CardFrontBack;
