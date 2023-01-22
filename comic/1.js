



var id = "1e55bc5fb157f2fa58acc9269e30105d3c5432e7ea5fd8aa51d28d637834c0b08a5bb11e1daec05af48b341a23267d19dee0f07617de11a5421954e52ddc52e33ef34702373d42daef3ef079e73e1f8ce49b";
var src = "play/" + id;
var sk = "354c681a3c72f4a44ba2016aff9f9fc60e257ca5ce053b1e";
var pt = "64b47b7f001f630e6f8483e3dd04cc7133571db828efdbab39ec96a86586b39e54b12806bb4c359e5240093af7cfa834c5da877afe4aca5f";
var ti = "1674369202";














function getBkn(skey) {
    var obj = {
        'sZJsW': function (a, b) {
            return a > b;
        },
        'HtKWt': function (a, b) {
            return a + b;
        },
        'avfjC': function (a, b) {
            return a << b;
        },
        'CXZuG': function (a, b) {
            return a & b;
        }
    };
    var _0x46d134, _0x344de3 = skey;
    if (!_0x344de3)
        return '';
    for (var _0x26c8d = 6492, i = 0, length = skey.length; obj.sZJsW(length, i); ++i) {
        _0x26c8d += obj.HtKWt(obj.avfjC(_0x26c8d, 0x5), skey.charAt(i).charCodeAt());
    }
    return obj.CXZuG(0x7fffffff, _0x26c8d);
}




function getGtk(pt) {
    var num1 = 0;
    for (var i = 0; i < pt.length; i += 4) {
        num1 += parseInt("" + pt[i] + pt[i + 1] + pt[i + 2] + pt[i + 3], 16);
        num1 %= 0x400a;
    }
    var x = num1 % 0xa;
    function charCodeAt1(i) {
        return pt.charCodeAt(i) * (i + x)
    }
    var gtk = 0;
    for (var i = 0; i < pt.length; i++) {
        gtk += charCodeAt1(i);
        gtk %= num1;
    }
    return gtk
}

// console.log(getGtk("4829f082f7ae0f9185631005d1cbd0be781f9b905a67132ee9e694a9f21d798d34ffb86ae1b8f05bff04bf6b10297c1b22efbe09ed611eff"));

console.log(
    {
        'bkn': getBkn(sk),
        'gtk': getGtk(pt),
        'skey': sk,
        'pt_token': pt,
        'time': ti
    }
);

