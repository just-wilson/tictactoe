type squareProps = {
    value: string;
    onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: squareProps) => {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default Square;