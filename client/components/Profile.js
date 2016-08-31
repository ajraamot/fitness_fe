/* eslint-disable max-len, arrow-body-style, no-underscore-dangle, react/no-string-refs */
/* eslint-disable no-undef, no-alert, eqeqeq */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasProfile: false };
    this.create = this.create.bind(this);
  }

  create(e) {
    e.preventDefault();
    console.log(this.refs.gender.value);
    const age = this.refs.age.value;
    const weight = this.refs.weight.value;
    const height = this.refs.height.value;
    const photo = this.refs.photo.value;
    const gender = this.refs.gender.value;
    axios.post('http://localhost:9001/api/profiles',
               { age, weight, height, photo, gender })
    .then(() => {
      this.setState({ hasProfile: true });
      browserHistory.push('/profile');
    })
    .catch(() => {
      // notify user registration failed
    });
  }

  render() {
    let profile = '';
    if (this.state.hasProfile) {
      profile = <h1>this is a profile.</h1>;
    } else {
      profile =
        (<div>
          <h1>Profile</h1>
          <div className="row">
            <div className="col-xs-3">
              <form>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select ref="gender" className="form-control" id="gender">
                    <option value="f">Female</option>
                    <option value="m">Male</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input ref="age" type="number" className="form-control" id="age" />
                </div>
                <div className="form-group">
                  <label htmlFor="height">Height (inches)</label>
                  <input ref="height" type="number" className="form-control" id="height" />
                </div>

                <div className="form-group">
                  <label htmlFor="weight">Weight (pounds)</label>
                  <input ref="weight" type="number" className="form-control" id="weight" />
                </div>
                <div className="form-group">
                  <label htmlFor="photo">Photo (url)</label>
                  <input ref="photo" type="text" className="form-control" id="photo" />
                </div>
                <button onClick={this.create} type="submit" className="btn btn-default">Create Profile</button>
              </form>
            </div>
          </div>
        </div>);
    }

    return (
      <div>
        {profile}
      </div>
    );
  }
}
