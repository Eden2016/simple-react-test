import { combineEpics, ofType } from 'redux-observable';
import {
  mapTo, distinct, debounceTime, mergeMap, timeout, catchError
} from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs';
import 'rxjs/add/operator/timeoutWith';

const epic = type => action$ => action$.pipe(
  ofType(type),
  mergeMap(() => Observable.interval(150).pipe(
    debounceTime(100),
    mapTo({ type, payload: Math.floor((Math.random() * 100) + 1) }),
    distinct(),
  )),
  timeout(1000),
  catchError(() => of({
    type,
    payload: 'N/A',
  }))
);

export default combineEpics(
  epic('TEMPERATURE_CHANGED'),
  epic('AIR_PRESSURE_CHANGED'),
  epic('HUMIDITY_CHANGED'),
);
