import { useState } from "react";
import "./App.css";
import type { TSquare } from "./types";
import { makeSquares } from "./functions.ts";
import GameBoard from "./components/GameBoard/GameBoard.tsx";

const App = () => {
    const [squares, setSquares] = useState<TSquare[]>(makeSquares());
    return (
        <div className="container">
            <GameBoard squares={squares} />
        </div>
    );
};

export default App;
