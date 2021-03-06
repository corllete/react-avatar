import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './index.js';

export default class Demo extends React.Component {
  state = {
    name: 'Wim Mostmans',
    skypeId: null
  }

  _onChangeName = () => {
    this.setState({
      name: 'Foo Bar',
      skypeId: null
    });
  }

  _onSetSkype = () => {
    this.setState({ skypeId: 'sitebase' });
  }

  _onClick = () => {
    alert('Clicked!');
  }

  render() {
    return (
      <div>
        <section>
          <h2>Gravatar</h2>
          <Avatar className="myCustomClass" md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={40} />
          <Avatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={100} round={true} />
          <Avatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={150} />
          <Avatar md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={200} />
        </section>

        <section>
          <h2>Google+</h2>
          <Avatar googleId="116933859726289749306" size={40} />
          <Avatar googleId="116933859726289749306" size={100} round={true} />
          <Avatar googleId="116933859726289749306" size={150} />
          <Avatar googleId="116933859726289749306" size={200} />
        </section>

        <section>
          <h2>Facebook</h2>
          <Avatar facebookId="100008343750912" size={40} />
          <Avatar facebookId="100008343750912" size={100} round={true} />
          <Avatar facebookId="100008343750912" size={150} />
          <Avatar facebookId="100008343750912" size={200} />
        </section>

        <section>
          <h2>Twitter</h2>
          <Avatar twitterHandle="sitebase" size={40} />
          <Avatar twitterHandle="sitebase" size={100} round={true} />
          <Avatar twitterHandle="sitebase" size={150} />
          <Avatar twitterHandle="sitebase" size={200} />
        </section>

        {/* Vkontakte api requires authorization now <section>
          <h2>Vkontakte</h2>
          <Avatar vkontakteId="1" size={40} />
          <Avatar vkontakteId="1" size={100} round={true} />
          <Avatar vkontakteId="1" size={150} />
          <Avatar vkontakteId="1" size={200} />
        </section> */}

        <section>
          <h2>Skype</h2>
          <Avatar skypeId="sitebase" size={40} />
          <Avatar skypeId="sitebase" size={100} round={true} />
          <Avatar skypeId="sitebase" size={150} />
          <Avatar skypeId="sitebase" size={200} />
        </section>

        <section>
          <h2>Invalid Gravatar</h2>
          <Avatar email="bla" name="Jim Jones" size={80} />
          <Avatar email="foo" name="Jessica Jones" size={80} />
          <Avatar name="Jessica Jones" size={80} />
          <Avatar name="Jeronimo Jones" size={80} />

          <h2>Invalid Google+</h2>
          <Avatar
            googleId="invalid"
            name="Jim Jones"
            size={80} />
          <Avatar
            googleId="invalid2"
            name="Jessica Jones"
            size={80} />

          <h2>Invalid Facebook</h2>
          <Avatar
            facebookId="invalid"
            name="Jim Jones"
            size={80} />
          <Avatar
            facebookId="invalid"
            name="Jessica Jones"
            size={80} />

          <h2>Invalid Twitter</h2>
          <Avatar
            twitterHandle="invalid"
            name="Jim Jones"
            size={80} />
          <Avatar
            twitterHandle="invalid"
            name="Jessica Jones"
            size={80} />

          <h2>Invalid Skype</h2>
          <Avatar
            skypeId="invalid"
            name="Jim Jones"
            size={80} />
          <Avatar
            skypeId="invalid"
            name="Jessica Jones"
            size={80} />

          <h2>Invalid Vkontakte</h2>
          <Avatar
            vkontakteId="1"
            name="Jim Jones"
            size={80} />
          <Avatar
            vkontakteId="1"
            name="Jessica Jones"
            size={80} />

          <h2>Invalid Source</h2>
          <Avatar
            src="invalidSource"
            name="Jim Jones"
            size={80} />
          <Avatar
            src="invalidSource2"
            name="Jessica Jones"
            size={80} />
        </section>

        <section>
          <h2>Initials</h2>
          <div>
            <button onClick={this._onChangeName}>Change name</button>
            <button onClick={this._onSetSkype}>Set skype ID</button>
          </div>
          <Avatar name={this.state.name} skypeId={this.state.skypeId} size={40} />
          <Avatar name={this.state.name} size={100} round={true} />
          <Avatar name={this.state.name} size={150} />
          <Avatar name={this.state.name} size={200} />
        </section>

        <section>
          <h2>onClick</h2>
          <Avatar name={this.state.name} onClick={this._onClick} size={200} />
        </section>

        <section>
          <h2>Initials with different font sizes</h2>
          <div>
            <Avatar name={this.state.name} skypeId={this.state.skypeId} size={40} textSizeRatio={2} />
            <Avatar name={this.state.name} size={100} round={true} textSizeRatio={2} />
            <Avatar name={this.state.name} size={150} textSizeRatio={2} />
            <Avatar name={this.state.name} size={200} textSizeRatio={2} />
          </div>
          <div>
            <Avatar name={this.state.name} skypeId={this.state.skypeId} size={40} textSizeRatio={4} />
            <Avatar name={this.state.name} size={100} round={true} textSizeRatio={4} />
            <Avatar name={this.state.name} size={150} textSizeRatio={4} />
            <Avatar name={this.state.name} size={200} textSizeRatio={4} />
          </div>
        </section>

        <section>
          <h2>Initials with maximum number of characters</h2>
          <div>
            <Avatar
              name={this.state.name}
              maxInitials={2}
              skypeId={this.state.skypeId}
              size={40}
              textSizeRatio={2} />
            <Avatar
              name={this.state.name}
              maxInitials={1}
              size={100}
              round={true}
              textSizeRatio={2} />
            <Avatar name={this.state.name} size={150} textSizeRatio={2} />
            <Avatar name={this.state.name} size={200} textSizeRatio={2} />
          </div>
        </section>

        <section>
          <h2>Value</h2>
          <Avatar value="86%" size={40} />
          <Avatar value="86%" size={100} round={true} />
          <Avatar value="86%" size={150} />
          <Avatar value="86%" size={200} />
        </section>

        <section>
          <h2>Fallback to static src</h2>
          <Avatar size={150} facebookId="invalidfacebookusername" src="https://thumbs.dreamstime.com/m/cute-monster-avatar-smiling-face-yellow-color-52010608.jpg" name="Foo Bar" />
        </section>

        <section>
          <h2>Double fallback: Facebook to Google to initials</h2>
          <Avatar facebookId="invalidfacebookusername"
            googleId="invalidgoogleid"
            name="Sitebase"
            size={200}
            round={true} />
        </section>
        <section>
          <h2>Custom style</h2>
          <Avatar
            name="Wim Mostmans"
            style={{ borderRadius: 10, border: 'solid 10px rgba(0,0,0,0.5)' }}
            size={100} />
        </section>
        <section>
          <h2>Unstyled</h2>
          <Avatar
            name="Wim Mostmans"
            unstyled={true} />
        </section>
        <section>
          <h2>Vertical Alignment</h2>
          <Avatar valign="middle" name="Wim Mostmans" size={50} />
          Wim Mostmans
          <Avatar valign="middle" name="Wim Mostmans" size={50} round={true} />
            Wim Mostmans
          <Avatar valign="middle" md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={50} round={true} />
            Wim Mostmans
          <Avatar valign="middle" md5Email="8c5d4c4b9ef6c68c4ff91c319d4c56be" size={150} />
            Wim Mostmans
        </section>
      </div>
    );
  }
}
Demo.displayName = 'Demo';

var mountNode = document.getElementById('container');
ReactDOM.render(<Demo />, mountNode);
