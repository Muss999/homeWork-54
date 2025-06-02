import { useState } from "react";
import "./App.css";
import type { TSquare } from "./types";
import { makeSquares } from "./functions.ts";
import GameBoard from "./components/GameBoard/GameBoard.tsx";

const App = () => {
    const [squares, setSquares] = useState<TSquare[]>(makeSquares());

    const hideSquare = (id: string) => {
        const copySquares = [...squares];
        const index = copySquares.findIndex((square) => square.id === id);
        const copySquare = { ...copySquares[index] };
        copySquare.clicked = true;
        copySquares[index] = copySquare;
        setSquares(copySquares);
    };
    return (
        <div className="container">
            <GameBoard squares={squares} hideSquare={hideSquare} />
        </div>
    );
};

export default App;
