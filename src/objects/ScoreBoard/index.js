import PlayerName from '../../components/PlayerName';
import VsPlayer from '../../components/VsPLayer';
import './style.css';

const ScoreBoard = () => {
  return /*html*/ `
    <header class='score-board'>
      ${PlayerName('Player 1')}
      ${VsPlayer()}
      ${PlayerName('Plater 2')}
    </header>
  `;
};

export default ScoreBoard;
