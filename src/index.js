import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { cacheFailingSource, hasSourceFailedBefore } from './utils.js';

import gravatarSource from './sources/Gravatar.js';
import facebookSource from './sources/Facebook.js';
import vkontakteSource from './sources/Vkontakte.js';
import twitterSource from './sources/Twitter.js';
import googleSource from './sources/Google.js';
import skypeSource from './sources/Skype.js';
import valueSource from './sources/Value.js';
import srcSource from './sources/Src.js';
import iconSource from './sources/Icon.js';

const SOURCES = [
  facebookSource,
  googleSource,
  twitterSource,
  vkontakteSource,
  skypeSource,
  gravatarSource,
  srcSource,
  valueSource,
  iconSource
];

export default class Avatar extends PureComponent {
  static displayName = 'Avatar'
  static propTypes = {
    className: PropTypes.string,
    fgColor: PropTypes.string,
    color: PropTypes.string,
    colors: PropTypes.array,
    name: PropTypes.string,
    maxInitials: PropTypes.number,
    value: PropTypes.string,
    email: PropTypes.string,
    md5Email: PropTypes.string,
    src: PropTypes.string,
    facebookId: PropTypes.string,
    googleId: PropTypes.string,
    twitterHandle: PropTypes.string,
    vkontakteId: PropTypes.string,
    skypeId: PropTypes.string,
    round: PropTypes.bool,
    borderRadius: PropTypes.string,
    style: PropTypes.object,
    fontFamily: PropTypes.string,
    size: PropTypes.number,
    unit: PropTypes.string,
    textSizeRatio: PropTypes.number,
    valign: PropTypes.string,
    unstyled: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
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
  }

  constructor(props) {
    super(props);
    this.state = {
      _internal: {
        sourcePointer: 0
      },
      src: props.src,
      value: null,
      color: props.color
    };
  }

  componentWillMount() {
    this.fetch();
  }

  componentWillReceiveProps(newProps) {
    const nextState = {};
    if (newProps.src !== this.props.src)
      nextState.src = newProps.src;

    if (newProps.name !== this.props.name)
      nextState.name = newProps.name;

    if (newProps.maxInitials !== this.props.maxInitials)
      nextState.maxInitials = newProps.maxInitials;

    if (newProps.value !== this.props.value)
      nextState.value = newProps.value;

    if (newProps.email !== this.props.email)
      nextState.email = newProps.email;

    if (newProps.md5Email !== this.props.md5Email)
      nextState.md5Email = newProps.md5Email;

    if (newProps.facebookId !== this.props.facebookId)
      nextState.facebookId = newProps.facebookId;

    if (newProps.googleId !== this.props.googleId)
      nextState.googleId = newProps.googleId;

    if (newProps.twitterHandle !== this.props.twitterHandle)
      nextState.twitterHandle = newProps.twitterHandle;

    if (newProps.vkontakteId !== this.props.vkontakteId)
      nextState.vkontakteId = newProps.vkontakteId;

    if (newProps.skypeId !== this.props.skypeId)
      nextState.skypeId = newProps.skypeId;


    if (Object.keys(nextState) !== 0) {
      nextState._internal = this.state._internal;
      nextState._internal.sourcePointer = 0;
      this.setState(nextState, this.fetch);
    }
  }

  tryNextsource = (Source, next) => {
    const instance = new Source(this.props);

    if (!instance.isCompatible(this.props))
      return next();

    instance.get((state) => {
      this.setState(() => (
        state && !hasSourceFailedBefore(state.src) ? state : {}
      ), () => {
        const failedBefore = !!state &&
          state.hasOwnProperty('src') &&
          hasSourceFailedBefore((state || {}).src);

        if (failedBefore || !state) {
          next();
        }
      });
    });
  };

  fetch = (event) => {
    // If fetch was triggered by img onError
    // then set state src back to null so render will
    // automatically switch a text avatar if there is no
    // other social ID available to try
    if (event && event.type === 'error') {
      cacheFailingSource(this.state.src);
      this.setState(() => ({ src: null }));
      return;
    }

    // console.log('## fetch');

    const id = this._fetchId = this._fetchId ? this._fetchId + 1 : 1;

    var tryFetch = () => {
      if (SOURCES.length === this.state._internal.sourcePointer)
        return;

      const source = SOURCES[this.state._internal.sourcePointer];

      const internal = { ...this.state._internal };
      internal.sourcePointer++;

      // console.log('## try fetch', id, this._fetchId, internal.sourcePointer - 1);
      this.setState(() => ({
        _internal: internal
      }), () => {
        this.tryNextsource(source, () => {
          // console.log('-- next', id, this._fetchId);
          if (id === this._fetchId) {
            tryFetch();
          }
        });
      });
    };

    tryFetch();
  };

  _renderAsImage() {
    const size = this.props.size;
    const unit = this.props.unit;
    const round = this.props.round;
    const borderRadius = this.props.borderRadius;
    const alt = this.props.name || this.props.value;
    const imageStyle = this.props.unstyled ? null : {
      maxWidth: '100%',
      width: size + unit,
      height: size + unit,
      borderRadius: (round ? borderRadius : 0)
    };
    return (
      <img width={size + unit}
        height={size + unit}
        style={imageStyle}
        src={this.state.src}
        alt={alt}
        onError={this.fetch} />
    );
  }

  _renderAsText() {
    const size = this.props.size;
    const unit = this.props.unit;
    const textSizeRatio = this.props.textSizeRatio;
    const fontFamily = this.props.fontFamily;
    const round = this.props.round;
    const borderRadius = this.props.borderRadius;
    const initialsStyle = this.props.unstyled ? null : {
      width: size + unit,
      height: size + unit,
      font: (Math.floor((size * 10) / textSizeRatio) / 10) + unit + ' ' + fontFamily,
      lineHeight: size + unit,
      fontSize: Math.floor(size / textSizeRatio) + unit,
      fontFamily,
      textAlign: 'center',
      textTransform: 'uppercase',
      color: this.props.fgColor,
      background: this.state.color,
      borderRadius: (round ? borderRadius : 0)
    };
    return (
      <div style={initialsStyle}>
        {this.state.value}
      </div>
    );
  }

  render() {
    const size = this.props.size;
    const unit = this.props.unit;
    const hostStyle = this.props.unstyled ? null : {
      display: 'inline-block',
      width: size + unit,
      height: size + unit,
      borderRadius: (this.props.round ? this.props.borderRadius : 0),
      verticalAlign: this.props.valign,
      ...this.props.style
    };

    return (
      <div className={this.props.className} onClick={this.props.onClick}
        style={hostStyle}>
        {this.state.src ? this._renderAsImage() : this._renderAsText()}
      </div>
    );
  }
}
