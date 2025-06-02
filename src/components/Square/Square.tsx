import "./Square.css";
import { type CSSProperties, type FC, type MouseEventHandler } from "react";

interface Props {
    hasItem: boolean;
    clicked: boolean;
    id: string;
    onHideSquare: MouseEventHandler;
}

const Square: FC<Props> = (props) => {
    const squareStyles: CSSProperties = {};
    if (props.clicked) {
        console.log(1222);
        squareStyles.pointerEvents = "none";
        squareStyles.opacity = "0";
    }
    return (
        <div
            className="square"
            style={squareStyles}
            onClick={props.onHideSquare}
        ></div>
    );
};

export default Square;
