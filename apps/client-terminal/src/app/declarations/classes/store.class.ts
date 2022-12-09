import { map, Observable, ReplaySubject, take } from 'rxjs';

export class Store<T = unknown> {
  readonly #state$: ReplaySubject<T> = new ReplaySubject<T>(1);

  public readonly state$: Observable<T> = this.#state$.asObservable();

  public get stateOnce$(): Observable<T> {
    return this.state$.pipe(take(1));
  }

  constructor(private readonly initialState: T) {
    this.set(initialState);
  }

  public update(updateFn: (state: T) => T): void {
    this.stateOnce$.subscribe((state: T) => this.set(updateFn(state)));
  }

  public patch(patchFn: (state: T) => Partial<T>): void {
    this.update((state: T) => ({ ...state, ...patchFn(state) }));
  }

  public reset(): void {
    this.set(this.initialState);
  }

  public selectOnce<U>(selectFn: (state: T) => U): Observable<U> {
    return this.select(selectFn).pipe(take(1));
  }

  public select<U>(selectFn: (state: T) => U): Observable<U> {
    return this.state$.pipe(map(selectFn));
  }

  private set(state: T): void {
    this.#state$.next(state);
  }
}
