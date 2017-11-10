describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('outils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(outils.isEmail("leiquanlive.com"))
        });
        it('outils.isEmail("leiquan@live.com") should return true ', function () {
            assert(outils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('outils.isIdCard("622224188203234033") should return true ', function () {
            assert(outils.isIdCard("622224188203234033"))
        });
        it('outils.isIdCard("zas224188203234033") should return false', function () {
            assert(!outils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('outils.isPhoneNum("18882324234") should return true ', function () {
            assert(outils.isPhoneNum("18882324234"))
        });
        it('outils.isPhoneNum("8618882324234") should return true ', function () {
            assert(outils.isPhoneNum("8618882324234"))
        });
        it('outils.isPhoneNum("5534553") should return false', function () {
            assert(!outils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('outils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(outils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('outils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(outils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('outils.isUrl("www.baidu.com") should return true', function () {
            assert(outils.isUrl("www.baidu.com"))
        });
        it('outils.isUrl("baidu.com") should return true', function () {
            assert(outils.isUrl("baidu.com"))
        });
        it('outils.isUrl("http://baiducom") should return false', function () {
            assert(!outils.isUrl("http://baiducom"))
        });
    });

});