describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`should return "Chrome"`, function () {
            assert(/^Chrome:/.test(outils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`should return "windows"`, function () {
            assert(outils.getOS() === 'windows')
        });
    });
});