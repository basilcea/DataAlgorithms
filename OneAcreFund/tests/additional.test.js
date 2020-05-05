const assert = require('assert');
const getBagCounts = require('../bagCounts/getBagCounts');

describe("BagCounts", () => {
    it("returns the correct bag size counts for a multiple orders", () => {
        const clientOrders = [9, 10, 4.5];
        const availableBagSizes = [1, 2, 4];

        const result = getBagCounts(clientOrders, availableBagSizes);

        assert.deepEqual(result, [
            { size: 4, count: 5 },
            { size: 2, count: 1 },
            { size: 1, count: 1.5 }
        ]);
    });
    it("minimizes the number of bags per client", () => {
        const clientOrders = [6];
        const availableBagSizes = [1, 3, 4];

        const result = getBagCounts(clientOrders, availableBagSizes);

        assert.deepEqual(result, [
            { size: 4, count: 0 },
            { size: 3, count: 2 },
            { size: 1, count: 0}
        ]);
    });
})

