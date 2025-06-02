import type { TSquare } from "../../types";
import Square from "../Square/Square";
import "./GameBoard.css";
import type { CSSProperties, FC } from "react";

interface Props {
    squares: TSquare[];
    gameBoardStyles: CSSProperties;
    hideSquare: (id: string) => void;
}

const GameBoard: FC<Props> = (props) => {
    return (
        <div className="gameBoard" style={props.gameBoardStyles}>
            {props.squares.map((square) => {
                return (
                    <Square
                        key={`${square.id}`}
                        id={square.id}
                        hasItem={square.hasItem}
                        clicked={square.clicked}
                        onHideSquare={() => props.hideSquare(square.id)}
                    />
                );
            })}
        </div>
    );
};

export default GameBoard;
