import { useState } from "react";
import "./App.css";
import type { Square } from "./types";
import { makeSquares } from "./functions.ts";

const App = () => {
    const [squares, setSquares] = useState<Square[]>(makeSquares());
    console.log(squares);
    return (
        <>
            <div></div>
        </>
    );
};

export default App;
