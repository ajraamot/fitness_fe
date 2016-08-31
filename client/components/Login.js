/* eslint-disable max-len, arrow-body-style, no-underscore-dangle, react/no-string-refs */
/* eslint-disable no-undef */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);

    this.state = { unauthorized: false };
  }

  create(e) {
    e.preventDefault();
    const username = this.refs.email.value;
    const password = this.refs.password.value;
    axios.post('http://localhost:9001/api/authenticate', { username, password })
    .then((req) => {
      localStorage.clear();
      localStorage.setItem('token', req.data.token);
      browserHistory.push('/');
    })
    .catch(() => {
      // notify user login failed
      this.setState({ unauthorized: true });
    });
  }

  render() {
    let unauth = '';
    if (this.state.unauthorized) {
      unauth =
        (<div ref="unauthorized" id="unauthorized" style={{ color: 'red' }}>
          Sorry, this username or password is incorrect.
        </div>);
    }
    return (
      <div>

        <h1>Login</h1>

        <div className="row">
          <div className="col-xs-3">
            <form>
              {unauth}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input ref="email" type="text" className="form-control" id="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input ref="password" type="password" className="form-control" id="password" />
              </div>

              <button onClick={this.create} type="submit" className="btn btn-default">Login</button>
            </form>
          </div>
          <div className="col-xs-9" />
        </div>
      </div>
    );
  }
}
