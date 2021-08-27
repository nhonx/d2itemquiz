(function () {
    var root = this;
    var previousrand = root.rand;
    var rand = function (obj) {
        if (obj instanceof rand) return obj;
        if (!(this instanceof rand)) return new rand(obj);
        this.randwrapped = obj;
    };
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = rand;
        }
        exports.rand = rand;
    } else {
        root.rand = rand;
    }
    rand.VERSION = '1.0.0';

    /**
     * =================================================
     * Random your stuffs in a JS chaining way
     * rand.give([3,5,1,6,2]).pick() -> 4
     * rand.give([3,5,1,6,2]).shuffle() -> Shuffled array by Knuth shuffle.
     **/
    rand.give = function (arr) {
        return (function (_a) {
            var give = function (a) {
                this._set = a;
                this.pick = function () {
                    return rand.pickIn(this._set);
                }
                this.shuffle = function () {
                    var array = [...this._set];
                    for (var i = array.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                    return array;
                }
                return this;
            }
            return give(_a);
        })(arr);
    }
    /**
    Generate random number from multi specific ranges.
    E.g: pick a random num which is between 0-30 and 50-70: rand.inRanges([[0,30],[50,70]])
    **/
    rand.fromTo = function (from, to) {
        return from <= to ? Math.floor(Math.random() * (to - from + 1)) + from : null;
    };
    rand.pickIn = function (array) {
        if (array == null || array.length == 0) return null;
        return array[rand.fromTo(0, array.length - 1)];
    };
    /**
    Generate random number from multi specific ranges.
    E.g: pick a random num which is between 0-30 and 50-70: rand.inRanges([[0,30],[50,70]])
    **/
    rand.inRanges = function (arr) {
        var final_arr = [];
        for (var i = 0; i <= arr.length - 1; i++) {
            final_arr.push(rand.fromTo(arr[i][0], arr[i][1]));
        }
        return rand.pickIn(final_arr);
    };
    /**
    Generate corresponding integer 
    **/
    rand.int8 = function (format) {
        return rand.pickIn([1, -1]) * rand.fromTo(0, 128);
    }
    rand.uint8 = function (format) {
        return rand.fromTo(0, 255);
    }
    rand.int16 = function (format) {
        return rand.pickIn([1, -1]) * rand.fromTo(0, 32768);
    }
    rand.uint16 = function (format) {
        return rand.fromTo(0, 65535);
    }
    rand.int32 = function (format) {
        return rand.pickIn([1, -1]) * rand.fromTo(0, 2147483648);
    }
    rand.uint32 = function (format) {
        return rand.fromTo(0, 4294967295);
    }
    /**
     *
     */
    rand.color = function () {
        var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        var rs = [];
        for (var i = 1; i <= 6; i++) {
            rs.push(rand.pickIn(a));
        }
        return "#" + rs.join('');
    };
    /**
     * Generate a contrasting color of input hexcolor. Useful when we need to generate a color scheme for chart/graph or a color pair for background/text color.
     **/
    rand.contrastColor = function (hexcolor) {
	    let rgbToYIQ = function (a) {
		    return ((a.r * 299) + (a.g * 587) + (a.b * 114)) / 1000;
	    }
	    let hexToRgb =  function (hex) {
		    if (!hex || hex === undefined || hex === '') {
			    return undefined;
		    }
		    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : undefined;
	    }
	    if(!hexcolor){
		    return null;
	    }
	    let c = 0;
	    var baseBright = rgbToYIQ(hexToRgb(hexcolor));
	    let resultColor = baseBright >= 128 ? "#000000" : "#ffffff";
	    while(c<200){
		    let j = rand.color();
		    let jBright = rgbToYIQ(hexToRgb(j));
		    c++;
		    if(Math.abs(baseBright-jBright) > 90){
			resultColor = j;    
		    	break;
		    }
	    }
	   return j;

    }
    rand.digit = function () {
        return rand.fromTo(0, 9);
    }
    rand.char = function (opt) {
        var pre_select = [];
        if (!opt) {
            return String.fromCharCode(rand.fromTo(33, 126));
        } else {
            if (opt.number === true) {
                pre_select.push(rand.digit());
            }
            if (opt.lower === true) {
                pre_select.push(rand.lowerLetter());
            }
            if (opt.upper === true) {
                pre_select.push(rand.upperLetter());
            }
            if (opt.special === true) {
                pre_select.push(rand.specialChar());
            }
            if (pre_select.length > 0) {
                return rand.pickIn(pre_select);
            } else {
                return null;
            }
        }

    };
    rand.specialChar = function () {
        var code = rand.inRanges([
            [33, 47],
            [58, 64],
            [91, 96],
            [123, 126]
        ]);
        return String.fromCharCode(code);
    };
    rand.letter = function () {
        var code = rand.inRanges([
            [65, 90],
            [97, 122]
        ]);
        return String.fromCharCode(code);
    };
    rand.upperLetter = function () {
        var code = rand.fromTo(65, 90);
        return String.fromCharCode(code);
    };
    rand.lowerLetter = function () {
        var code = rand.fromTo(97, 122);
        return String.fromCharCode(code);
    };
    rand.string = function (length, opt) {
        var def_opt = {
            number: true,
            lower: true,
            upper: true,
            special: true
        };
        var option = opt || def_opt;

        var rs = [];
        for (var i = 1; i <= length; i++) {
            rs.push(rand.char(option));
        }
        return rs.join('');
    };
    /**
     * mode:["long","short","symbol"]
     */
    rand.card = function (mode) { //Need implements for Joker and Black/Red
        var num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        var type = mode == "short" ? ["S", "H", "D", "C"] : (mode == "symbol" ? ["♠", "♥", "♦", "♣"] : ["Spade", "Heart", "Diamond", "Club"]);
        return rand.pickIn(num) + (mode != "symbol" ? "." : "") + rand.pickIn(type);
    };
    rand.flipCoin = function (){
    	return rand.pickIn(["head","tail"]);
    }
    /**
     * UUID v4
     */
    rand.uuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    /**
     * =================================================
     **/
    if (typeof define === 'function' && define.amd) {
        define('rand', [], function () {
            return rand;
        });
    }
}.call(this));
