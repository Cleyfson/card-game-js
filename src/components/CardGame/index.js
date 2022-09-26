import './style.css';

const CardGame = (icon = 'alura', alt = 'logo da alura') => {
  return /*html*/ `
    <article id="card-struct" class='card-game'>
      <img id="card-image" class="card-image" src='../../../images/${icon}.png' alt='${alt}'>
    </article>
  `;
};

export default CardGame;
