describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`outils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${outils.getExplore()}`)
            assert(/^Chrome:/.test(outils.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`outils.getOS() should return "windows"`, function () {
            console.log(`OS:${outils.getOS()}`)
            assert(outils.getOS() === 'windows' || outils.getOS() === 'MacOSX' || outils.getOS() === 'linux')
        });
    });
});