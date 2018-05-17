import {Observable} from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { END_POINT } from '../../api/'
import { FETCH_TRENDINGS } from './constants';
import { fetchTrendingsFail, fetchTrendingsSuccess } from '../App/actions'

export function fetchTrendingsEpic(action$) {
  return action$.ofType(FETCH_TRENDINGS)
    .debounceTime(150)
    .distinctUntilChanged()
    .switchMap(() =>
        ajax(END_POINT.getTrendingGifs.url(), END_POINT.getTrendingGifs.method)
        .retry(3)
        .map(({response}) => {
            // console.log(response);
            return fetchTrendingsSuccess(response.data);
        })
        .catch(error => {
            // console.log(error);
            return Observable.of(fetchTrendingsFail('Sorry, something went wrong. Please try again later.'));
        })
    );
}

export default [ fetchTrendingsEpic ] ;