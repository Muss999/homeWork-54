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
        squareStyles.pointerEvents = "none";
        squareStyles.opacity = "0";
    }
    if (props.clicked && props.hasItem) {
        return (
            <div className="ring">
                <span>o</span>
            </div>
        );
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
