import type { TSquare } from "../../types";
import Square from "../Square/Square";
import "./GameBoard.css";
import type { FC } from "react";

interface Props {
    squares: TSquare[];
}

const GameBoard: FC<Props> = (props) => {
    console.log(props);
    return (
        <div className="gameBoard">
            {props.squares.map((square) => {
                return <Square key={`${square.id}`} />;
            })}
        </div>
    );
};

export default GameBoard;
