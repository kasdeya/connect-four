import './Rules.css';
import checkMark from './assets/images/icon-check.svg';

interface Props {
  handleGoMenu: () => void;
}

const Rules = ({ handleGoMenu }: Props) => {
  return (
    <div className="rulesContainer">
      <h1>Rules</h1>
      <h2>Objective</h2>
      <p>
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </p>
      <h2>How to play</h2>
      <ol>
        <li>Red goes first in the first game.</li>
        <li>
          Players must alternate turns, and only one disc can be dropped in each
          turn.
        </li>
        <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
        <li>The starter of the previous game goes second on the next game.</li>
      </ol>
      <img
        className="checkMark"
        src={checkMark}
        alt="check mark"
        onClick={(e) => handleGoMenu()}
      />
    </div>
  );
};

export default Rules;
