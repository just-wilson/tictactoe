import Square from "./Square";
import { calculateWinner } from './utility';

type boardProps = {
    xIsNext: boolean;
    squares: string[];
    currentMove: number;
    onPlay: (nextSquares: string[]) => void;
};

const Board = ({ xIsNext, squares, currentMove, onPlay }: boardProps) => {
    function handleClick(i: number) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (currentMove === 9) {
        status = 'It\'s a Draw!!';
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  
    return (
      <>
        <div className="status">{status}</div>
        {[0, 1, 2].map((rowIndex) => {
              return (
                  <div className="board-row" key={rowIndex}>
                      {[0, 1, 2].map((colIndex) => {
                          var index = rowIndex * 3 + colIndex;
                          return <Square key={index} value={squares[index]} onSquareClick={() => {handleClick(index)}} />
                      })}
                  </div>
              );
          })}
      </>
    );
  }

export default Board;