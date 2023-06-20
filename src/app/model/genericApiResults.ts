export default interface GenericApiResult<T> {
    count: number;
    next: string;
    previous: string;
    results: T
  }