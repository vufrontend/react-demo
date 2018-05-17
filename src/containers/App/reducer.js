import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import { 
    FETCH_TRENDINGS,
    FETCH_TRENDINGS_SUCCESS,
    FETCH_TRENDINGS_FAIL } from './constants';

const INITIAL_STATE = Map({
    data: List(),
    loading: false,
    error: null
  });

const appReducer = handleActions({
    [FETCH_TRENDINGS]: (state, action) => state.merge(action.payload,{loading: true}),
    [FETCH_TRENDINGS_SUCCESS]: (state, action) => {
        return state.merge(action.payload,{loading: false, error: ''})
    },
    [FETCH_TRENDINGS_FAIL]: (state, action) => state.merge(action.payload,{loading: false}),
}, INITIAL_STATE);

export  {appReducer as default};