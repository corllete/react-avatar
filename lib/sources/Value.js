'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValueSource = function () {
    function ValueSource(props) {
        var _this = this;

        _classCallCheck(this, ValueSource);

        this.props = null;

        this.isCompatible = function () {
            return !!_this.props.name || !!_this.props.value;
        };

        this.get = function (setState) {
            var value = _this.getValue();
            var state = value ? {
                value: value,
                color: _this.getColor()
            } : null;
            setState(state);
        };

        this.props = props;
    }

    _createClass(ValueSource, [{
        key: 'getInitials',
        value: function getInitials() {
            var name = this.props.name;
            var maxInitials = this.props.maxInitials;
            var parts = name.split(' ');
            var initials = '';
            for (var i = 0; i < parts.length; i++) {
                initials += parts[i].substr(0, 1).toUpperCase();
            }
            return maxInitials ? initials.slice(0, maxInitials) : initials;
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            if (this.props.name) return this.getInitials();

            if (this.props.value) return this.props.value;

            return null;
        }
    }, {
        key: 'getColor',
        value: function getColor() {
            var _props = this.props,
                color = _props.color,
                colors = _props.colors,
                name = _props.name,
                email = _props.email;

            var colorValue = email || name;
            return color || (0, _utils.getRandomColor)(colorValue, colors);
        }
    }]);

    return ValueSource;
}();

exports.default = ValueSource;
module.exports = exports['default'];