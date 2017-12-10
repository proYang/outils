describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`outils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(outils.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('outils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(outils.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`outils.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(outils.arrayEqual(arr, arr))
        });
    });
    describe('#arrayDistinct()',()=>{
        const testDistinctArray = {
            object:{
                init: [
                    {id:1,name:"react"},
                    {id:1,name:"react"},
                    ['node'],
                    ['node']
                ],
                result:[
                    {id:1,name:"react"},
                    ['node'],
                ]
            },
            stringOrNumber:{
                init:["1","1",2,2],
                result:["1",2]
            }
        }
        
        it(`outils.arrayDistinct(${JSON.stringify(testDistinctArray.object.init,undefined,2)} should return 
            ${JSON.stringify(outils.arrayDistinct(testDistinctArray.object.result),undefined,2)})`,()=>{
                assert(
                    outils.arrayEqual(
                        testDistinctArray.object.result,
                        outils.arrayDistinct(testDistinctArray.object.init)
                    )
            )
        })
        it(`outils.arrayDistinct(${JSON.stringify(testDistinctArray.stringOrNumber.init,undefined,2)} should return 
        ${JSON.stringify(outils.arrayDistinct(testDistinctArray.stringOrNumber.result),undefined,2)})`,()=>{
            assert(
                outils.arrayEqual(
                    testDistinctArray.stringOrNumber.result,
                    outils.arrayDistinct(testDistinctArray.stringOrNumber.init)
                )
        )
    })
    })
});