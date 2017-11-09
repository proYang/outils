describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`outils.getExplore() should return "Chrome"`, function () {
            assert(/^Chrome:/.test(outils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`outils.getOS() should return "windows"`, function () {
            assert(outils.getOS() === 'windows')
        });
    });
});