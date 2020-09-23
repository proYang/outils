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

        // 测试 0.1 ~ 1.2 之间只能取得 1，不能为 0
        it(`1 === outils.randomNum(0.1, 1.2) should return true`, function () {
            let num = outils.randomNum(0.1, 0.2)
            assert(num === 1)
        });
    });
})