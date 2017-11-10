describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            outils.setCookie('test', 'getTestValue')
        })
        it(`outils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(outils.getCookie('test') === 'getTestValue')
        })
        after(function () {
            outils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            outils.setCookie('test', 'removeTestValue')
        })
        it(`outils.removeCookie('test') should return false`, function () {
            outils.removeCookie('test')
            assert.notEqual(outils.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`outils.getCookie('test', 'setCookie') should return true`, function () {
            outils.setCookie('test', 'setCookie')
            assert(outils.getCookie('test') === 'setCookie')
        })
        after(function () {
            outils.removeCookie('test')
        })
    })
})