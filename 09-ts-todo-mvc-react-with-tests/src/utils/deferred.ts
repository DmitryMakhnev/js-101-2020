
export class Deferred<T> {
  readonly promise: Promise<T>;
  resolve!: (arg: T | PromiseLike<T>) => void;
  reject!: (arg?: any) => void;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
