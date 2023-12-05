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
      if (calculateWinner(squares).winner || squares[i]) {
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
   
    const winningLine = calculateWinner(squares);
    const winner = winningLine.winner;
    const line = winningLine.line;

    let status;
    if (winner) {
      const rand = Math.floor(Math.random() * 4);
      const looser = winner === 'X' ? 'O' : 'X';
      if (rand === 0) {
        status = 'Big dub for ' + winner;
      } else if (rand === 1) { 
        status = looser + " got clapped by " + winner + "!";
      } else if (rand === 2) {
        status = looser + " be catching L's";
      } else {
        status = winner + " is GOATED!";
      }
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
                          return <Square key={index} 
                                  value={squares[index]} 
                                  isWinningSquare={line != null && line.includes(index)} 
                                  onSquareClick={() => {handleClick(index)}} 
                                  />
                      })}
                  </div>
              );
          })}
      </>
    );
  }

export default Board;