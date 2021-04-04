import { Deferred } from '../deferred';

export function mockFetch<T>(jsonResponse: T, options: { responseOk?: boolean } = {}) {
  jest.spyOn(window, 'fetch');

  const { responseOk: ok = true } = options;

  const responseDeferred = new Deferred();
  const parsingDeferred = new Deferred();

  (window.fetch as jest.MockedFunction<any>).mockImplementationOnce(() => responseDeferred.promise);

  return () =>
    new Promise(resolve => {
      parsingDeferred.promise.then(data => {
        // use setTimeout for an event loop task which will be executed after all Promises (because them are micro tasks)
        setTimeout(resolve, 0);
        return data;
      });

      responseDeferred.promise.then(() => {
        parsingDeferred.resolve(jsonResponse);
      });

      responseDeferred.resolve({
        ok,
        json: () => parsingDeferred.promise
      });
    });
}
