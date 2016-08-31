/* eslint-disable arrow-body-style, no-unused-vars, no-undef*/

import React from 'react';

export default () => {
  let x = '';
  if (localStorage.getItem('token')) {
    x = <iframe height="600" width="600" src="http://slither.io" />;
  }
  return (
    <div>
      <h1>Home</h1>
      {x}
    </div>
  );
};
