describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`outils.addClass($ele, 'test') should return true`, function () {
            outils.addClass($ele, 'test')
            assert(outils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            outils.addClass($ele, 'test')
        })
        it(`outils.hasClass($ele, 'test') should return true`, function () {
            assert(outils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            outils.addClass($ele, 'test')
        })
        it(`outils.removeClass($ele, 'test') should return false`, function () {
            outils.removeClass($ele, 'test')
            assert.notEqual(outils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});