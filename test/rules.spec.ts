import {expect} from 'chai';
import checkIfLive from '../main/rules';
import {CellState} from '../main/cellstate';

describe('cell rules', function () {
    it('should die if it is alive and has fewer than two live neighbours', function () {
        const result = checkIfLive(CellState.Alive, 1);
        expect(result).to.equal(CellState.Dead);
    });

    it('stays alive if cell is alive and has two live neighbours', function () {
        const result = checkIfLive(CellState.Alive, 2);
        expect(result).to.equal(CellState.Alive);
    });

    it('stays alive if cell is alive and has three live neighbours', function () {
        const result = checkIfLive(CellState.Alive, 3);
        expect(result).to.equal(CellState.Alive);
    });

    it('dies if a cell is alive and has more than three live neighbours', function () {
        const result = checkIfLive(CellState.Alive, 4);
        expect(result).to.equal(CellState.Dead);
    });

    it('stays dead if cell is dead and has two neighbours', function () {
        const result = checkIfLive(CellState.Dead, 2);
        expect(result).to.equal(CellState.Dead);
    });

});