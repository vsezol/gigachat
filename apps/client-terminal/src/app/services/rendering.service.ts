import { injectable } from 'inversify';
import 'reflect-metadata';
import { Observable, ReplaySubject } from 'rxjs';

@injectable()
export class RenderingService {
  readonly #renderRequested$: ReplaySubject<void> = new ReplaySubject<void>(1);

  public readonly renderRequested$: Observable<void> =
    this.#renderRequested$.asObservable();

  public requestRender(): void {
    this.#renderRequested$.next();
  }
}
