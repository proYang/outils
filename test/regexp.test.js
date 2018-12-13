describe('Regexp API:', function () {

	describe('#isColor()', function() {
		it('outils.isColor("#acf") should return true ', function() {
			assert(outils.isColor("#acf"))
		});
		it('outils.isColor("#aaccff") should return true ', function() {
			assert(outils.isColor("#aaccff"))
		});
		it('outils.isColor("acf") should return false ', function() {
			assert(!outils.isColor("acf"))
		});
		it('outils.isColor("aaccff") should return false ', function() {
			assert(!outils.isColor("aaccff"))
		});
		it('outils.isColor("rgb(0,0,0,1)") should return false ', function() {
			assert(!outils.isColor("rgb(0,0,0,1)"))
		});
		it('outils.isColor("rgb(0,0,0,)") should return false ', function() {
			assert(!outils.isColor("rgb(0,0,0,)"))
		});
		it('outils.isColor("rgb(255,255,256)") should return false ', function() {
			assert(!outils.isColor("rgb(255,255,256)"))
		});
		it('outils.isColor("rgb(255,256,255)") should return false ', function() {
			assert(!outils.isColor("rgb(255,256,255)"))
		});
		it('outils.isColor("rgb(256,255,255)") should return false ', function() {
			assert(!outils.isColor("rgb(256,255,255)"))
		});
		it('outils.isColor("rgb(1,1,-1)") should return false ', function() {
			assert(!outils.isColor("rgb(1,1,-1)"))
		});
		it('outils.isColor("rgb(1,-1,1)") should return false ', function() {
			assert(!outils.isColor("rgb(1,-1,1)"))
		});
		it('outils.isColor("rgb(-1,1,1)") should return false ', function() {
			assert(!outils.isColor("rgb(-1,1,1)"))
		});
		it('outils.isColor("rgb(1,1,1.1)") should return false ', function() {
			assert(!outils.isColor("rgb(1,1,1.1)"))
		});
		it('outils.isColor("rgb(1,1.1,1)") should return false ', function() {
			assert(!outils.isColor("rgb(1,1.1,1)"))
		});
		it('outils.isColor("rgb(1.1,1,1)") should return false ', function() {
			assert(!outils.isColor("rgb(1.1,1,1)"))
		});
		it('outils.isColor("rgb(0,0,0)") should return true ', function() {
			assert(outils.isColor("rgb(0,0,0)"))
		});
		it('outils.isColor("rgb(255,255,255)") should return true ', function() {
			assert(outils.isColor("rgb(255,255,255)"))
		});
		it('outils.isColor("rgba(-1,0,0,1)") should return false ', function() {
			assert(!outils.isColor("rgba(-1,0,0,1)"))
		});
		it('outils.isColor("rgba(0,-1,0,1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,-1,0,1)"))
		});
		it('outils.isColor("rgba(0,0,-1,1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,0,-1,1)"))
		});
		it('outils.isColor("rgba(0,0,0,-1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,0,0,-1)"))
		});
		it('outils.isColor("rgba(256,0,0,1)") should return false ', function() {
			assert(!outils.isColor("rgba(256,0,0,1)"))
		});
		it('outils.isColor("rgba(0,256,0,1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,256,0,1)"))
		});
		it('outils.isColor("rgba(0,0,256,1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,0,256,1)"))
		});
		it('outils.isColor("rgba(-1,0,0,1)") should return false ', function() {
			assert(!outils.isColor("rgba(-1,0,0,1)"))
		});
		it('outils.isColor("rgba(0,-1,0,1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,-1,0,1)"))
		});
		it('outils.isColor("rgba(0,0,-1,1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,0,-1,1)"))
		});
		it('outils.isColor("rgba(1.1,0,0,1)") should return false ', function() {
			assert(!outils.isColor("rgba(1.1,0,0,1)"))
		});
		it('outils.isColor("rgba(0,1.1,0,1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,1.1,0,1)"))
		});
		it('outils.isColor("rgba(0,0,1.1,1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,0,1.1,1)"))
		});
		it('outils.isColor("rgba(0,0,0,256)") should return false ', function() {
			assert(!outils.isColor("rgba(0,0,0,256)"))
		});
		it('outils.isColor("rgba(0,0,0,1.1)") should return false ', function() {
			assert(!outils.isColor("rgba(0,0,0,1.1)"))
		});
		it('outils.isColor("rgba(0,0,0,0.222)") should return false ', function() {
			assert(outils.isColor("rgba(0,0,0,0.222)"))
		});
		it('outils.isColor("rgba(0,0,0,)") should return false ', function() {
			assert(!outils.isColor("rgba(0,0,0,)"))
		});
		it('outils.isColor("rgba(0,0,0)") should return false ', function() {
			assert(!outils.isColor("rgba(0,0,0)"))
		});
		it('outils.isColor("rgba(0,0,0,0.2)") should return false ', function() {
			assert(outils.isColor("rgba(0,0,0,0.2)"))
		});
		it('outils.isColor("rgba(24,0,0,.2)") should return false ', function() {
			assert(outils.isColor("rgba(24,0,0,0.2)"))
		});
	});

	describe('#isEmail()', function () {
		it('outils.isEmail("leiquanlive.com") should return false ', function () {
			assert.notEqual(outils.isEmail("leiquanlive.com"), true)
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
		it('outils.isPhoneNum("19056323241") should return true', function () {
			assert(outils.isPhoneNum("19056323241"))
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