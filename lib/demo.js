'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: 'Wim Mostmans',
      skypeId: null
    }, _this._onChangeName = function () {
      _this.setState({
        name: 'Foo Bar',
        skypeId: null
      });
    }, _this._onSetSkype = function () {
      _this.setState({ skypeId: 'sitebase' });
    }, _this._onClick = function () {
      alert('Clicked!');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Gravatar'), _jsx(_index2.default, {
        className: 'myCustomClass',
        md5Email: '8c5d4c4b9ef6c68c4ff91c319d4c56be',
        size: 40
      }), _jsx(_index2.default, {
        md5Email: '8c5d4c4b9ef6c68c4ff91c319d4c56be',
        size: 100,
        round: true
      }), _jsx(_index2.default, {
        md5Email: '8c5d4c4b9ef6c68c4ff91c319d4c56be',
        size: 150
      }), _jsx(_index2.default, {
        md5Email: '8c5d4c4b9ef6c68c4ff91c319d4c56be',
        size: 200
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Google+'), _jsx(_index2.default, {
        googleId: '116933859726289749306',
        size: 40
      }), _jsx(_index2.default, {
        googleId: '116933859726289749306',
        size: 100,
        round: true
      }), _jsx(_index2.default, {
        googleId: '116933859726289749306',
        size: 150
      }), _jsx(_index2.default, {
        googleId: '116933859726289749306',
        size: 200
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Facebook'), _jsx(_index2.default, {
        facebookId: '100008343750912',
        size: 40
      }), _jsx(_index2.default, {
        facebookId: '100008343750912',
        size: 100,
        round: true
      }), _jsx(_index2.default, {
        facebookId: '100008343750912',
        size: 150
      }), _jsx(_index2.default, {
        facebookId: '100008343750912',
        size: 200
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Twitter'), _jsx(_index2.default, {
        twitterHandle: 'sitebase',
        size: 40
      }), _jsx(_index2.default, {
        twitterHandle: 'sitebase',
        size: 100,
        round: true
      }), _jsx(_index2.default, {
        twitterHandle: 'sitebase',
        size: 150
      }), _jsx(_index2.default, {
        twitterHandle: 'sitebase',
        size: 200
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Skype'), _jsx(_index2.default, {
        skypeId: 'sitebase',
        size: 40
      }), _jsx(_index2.default, {
        skypeId: 'sitebase',
        size: 100,
        round: true
      }), _jsx(_index2.default, {
        skypeId: 'sitebase',
        size: 150
      }), _jsx(_index2.default, {
        skypeId: 'sitebase',
        size: 200
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Invalid Gravatar'), _jsx(_index2.default, {
        email: 'bla',
        name: 'Jim Jones',
        size: 80
      }), _jsx(_index2.default, {
        email: 'foo',
        name: 'Jessica Jones',
        size: 80
      }), _jsx(_index2.default, {
        name: 'Jessica Jones',
        size: 80
      }), _jsx(_index2.default, {
        name: 'Jeronimo Jones',
        size: 80
      }), _jsx('h2', {}, void 0, 'Invalid Google+'), _jsx(_index2.default, {
        googleId: 'invalid',
        name: 'Jim Jones',
        size: 80
      }), _jsx(_index2.default, {
        googleId: 'invalid2',
        name: 'Jessica Jones',
        size: 80
      }), _jsx('h2', {}, void 0, 'Invalid Facebook'), _jsx(_index2.default, {
        facebookId: 'invalid',
        name: 'Jim Jones',
        size: 80
      }), _jsx(_index2.default, {
        facebookId: 'invalid',
        name: 'Jessica Jones',
        size: 80
      }), _jsx('h2', {}, void 0, 'Invalid Twitter'), _jsx(_index2.default, {
        twitterHandle: 'invalid',
        name: 'Jim Jones',
        size: 80
      }), _jsx(_index2.default, {
        twitterHandle: 'invalid',
        name: 'Jessica Jones',
        size: 80
      }), _jsx('h2', {}, void 0, 'Invalid Skype'), _jsx(_index2.default, {
        skypeId: 'invalid',
        name: 'Jim Jones',
        size: 80
      }), _jsx(_index2.default, {
        skypeId: 'invalid',
        name: 'Jessica Jones',
        size: 80
      }), _jsx('h2', {}, void 0, 'Invalid Vkontakte'), _jsx(_index2.default, {
        vkontakteId: '1',
        name: 'Jim Jones',
        size: 80
      }), _jsx(_index2.default, {
        vkontakteId: '1',
        name: 'Jessica Jones',
        size: 80
      }), _jsx('h2', {}, void 0, 'Invalid Source'), _jsx(_index2.default, {
        src: 'invalidSource',
        name: 'Jim Jones',
        size: 80
      }), _jsx(_index2.default, {
        src: 'invalidSource2',
        name: 'Jessica Jones',
        size: 80
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Initials'), _jsx('div', {}, void 0, _jsx('button', {
        onClick: this._onChangeName
      }, void 0, 'Change name'), _jsx('button', {
        onClick: this._onSetSkype
      }, void 0, 'Set skype ID')), _jsx(_index2.default, {
        name: this.state.name,
        skypeId: this.state.skypeId,
        size: 40
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 100,
        round: true
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 150
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 200
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'onClick'), _jsx(_index2.default, {
        name: this.state.name,
        onClick: this._onClick,
        size: 200
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Initials with different font sizes'), _jsx('div', {}, void 0, _jsx(_index2.default, {
        name: this.state.name,
        skypeId: this.state.skypeId,
        size: 40,
        textSizeRatio: 2
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 100,
        round: true,
        textSizeRatio: 2
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 150,
        textSizeRatio: 2
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 200,
        textSizeRatio: 2
      })), _jsx('div', {}, void 0, _jsx(_index2.default, {
        name: this.state.name,
        skypeId: this.state.skypeId,
        size: 40,
        textSizeRatio: 4
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 100,
        round: true,
        textSizeRatio: 4
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 150,
        textSizeRatio: 4
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 200,
        textSizeRatio: 4
      }))), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Initials with maximum number of characters'), _jsx('div', {}, void 0, _jsx(_index2.default, {
        name: this.state.name,
        maxInitials: 2,
        skypeId: this.state.skypeId,
        size: 40,
        textSizeRatio: 2
      }), _jsx(_index2.default, {
        name: this.state.name,
        maxInitials: 1,
        size: 100,
        round: true,
        textSizeRatio: 2
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 150,
        textSizeRatio: 2
      }), _jsx(_index2.default, {
        name: this.state.name,
        size: 200,
        textSizeRatio: 2
      }))), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Value'), _jsx(_index2.default, {
        value: '86%',
        size: 40
      }), _jsx(_index2.default, {
        value: '86%',
        size: 100,
        round: true
      }), _jsx(_index2.default, {
        value: '86%',
        size: 150
      }), _jsx(_index2.default, {
        value: '86%',
        size: 200
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Fallback to static src'), _jsx(_index2.default, {
        size: 150,
        facebookId: 'invalidfacebookusername',
        src: 'https://thumbs.dreamstime.com/m/cute-monster-avatar-smiling-face-yellow-color-52010608.jpg',
        name: 'Foo Bar'
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Double fallback: Facebook to Google to initials'), _jsx(_index2.default, {
        facebookId: 'invalidfacebookusername',
        googleId: 'invalidgoogleid',
        name: 'Sitebase',
        size: 200,
        round: true
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Custom style'), _jsx(_index2.default, {
        name: 'Wim Mostmans',
        style: { borderRadius: 10, border: 'solid 10px rgba(0,0,0,0.5)' },
        size: 100
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Unstyled'), _jsx(_index2.default, {
        name: 'Wim Mostmans',
        unstyled: true
      })), _jsx('section', {}, void 0, _jsx('h2', {}, void 0, 'Vertical Alignment'), _jsx(_index2.default, {
        valign: 'middle',
        name: 'Wim Mostmans',
        size: 50
      }), 'Wim Mostmans', _jsx(_index2.default, {
        valign: 'middle',
        name: 'Wim Mostmans',
        size: 50,
        round: true
      }), 'Wim Mostmans', _jsx(_index2.default, {
        valign: 'middle',
        md5Email: '8c5d4c4b9ef6c68c4ff91c319d4c56be',
        size: 50,
        round: true
      }), 'Wim Mostmans', _jsx(_index2.default, {
        valign: 'middle',
        md5Email: '8c5d4c4b9ef6c68c4ff91c319d4c56be',
        size: 150
      }), 'Wim Mostmans'));
    }
  }]);

  return Demo;
}(_react2.default.Component);

exports.default = Demo;

Demo.displayName = 'Demo';

var mountNode = document.getElementById('container');
_reactDom2.default.render(_jsx(Demo, {}), mountNode);
module.exports = exports['default'];