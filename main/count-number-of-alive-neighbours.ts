import {CellState} from "./cellstate";

export default countNumberOfAliveNeighbours;

function countNumberOfAliveNeighbours(neighbours: CellState[]) {
    return neighbours.filter(cell => cell === CellState.Alive).length;
}