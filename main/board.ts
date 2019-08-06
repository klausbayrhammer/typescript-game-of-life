import {CellState} from "./cellstate";

interface Point {
    x: number;
    y: number;
}

function createEmptyBoard() {
    return [[]];
}

function createBoardWithCells(width: number, height: number, coordinates: Point[]) {
    const board = [];
    for (let i = 0; i < width; i++) {
        board.push([]);
        for (let j = 0; j < height; j++) {
            board[i][j] = computeStateAtPointXY(coordinates, i, j);
        }
    }
    return board;
}

function computeStateAtPointXY(coordinates: Point[], boardXIndex: number, boardYIndex: number) {
    const aliveCellAtPositionXY = coordinates.some(({x, y}) => x === boardXIndex && y === boardYIndex);
    return aliveCellAtPositionXY ? CellState.Alive : CellState.Dead;
}

export default function setup(width: number, height: number, coordinates: Point[] = []) {
    return width === 0 ? createEmptyBoard() : createBoardWithCells(width, height, coordinates);
}