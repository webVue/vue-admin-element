import { SET_COLLAPSE } from './actionTypes'

export default {
    [SET_COLLAPSE](state, bool) {
        console.log(bool);
        state.collapse = bool || false;
    }
}