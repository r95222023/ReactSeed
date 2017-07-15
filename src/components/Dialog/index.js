import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';

const mapStateToProps = (state) => {
  const { open } = state.ui.dialog;

  return {
    open,
  };
};

export default connect(mapStateToProps)(Dialog);
