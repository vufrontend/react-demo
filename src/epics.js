import { combineEpics } from 'redux-observable';
import AppEpics from './containers/App/epic'

const rootEpic = combineEpics(
    ...AppEpics
);
export default rootEpic;