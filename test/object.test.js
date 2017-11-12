describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual outils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, outils.deepClone(person))
        });

        it(`person === outils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, outils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`outils.isEmptyObject({}) should return true`, function () {
            assert(outils.deepClone({}))
        });

        it(`outils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(outils.isEmptyObject({
                one: 1
            }))
        });

        it(`outils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(outils.isEmptyObject([]))
        });
    });
})