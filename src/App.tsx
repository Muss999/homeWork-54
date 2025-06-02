import { useState, type CSSProperties } from "react";
import "./App.css";
import type { TSquare } from "./types";
import { makeSquares } from "./functions.ts";
import GameBoard from "./components/GameBoard/GameBoard.tsx";
import Attempts from "./components/Attempts/Attempts.tsx";
import ResetButton from "./components/ResetButton/ResetButton.tsx";

let attempts: number = 0;
let isWin: boolean = false;

const App = () => {
    const [squares, setSquares] = useState<TSquare[]>(makeSquares());
    const gameBoardStyles: CSSProperties = {};

    const hideSquare = (id: string) => {
        attempts++;
        const copySquares = [...squares];
        const index = copySquares.findIndex((square) => square.id === id);
        const copySquare = { ...copySquares[index] };
        copySquare.clicked = true;
        copySquares[index] = copySquare;
        setSquares(copySquares);
    };

    const resetGame = () => {
        attempts = 0;
        isWin = false;
        const newSquares = makeSquares();
        setSquares(newSquares);
    };

    for (let i = 0; i < squares.length; i++) {
        if (squares[i].hasItem && squares[i].clicked) {
            isWin = true;
        }
    }

    if (isWin) {
        gameBoardStyles.pointerEvents = "none";
    }
    return (
        <div className="container">
            <div className="gameForm">
                <GameBoard
                    squares={squares}
                    hideSquare={hideSquare}
                    gameBoardStyles={gameBoardStyles}
                />
                <Attempts attempts={attempts} />
                {isWin ? (
                    <div style={{ fontSize: "30px" }}>You won!</div>
                ) : null}
                <ResetButton resetGame={resetGame} />
            </div>
        </div>
    );
};

export default App;
