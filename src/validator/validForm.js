function validFormRules() {
    const rUnsafe = /[<>'"`\\]|&#x?\d+[A-F]?;?|%3[A-F]/gmi;
    const rDoubleBytes = /[^\x00-\xff]/g;
// 默认规则
    const RULES = {
        numeric: [/^[0-9]*$/, '请填写数字'],
        money: [/^([1-9]\\d*(\\.\\d{1,2})?|0\\.[1-9]\\d?|0\\.0[1-9]|0|0.0)$/, "请填写有效的金额"],
        letters: [/^[a-z]+$/i, "请输入字母"],
        date: [/^\d{4}-\d{2}-\d{2}$/, "请输入有效的日期，格式:yyyy-mm-dd"],
        email: [/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,4})$/i, '请输入有效的邮箱'],
        url: [/^(https?|s?ftp):\/\/\S+$/i, "请输入有效的网址"],
        qq: [/^[1-9]\d{4,}$/, "请输入有效的QQ号"],
        IDcard: [/^\d{6}(19|2\d)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)?$/, "请输入正确的身份证号码"],
        phone: [/^(1[0-9]{2})[0-9]{8}$/, "请输入有效的手机号"],
        zipcode: [/^\d{6}$/, "请检查邮政编码格式"],
        chinese: [/^[Α-￥]+$/, "请输入中文字符"],
        username: [/^\w{3,12}$/, "请输入3-12位数字、字母、下划线"],
        password: [/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/, "请输入6-16位字母加数字组合，不能包含空格"],
        required: [function (el) {
            return !!(el.value + '').trim()
        }],
        leapYear: [function (el) {
            const iYear = el.value;
            if (iYear % 4 == 0 && iYear % 100 != 0) {
                return true;
            } else {
                return iYear % 400 == 0;
            }
        }],
        integer: [function (el, params) {
            var re, z = '0|',
                p = '[1-9]\\d*',
                key = params ? params[0] : '*';
            switch (key) {
                case '+':
                    re = p;
                    break;
                case '-':
                    re = '-' + p;
                    break;
                case '+0':
                    re = z + p;
                    break;
                case '-0':
                    re = z + '-' + p;
                    break;
                default:
                    re = z + '-?' + p;
            }
            re = '^(?:' + re + ')$';
            return new RegExp(re).test(el.value);
        }],
        match: [function (el, params, formEl) {
            var a = el.value,
                b,
                key, msg, type = 'eq',
                el2;


            if (!params) return;
            if (params.length === 1) {
                key = params[0];
            } else {
                type = params[0];
                key = params[1];
            }


            el2 = formEl.querySelector(`[name="${key}"]`);
            b = el2.value;
            switch (type) {
                case 'lt':
                    return (+a < +b);
                case 'lte':
                    return (+a <= +b);
                case 'gte':
                    return (+a >= +b);
                case 'gt':
                    return (+a > +b);
                default:
                    return (a === b);
            }
            return false;
        }],
        range: [function (el, params) {
            return getRangeRes(+el.value, params, 'range');
        }],
        checked: [function (arrEl, params) {
            if (!Array.isArray(arrEl)) return;
            var count = arrEl.filter(v => v.checked).length;
            return !params ? !!count : getRangeRes(count, params, 'checked');
        }],
        length: [function (el, params) {
            var value = el.value,
                len = (params[1] ? value.replace(rDoubleBytes, 'xx') : value).length;
            if (params && params[0].charAt(0) === '~') params[0] = '0' + params[0];
            return getRangeRes(len, params, 'length', (params[1] ? '2_' : ''));
        }],
        filter: [function (el, params) {
            var reg = params ? (new RegExp("[" + params[0] + "]", "g")) : rUnsafe;
            el.value = el.value.replace(reg, '');
            return true;
        }]
    }



// 获取可验证的字段
    function getFields(formEl, fieldsRules) {
        let cache = {};
        Object.keys(fieldsRules)
            .map(v => {
                return {name: v, els: filterFields(Array.from(formEl.querySelectorAll(`[name="${v}"]`)))};
            })
            .filter(v => v.els.length)
            .forEach(v => {
                cache[v.name] = v.els;
            })
        // 返回 vivsible 并且 没有disabled属性或class的 field DOM元素
        return cache;
    }

    function filterFields(els) {
        return els.filter(v => {
            // 不是隐藏的字段 和 disabled字段(没有disabled属性或class)
            return !!( v.offsetWidth || v.offsetHeight || v.getClientRects().length ) && !v.hasAttribute('disabled') && !v.classList.contains('disabled')
        })
    }

// 验证单个字段
    function validField(formEl, field, rules) {
        if (typeof field === 'string' && formEl) {
            field = formEl.querySelectorAll(`[name="${field}"]`);
        }
        let el = Array.from(field);
        const fieldName = el[0].getAttribute('name');


        if (el[0].getAttribute('type').toLowerCase() !== 'checkbox') {
            el = el[0]
        }


        return new Promise((resolve, reject) => {
            // 遍历规则进行验证
            for (let ruleOpt of rules) {
                var objRule = ruleOpt[0];
                var currField = {field: fieldName, el: el, msg: ruleOpt[1]};
                // 内置规则
                if (typeof objRule === 'string') {
                    let arr = objRule.split(':');
                    const ruleName = arr.shift();
                    const rulePms = arr;


                    // 获取内置规则
                    const ruleItem = RULES[ruleName];
                    if (ruleItem) {
                        let testRes = testRule(ruleItem, currField, rulePms, formEl)
                        if (typeof testRes === 'object' && testRes.then) return resolve(testRes);
                        if (testRes !== true) return reject(testRes)
                    } else {
                        return reject(new Error(`未找到相关${ruleName}的默认配置`))
                    }
                } else {
                    let testRes = testRule(ruleOpt, currField, null, formEl)
                    if (typeof testRes === 'object' && testRes.then) return resolve(testRes);
                    if (testRes !== true) return reject(testRes)
                }
            }


            return resolve({field: fieldName, el: el});
        })
    }

    function testRule(ruleItem, currField, pms, formEl) {
        var objRule = ruleItem[0];
        currField.msg = currField.msg || ruleItem[1];
        if (!Array.isArray(currField.el) && !currField.msg) {
            currField.msg = currField.el.getAttribute('placeholder') || '填写信息有误';
        }


        // 函数
        if (typeof objRule === 'function') {
            var res = objRule(currField.el, pms, formEl);
            if (typeof res === 'object' && res.then && typeof res.then === 'function') {
                return res
            } else if (!res) {
                return currField;
            }
        } else if (objRule instanceof RegExp) {
            if (!objRule.test(currField.el.value)) {
                return currField;
            }
        } else {
            return new Error('规则只能正则或函数类型')
        }
        return true;
    }


// 验证单个值
    function validValue(v, rule, pms) {
        const ruleItem = RULES[rule];
        if (ruleItem) {
            return ruleItem[0] instanceof RegExp ? ruleItem[0].test(v) : ruleItem[0]({value: v}, pms);
        }
        return false;
    }

    Object.keys(RULES).map(ruleName => {
        let ruleItem = RULES[ruleName];
        if (ruleName === 'length') {
            ruleName = ruleName.substring(0, 1).toUpperCase() + ruleName.substring(1);
        }
        validValue[ruleName] = (v, ...pms) => {
            if (ruleItem) {
                return ruleItem[0] instanceof RegExp ? ruleItem[0].test(v) : ruleItem[0]({value: v}, pms);
            }
            return false;
        }
    })


    function getRangeRes(value, params, type, suffix) {
        if (!params) return;

        var me = this,
            p = params[0].split('~'),
            a = p[0],
            b = p[1],
            c = 'rg',
            args = [''],
            isNumber = +value === +value;


        if (p.length === 2) {
            if (a && b) {
                if (isNumber && value >= +a && value <= +b) return true;
                args = args.concat(p);
            } else if (a && !b) {
                if (isNumber && value >= +a) return true;
                args.push(a);
                c = 'gte';
            } else if (!a && b) {
                if (isNumber && value <= +b) return true;
                args.push(b);
                c = 'lte';
            }
        } else {
            if (value === +a) return true;
            args.push(a);
            c = 'eq';
        }


        return false;
    }

    // 验证表单
    return  function validForm(formEl, fieldsRules, validAll) {
        // 获取 Deferred 对象
        // 过滤隐藏和禁用的字段
        let regFieldsDom = getFields(formEl, fieldsRules), regFieldsRules = {};
        let regFieldNames = Object.keys(regFieldsDom);


        if (!regFieldNames.length) return Promise.reject(new Error('字段为空'));


        regFieldNames.map(v => {
            regFieldsRules[v] = fieldsRules[v];
        })


        // 获取最终需要验证的字段
        let valids = [], invalids = [], promiseArr = [];


        for (let field in regFieldsRules) {
            validAll ?
                promiseArr.push(() => validField(formEl, regFieldsDom[field], regFieldsRules[field]))
                : promiseArr.push(validField(formEl, regFieldsDom[field], regFieldsRules[field]))
        }


        function recordValue(results, value) {
            results.push(value);
            return results;
        }

        var pushValue = recordValue.bind(null, []);


        return validAll ?
            promiseArr.reduce((p, n) => {
                return p.then(n).then(pushValue).catch(pushValue)
            }, Promise.resolve())
            : Promise.all(promiseArr);
    }
}


module.exports = validFormRules;
