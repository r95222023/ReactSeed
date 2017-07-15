/* eslint-disable no-underscore-dangle */

import { UI_TOGGLE_DRAWER, UI_TOGGLE_DIALOG } from '../constants';

const initState = {
  drawer: { open: { left: false, right: false, top: false, bottom: false } },
  dialog: { open: false },
};
export default function ui(state = initState, action) {
  switch (action.type) {
    case UI_TOGGLE_DRAWER: {
      const { anchor, open } = action;
      const _anchor = anchor || 'left';
      const _open = Object.assign({}, state.drawer.open);
      _open[_anchor] = typeof open === 'boolean' ? open : !_open[_anchor];
      return {
        ...state,
        drawer: {
          ...state.drawer,
          open: _open,
        },
      };
    }
    case UI_TOGGLE_DIALOG: {
      const { open } = action;
      const _open = typeof open === 'boolean' ? open : !state.dialog.open;
      return {
        ...state,
        dialog: {
          ...state.dialog,
          open: _open,
        },
      };
    }
    default:
      return state;
  }
}
