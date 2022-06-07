"use strict";

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Foo = function () {
    function Foo(name) {
        _classCallCheck(this, Foo);

        this.name = name;
    }

    _createClass(Foo, [{
        key: "printName",
        value: function printName() {
            console.log(this.name);
        }
    }], [{
        key: "foo",
        value: function foo() {
        }
    }]);

    return Foo;
}();

const foo = new Foo('Alex')
foo.printName()