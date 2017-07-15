import { UI_TOGGLE_DRAWER, UI_TOGGLE_DIALOG } from '../constants';

export function toggleDrawer(anchor, open) {
  return {
    type: UI_TOGGLE_DRAWER,
    anchor,
    open,
  };
}

export function toggleDialog(open) {
  return {
    type: UI_TOGGLE_DIALOG,
    open,
  };
}
