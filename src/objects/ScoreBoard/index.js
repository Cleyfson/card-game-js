import PlayerName from '../../components/PlayerName';
import './style.css';

const ScoreBoard = () => {
  return /*html*/ `
    <header class='score-board'>
      ${PlayerName('Player 1')}
      ${PlayerName('Plater 2')}
    </header>
  `;
};

export default ScoreBoard;
