import { Injectable } from '@nestjs/common';

@Injectable()
export class SingleFlight {
  private active: Record<string, Promise<unknown>> = {};

  /**
   * Executes a function once for a given key, ensuring concurrent calls with the same key
   * return the same promise. Subsequent calls with the same key will return the promise
   * from the first call until it completes.
   *
   * @param key - A unique identifier for the operation
   * @param f - The function to execute that returns a Promise
   * @typeParam T - The type of the value that the Promise resolves to
   * @returns Promise that resolves with the result of the function execution
   *
   * @example
   * ```typescript
   * const flight = new SingleFlight();
   * const result = await flight.do('key', async () => {
   *   return await expensiveOperation();
   * });
   * ```
   */
  do<T>(key: string, f: () => Promise<T>): Promise<T> {
    const promise = this.active[key];
    if (promise !== undefined) {
      return promise as Promise<T>;
    }
    return (this.active[key] = f().finally(() => delete this.active[key]));
  }

  /**
   * Executes a given function ensuring only one execution at a time.
   * If multiple calls are made while a previous one is still running,
   * they will all receive the result from the first call.
   *
   * @param f - The async function to be executed
   * @returns A promise that resolves with the result of the executed function
   * @typeParam T - The type of value that the promise resolves to
   *
   * @example
   * ```typescript
   * const flight = new SingleFlight();
   * const result = await flight.run(async () => {
   *   return await someAsyncOperation();
   * });
   * ```
   */
  run<T>(f: () => Promise<T>): Promise<T> {
    return this.do('$singleFlight', f);
  }
}
