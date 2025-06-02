import type { FC } from "react";
import "./ResetButton.css";

interface Props {
    resetGame: () => void;
}

const ResetButton: FC<Props> = ({ resetGame }) => {
    return (
        <div>
            <button className="resetButton" type="button" onClick={resetGame}>
                Reset
            </button>
        </div>
    );
};

export default ResetButton;
