describe('Dom API:', function () {
    describe('#getScrollTop()', function () {
        let length = 20
        before(function () {
            outils.setScrollTop(length)
        })
        it(`outils.getScrollTop() should return true`, function () {
            assert(outils.getScrollTop() === length)
        })
        after(function () {
            outils.setScrollTop(0)
        })
    });

    describe('#setScrollTop()', function () {
        let length = 20
        it(`outils.getScrollTop() should return true`, function () {
            outils.setScrollTop(length)
            assert(outils.getScrollTop() === length)
        })
        after(function () {
            outils.setScrollTop(0)
        })
    });

    describe('#offset()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            div.style.position = 'absolute'
            div.style.top = '200px'
            div.style.left = '300px'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`outils.offset() should return true`, function () {
            let offset = outils.offset($ele)
            assert(offset.left === 300 && offset.top === 200)
        })
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#scrollTo()', function () {
        let y = 100
        let duration = 300
        it(`outils.scrollTo() should return true`, function (done) {
            outils.scrollTo(y, duration)
            setTimeout(function () {
                assert(outils.getScrollTop() === y)
                done()
            }, duration + 100)
        })
        after(function () {
            outils.setScrollTop(0)
        })
    });

});