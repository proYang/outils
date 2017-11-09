
describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`should return false`, function () {
            assert.notEqual(outils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('should return true [1, 2, 3], [1, 2, 3]', function () {
            assert(outils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`[${arr}] should return true`, function () {
            assert(outils.arrayEqual(arr, arr))
        });
    });
});