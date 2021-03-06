'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils.js');

var _Gravatar = require('./sources/Gravatar.js');

var _Gravatar2 = _interopRequireDefault(_Gravatar);

var _Facebook = require('./sources/Facebook.js');

var _Facebook2 = _interopRequireDefault(_Facebook);

var _Vkontakte = require('./sources/Vkontakte.js');

var _Vkontakte2 = _interopRequireDefault(_Vkontakte);

var _Twitter = require('./sources/Twitter.js');

var _Twitter2 = _interopRequireDefault(_Twitter);

var _Google = require('./sources/Google.js');

var _Google2 = _interopRequireDefault(_Google);

var _Skype = require('./sources/Skype.js');

var _Skype2 = _interopRequireDefault(_Skype);

var _Value = require('./sources/Value.js');

var _Value2 = _interopRequireDefault(_Value);

var _Src = require('./sources/Src.js');

var _Src2 = _interopRequireDefault(_Src);

var _Icon = require('./sources/Icon.js');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SOURCES = [_Facebook2.default, _Google2.default, _Twitter2.default, _Vkontakte2.default, _Skype2.default, _Gravatar2.default, _Src2.default, _Value2.default, _Icon2.default];

var Avatar = function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  function Avatar(props) {
    _classCallCheck(this, Avatar);

    var _this = _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

    _this.tryNextsource = function (Source, next) {
      var instance = new Source(_this.props);

      if (!instance.isCompatible(_this.props)) return next();

      instance.get(function (state) {
        _this.setState(function () {
          return state && !(0, _utils.hasSourceFailedBefore)(state.src) ? state : {};
        }, function () {
          var failedBefore = !!state && state.hasOwnProperty('src') && (0, _utils.hasSourceFailedBefore)((state || {}).src);

          if (failedBefore || !state) {
            next();
          }
        });
      });
    };

    _this.fetch = function (event) {
      // If fetch was triggered by img onError
      // then set state src back to null so render will
      // automatically switch a text avatar if there is no
      // other social ID available to try
      if (event && event.type === 'error') {
        (0, _utils.cacheFailingSource)(_this.state.src);
        _this.setState(function () {
          return { src: null };
        });
        return;
      }

      // console.log('## fetch');

      var id = _this._fetchId = _this._fetchId ? _this._fetchId + 1 : 1;

      var tryFetch = function tryFetch() {
        if (SOURCES.length === _this.state._internal.sourcePointer) return;

        var source = SOURCES[_this.state._internal.sourcePointer];

        var internal = _extends({}, _this.state._internal);
        internal.sourcePointer++;

        // console.log('## try fetch', id, this._fetchId, internal.sourcePointer - 1);
        _this.setState(function () {
          return {
            _internal: internal
          };
        }, function () {
          _this.tryNextsource(source, function () {
            // console.log('-- next', id, this._fetchId);
            if (id === _this._fetchId) {
              tryFetch();
            }
          });
        });
      };

      tryFetch();
    };

    _this.state = {
      _internal: {
        sourcePointer: 0
      },
      src: props.src,
      value: null,
      color: props.color
    };
    return _this;
  }

  _createClass(Avatar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetch();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var nextState = {};
      if (newProps.src !== this.props.src) nextState.src = newProps.src;

      if (newProps.name !== this.props.name) nextState.name = newProps.name;

      if (newProps.maxInitials !== this.props.maxInitials) nextState.maxInitials = newProps.maxInitials;

      if (newProps.value !== this.props.value) nextState.value = newProps.value;

      if (newProps.email !== this.props.email) nextState.email = newProps.email;

      if (newProps.md5Email !== this.props.md5Email) nextState.md5Email = newProps.md5Email;

      if (newProps.facebookId !== this.props.facebookId) nextState.facebookId = newProps.facebookId;

      if (newProps.googleId !== this.props.googleId) nextState.googleId = newProps.googleId;

      if (newProps.twitterHandle !== this.props.twitterHandle) nextState.twitterHandle = newProps.twitterHandle;

      if (newProps.vkontakteId !== this.props.vkontakteId) nextState.vkontakteId = newProps.vkontakteId;

      if (newProps.skypeId !== this.props.skypeId) nextState.skypeId = newProps.skypeId;

      if (Object.keys(nextState) !== 0) {
        nextState._internal = this.state._internal;
        nextState._internal.sourcePointer = 0;
        this.setState(nextState, this.fetch);
      }
    }
  }, {
    key: '_renderAsImage',
    value: function _renderAsImage() {
      var size = this.props.size;
      var unit = this.props.unit;
      var round = this.props.round;
      var borderRadius = this.props.borderRadius;
      var alt = this.props.name || this.props.value;
      var imageStyle = this.props.unstyled ? null : {
        maxWidth: '100%',
        width: size + unit,
        height: size + unit,
        borderRadius: round ? borderRadius : 0
      };
      return _jsx('img', {
        width: size + unit,
        height: size + unit,
        style: imageStyle,
        src: this.state.src,
        alt: alt,
        onError: this.fetch
      });
    }
  }, {
    key: '_renderAsText',
    value: function _renderAsText() {
      var size = this.props.size;
      var unit = this.props.unit;
      var textSizeRatio = this.props.textSizeRatio;
      var fontFamily = this.props.fontFamily;
      var round = this.props.round;
      var borderRadius = this.props.borderRadius;
      var initialsStyle = this.props.unstyled ? null : {
        width: size + unit,
        height: size + unit,
        font: Math.floor(size * 10 / textSizeRatio) / 10 + unit + ' ' + fontFamily,
        lineHeight: size + unit,
        fontSize: Math.floor(size / textSizeRatio) + unit,
        fontFamily: fontFamily,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: this.props.fgColor,
        background: this.state.color,
        borderRadius: round ? borderRadius : 0
      };
      return _jsx('div', {
        style: initialsStyle
      }, void 0, this.state.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var size = this.props.size;
      var unit = this.props.unit;
      var hostStyle = this.props.unstyled ? null : _extends({
        display: 'inline-block',
        width: size + unit,
        height: size + unit,
        borderRadius: this.props.round ? this.props.borderRadius : 0,
        verticalAlign: this.props.valign
      }, this.props.style);

      return _jsx('div', {
        className: this.props.className,
        onClick: this.props.onClick,
        style: hostStyle
      }, void 0, this.state.src ? this._renderAsImage() : this._renderAsText());
    }
  }]);

  return Avatar;
}(_react.PureComponent);

Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  className: 'sb-avatar',
  fgColor: '#FFF',
  color: null,
  name: null,
  maxInitials: null,
  value: null,
  email: null,
  md5Email: null,
  facebookId: null,
  googleId: null,
  twitterHandle: null,
  vkontakteId: null,
  skypeId: null,
  round: false,
  borderRadius: '100%',
  size: 100,
  unit: 'px',
  style: null,
  fontFamily: 'Helvetica, Arial, sans-serif',
  textSizeRatio: 3,
  valign: 'baseline',
  unstyled: false
};
exports.default = Avatar;
module.exports = exports['default'];