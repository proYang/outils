describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`outils.getKeyName(13) should return "Enter"`, function () {
            assert(outils.getKeyName(13) === 'Enter')
        });
        const keycode = 10000
        it(`outils.getKeyName(${keycode}) should return ''`, function () {
            assert(outils.getKeyName(keycode) === '')
        });
    });

});