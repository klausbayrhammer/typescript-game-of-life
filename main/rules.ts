export default checkIfAlive
import {CellState} from "./cellstate";

function checkIfAlive(currentState: CellState, numberOfNeighbours: number): CellState {
    if (numberOfNeighbours === 3) {
        return CellState.Alive;
    }
    if (numberOfNeighbours === 2) {
        return currentState;
    }
    return CellState.Dead;
}