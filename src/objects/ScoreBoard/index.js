import ArrowDown from '../../components/ArrowDown';
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPLayer';
import './style.css';

const ScoreBoard = () => {
  return /*html*/ `
    <header class='score-board'>
      ${ArrowDown()}
      ${PlayerName('Player1')}
      ${PlayerScore(1)}
      ${VsPlayer()}
      ${PlayerScore(1)}
      ${PlayerName('Player2')}
    </header>
  `;
};

export default ScoreBoard;
