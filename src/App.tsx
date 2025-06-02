import { useState } from "react";
import "./App.css";
import type { TSquare } from "./types";
import { makeSquares } from "./functions.ts";
import GameBoard from "./components/GameBoard/GameBoard.tsx";
import Attempts from "./components/Attempts/Attempts.tsx";

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
    console.log(attempts);
    return (
        <div className="container">
            <GameBoard squares={squares} hideSquare={hideSquare} />
            <Attempts attempts={attempts} />
        </div>
    );
};

export default App;
