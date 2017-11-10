describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(outils.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(outils.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= outils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = outils.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})