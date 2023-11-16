// import Square from "./Square";

// type boardProps = {
//     squares: string[];
//     isNextX: boolean;
// };

// const Board = ({squares, isNextX}: boardProps) => {
//     const handelSquareClick = (index: number) => {
//         if  (squares[index] !== null) {
//             return;
//         } else if (isNextX) {
//             squares[index] = "X";
//         } else {
//             squares[index] = "O";
//         }
//     };
//     // do some logic here

//     return (
//         <>
//         {[0, 1, 2].map((rowIndex) => {
//             <div className="board-row">
//                 {[0, 1, 2].map((colIndex) => {
//                     const index = rowIndex * 3 + colIndex;
//                     return <Square key={index} value={squares[index]} handelSquareClick={() => {handelSquareClick(index)}} />
//                 })}
//             </div>
//         })}
//         </>
//     );
// };

// export default Board;