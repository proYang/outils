describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`outils.getKeyName(13) should return "Enter"`, function () {
            assert(outils.getKeyName(13) === 'Enter')
        });
    });

});