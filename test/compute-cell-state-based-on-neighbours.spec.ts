import {expect} from 'chai';
import countNumberOfAliveNeighbours from '../main/count-number-of-alive-neighbours';
import {CellState} from "../main/cellstate";

describe('count-number-of-alive-neighbours', function () {
    it('counts 0 for an empty array', function () {
        const result = countNumberOfAliveNeighbours([]);
        expect(result).to.equal(0);
    });

    it('counts 1 for an array containing a single live cell', function () {
        const result = countNumberOfAliveNeighbours([CellState.Alive]);
        expect(result).to.equal(1);
    });

    it('counts 1 for an array containing dead cells', function () {
        const result = countNumberOfAliveNeighbours([CellState.Alive, CellState.Dead]);
        expect(result).to.equal(1);
    });

});