import { TestScheduler } from 'rxjs/testing';
import rootEpic from '../rootEpic';

function assertDeepEqual(actual, expected) {
  expect(actual).toEqual(expected);
}

describe('Epic tests', () => {
  let scheduler;

  beforeEach(() => {
    scheduler = new TestScheduler(assertDeepEqual);
  });

  test('Happy case', () => {
    scheduler.run(({ hot, cold, expectObservable }) => {
      const action$ = hot('-a', {
        a: { type: 'AIR_PRESSURE_CHANGED', payload: '100' },
      });

      const output$ = rootEpic(action$, null);

      expectObservable(output$).toBe('-a', {
        a: { type: 'AIR_PRESSURE_CHANGED', payload: '100' },
      });
    });
  });
});
