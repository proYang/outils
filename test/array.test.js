describe('Array API:', function () {
	describe('#arrayEqual()', function () {
		it(`outils.arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function () {
			assert.notEqual(outils.arrayEqual([0, 2, 3, 4], [1, 2, 3]), true)
		})
		it(`outils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
			assert.notEqual(outils.arrayEqual([0, 2, 3], [1, 2, 3]), true)
		})
		it('outils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
			assert(outils.arrayEqual([1, 2, 3], [1, 2, 3]))
		})
		const arr = [8, 2, 3, 4, 7, 8]
		it(`outils.arrayEqual([${arr},${arr}]) should return true`, function () {
			assert(outils.arrayEqual(arr, arr))
		})
	})

	describe('#arrayInclude()', function () {
		it('outils.arrayInclude([0,2,3,4],[1,2,3]) should return false', function () {
			assert.notEqual(outils.arrayInclude([0, 2, 3, 4], [1, 2, 3]), true)
		})
		it('outils.arrayInclude([0,2,3,4],[-1,0,2,3,4]) should return false', function () {
			assert.notEqual(outils.arrayInclude([0, 2, 3, 4], [-1, 0, 2, 3, 4]), true)
		})
		it('outils.arrayInclude([0,2,3,4],[2,3,4]) should return true', function () {
			assert(outils.arrayInclude([0, 2, 3, 4], [2, 3, 4]), true)
		})
		const arr = [8, 2, 3, 4, 7, 8]
		it(`outils.arrayInclude(${arr},${arr}) should return true`, function () {
			assert(outils.arrayInclude(arr, arr), true)
		})
	})
})
