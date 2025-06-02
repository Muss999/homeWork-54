import { useState } from "react";
import "./App.css";
import type { TSquare } from "./types";
import { makeSquares } from "./functions.ts";
import GameBoard from "./components/GameBoard/GameBoard.tsx";
import Attempts from "./components/Attempts/Attempts.tsx";
import ResetButton from "./components/ResetButton/ResetButton.tsx";

let attempts: number = 0;
const App = () => {
    const [squares, setSquares] = useState<TSquare[]>(makeSquares());

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
        const newSquares = makeSquares();
        setSquares(newSquares);
    };
    return (
        <div className="container">
            <div className="gameForm">
                <GameBoard squares={squares} hideSquare={hideSquare} />
                <Attempts attempts={attempts} />
                <ResetButton resetGame={resetGame} />
            </div>
        </div>
    );
};

export default App;
