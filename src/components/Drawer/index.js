/* eslint react/prop-types: 0 */
/* eslint-disable no-underscore-dangle */

import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';

class _Drawer extends React.Component {
  render() {
    const { children, anchor, _open } = this.props;
    const _props = Object.assign({}, this.props, { open: _open[anchor] });
    return React.createElement(
      Drawer,
      _props,
      children,
    );
  }
}

const mapStateToProps = (state) => {
  const { open } = state.ui.drawer;

  return {
    _open: open,
  };
};

export default connect(mapStateToProps)(_Drawer);
