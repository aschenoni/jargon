/*!
 * @aschenoni/jargon v0.1.0
 * (c) undefined
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Jargon = /** @class */ (function () {
    function Jargon() {
        this.options = [];
        this.positionals = [];
    }
    Jargon.prototype.parse = function () {
        var raw = process.argv.slice(2);
        var _a = raw.reduce(function (accum, val) {
            if (/^-/.exec(val)) {
                accum[1].push(val);
            }
            else {
                accum[0].push(val);
            }
            return accum;
        }, [[], []]), positionalArgs = _a[0], optionsArgs = _a[1];
        this.assertRequired(positionalArgs);
        this.assignOptions(optionsArgs);
        this.assignPositionals(positionalArgs, this.positionals);
        // console.log(optionsArgs, this.options);
        // console.log(positionalArgs, this.positionals);
    };
    Jargon.prototype.assignOptions = function (optionsArgs) {
        var _this = this;
        optionsArgs.forEach(function (option) {
            var _a;
            var prop;
            var val;
            //handle double dash options
            if (/^--/.exec(option)) {
                option = option.replace('--', '');
                //boolean option
                if (!/=/.exec(option)) {
                    prop = option;
                    val = true;
                }
                else {
                    _a = option.split('='), prop = _a[0], val = _a[1];
                }
            }
            else {
                //single dash argument
                //doesn't support passing space delimited strings with single dash right now
                prop = option;
                val = true;
            }
            _this[prop] = val;
        });
    };
    Jargon.prototype.assignPositionals = function (positionalArgs, positionals) {
        var _this = this;
        if (!positionals) {
            return;
        }
        console.log(this.positionals);
        positionalArgs.forEach(function (arg, index) {
            _this[positionals[index]] = arg;
        });
    };
    Jargon.prototype.assertRequired = function (positionalArgs) {
        if (this.requiredArgCount &&
            this.requiredArgCount > positionalArgs.length) {
            throw new Error('missing required parameters');
        }
    };
    return Jargon;
}());

function alias() {
    var aliases = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        aliases[_i] = arguments[_i];
    }
    return function (target, key) {
        aliases.forEach(function (alias) {
            Object.defineProperty(target, alias, {
                get: function () {
                    return this[key];
                },
                set: function (newValue) {
                    this[key] = newValue;
                },
            });
        });
        target.parse();
    };
}

function option(target, key) {
    target.options = target.options || [];
    target.options.push(key);
    target.parse();
}

function positional(target, key) {
    target.positionals = target.positionals || [];
    target.positionals.push(key);
    target.parse();
}

function required(target, key) {
    target.requiredArgCount = target.requiredArgCount || 0;
    target.requiredArgCount++;
}

exports.alias = alias;
exports.default = Jargon;
exports.option = option;
exports.positional = positional;
exports.required = required;
//# sourceMappingURL=index.js.map
