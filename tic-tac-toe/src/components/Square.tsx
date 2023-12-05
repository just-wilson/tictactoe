type squareProps = {
    value: string;
    isWinningSquare: boolean;
    onSquareClick: () => void;
};

const Square = ({ value, isWinningSquare, onSquareClick }: squareProps) => {
    return (
      <button className={`square ${isWinningSquare ? 'winningSquare' : ''}`} onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default Square;