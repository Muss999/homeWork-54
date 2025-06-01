import type { Square } from "./types";

export const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const makeSquares = (): Square[] => {
    const squares = [];
    const randomIndex = getRandomNumber(0, 35);
    for (let i = 0; i < 36; i++) {
        const squareObj: Square = {
            hasItem: false,
            clicked: false,
        };
        squares.push(squareObj);
    }
    squares[randomIndex].hasItem = true;
    return squares;
};
