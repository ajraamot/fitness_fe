/* eslint-disable max-len, arrow-body-style, no-underscore-dangle, react/no-string-refs */
/* eslint-disable no-undef, no-alert, eqeqeq */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
  }

  create(e) {
    e.preventDefault();
    const username = this.refs.email.value;
    const password = this.refs.password.value;
    const passwordConfirm = this.refs.passwordConfirm.value;
    console.log(password);
    console.log(passwordConfirm);
    if (password === passwordConfirm) {
      axios.post('http://localhost:9001/api/users', { username, password })
      .then(() => {
        browserHistory.push('/login');
      })
      .catch(() => {
        // notify user registration failed
      });
    } else {
      alert('Passwords do not match');
    }
  }

  render() {
    return (
      <div>

        <h1>Register</h1>

        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input ref="email" type="text" className="form-control" id="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input ref="password" type="password" className="form-control" id="password" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input ref="passwordConfirm" type="password" className="form-control" id="passwordConfirm" />
              </div>

              <button onClick={this.create} type="submit" className="btn btn-default">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
