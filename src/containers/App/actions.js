
import { createActions } from 'redux-actions';
import { 
    FETCH_TRENDINGS,
    FETCH_TRENDINGS_SUCCESS,
    FETCH_TRENDINGS_FAIL } from './constants';

export const  {
  fetchTrendings,
  fetchTrendingsSuccess,
  fetchTrendingsFail
} = createActions({
    [FETCH_TRENDINGS]: () => ({}),
    [FETCH_TRENDINGS_SUCCESS]: (data) => ({data}),
    [FETCH_TRENDINGS_FAIL]:(error) => ({error})
  });
