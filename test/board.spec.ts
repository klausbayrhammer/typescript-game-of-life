import {expect} from 'chai';
import setup from '../main/board';
import {CellState} from "../main/cellstate";

describe('board', function () {
    it('sets up an initial empty board', function () {
        const result = setup(0, 0);
        expect(result).to.deep.equal([[]]);
    });

    it('sets up a board with cells being dead by default', function () {
        const result = setup(1, 1);
        expect(result).to.deep.equal([[CellState.Dead]]);
    });

    it('sets up a board with cells being dead by default', function () {
        const result = setup(2, 4);
        expect(result).to.deep.equal([
            [CellState.Dead, CellState.Dead, CellState.Dead, CellState.Dead],
            [CellState.Dead, CellState.Dead, CellState.Dead, CellState.Dead]
        ]);
    });

    it('takes single coordinates to place alive cells', function () {
        const result = setup(2, 2, [{x: 0, y: 0}]);
        expect(result).to.deep.equal([
            [CellState.Alive, CellState.Dead],
            [CellState.Dead, CellState.Dead]
        ]);
    });

    it('takes multiple coordinates to place alive cells', function () {
        const result = setup(2, 2, [{x: 0, y: 0}, {x: 1, y: 1}]);
        expect(result).to.deep.equal([
            [CellState.Alive, CellState.Dead],
            [CellState.Dead, CellState.Alive]
        ]);
    });

});