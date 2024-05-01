export interface SingleFlight<T> {
  /**
   * Do separates executions between "keys"
   */
  do: (key: string, f: () => Promise<T>) => Promise<T>;
  /**
   * Run do not separate execution it is meant to be a single but deduplicated execution
   */
  run: (f: () => Promise<T>) => Promise<T>;
}

export const singleFlight = <T>(): SingleFlight<T> => {
  const active: Record<string, Promise<T>> = {};
  const sfDo = (key: string, f: () => Promise<T>) => {
    const promise = active[key];
    if (promise !== undefined) {
      return promise;
    }
    return (active[key] = f().finally(() => delete active[key]));
  };
  return {
    do: sfDo,
    run: (f) => {
      return sfDo('$singleFlight', f);
    },
  };
};
