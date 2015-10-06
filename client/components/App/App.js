import React from 'react';
import Navbar from './Navbar';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
