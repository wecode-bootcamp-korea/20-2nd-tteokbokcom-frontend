import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class WhiteModal extends Component {
  render() {
    return <div></div>;
  }
}

export default connect(mapStateToProps)(WhiteModal);
