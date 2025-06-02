import type { FC } from "react";
import "./Atttempts.css";

interface Props {
    attempts: number;
}

const Attempts: FC<Props> = ({ attempts }) => {
    return <div className="attempts">Attempts: {attempts}</div>;
};

export default Attempts;
