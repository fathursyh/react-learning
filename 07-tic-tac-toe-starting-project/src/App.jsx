import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "../winning";
import GameOver from "./components/GameOver";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
// computed
function deriveActivePlayer(gameTurn) {
    let currentPlayer = "X";
    if (gameTurn.length > 0 && gameTurn[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}
function deriveWinner(gameBoard, players) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = players[firstSquareSymbol];
        }
    }
    return winner;
}
function App() {
    const [players, setPlayers] = useState({
        'X': 'Player 1',
        'O': 'Player 2',
    })
    const [gameTurn, setGameTurn] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurn);
    let gameBoard = [...initialGameBoard.map(array => [...array])];
    for (const turn of gameTurn) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    

    const hasDraw = gameTurn.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurn((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
            return updatedTurns;
        });
    }

    function handleRestart() {
        setGameTurn([]);
    }
    function handlePlayerNameChange(symbol, newName) {
        setPlayers((prev) => {
            return {
                ...prev,
                [symbol]: newName
            };
        })
    }
    const winner = deriveWinner(gameBoard, players)
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName={"Player 1"} symbol={"X"} isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
                    <Player initialName={"Player 2"} symbol={"O"} isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
                </ol>
                { (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
            </div>
            <Log turns={gameTurn} />
        </main>
    );
}

export default App;
