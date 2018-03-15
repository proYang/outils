describe('Url API:', function () {
    describe('#parseQueryString()', function () {
        it(`outils.parseQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10') deepEqual '{
            wd: '百度',
            rsv_spt: '10'
        }' should return true`, function () {
            let url = 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
            assert.deepEqual(outils.parseQueryString(url), {
                wd: '百度',
                rsv_spt: '10'
            })
        });
        it(`outils.parseQueryString('www.baidu.com?a=123&b=%26') deepEqual '{
            a: '123',
            b: '&'
        }' should return true`, function () {
            let url = 'www.baidu.com?a=123&b=%26'
            assert.deepEqual(outils.parseQueryString(url), {
                a: '123',
                b: '&'
            })
        });
        it(`outils.parseQueryString('') deepEqual '{}' should return true`, function () {
            let url = ''
            assert.deepEqual(outils.parseQueryString(url), {})
        });
    });

    describe('#stringfyQueryString()', function () {
        it(`outils.stringfyQueryString({
            wd: '百度',
            rsv_spt: '10'
        }) === 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'  should return true`, function () {
            let param = {
                wd: '百度',
                rsv_spt: '10'
            }
            assert(outils.stringfyQueryString(param) === 'wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')
        });
    });
})