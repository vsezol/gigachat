import { injectable } from 'inversify';
import 'reflect-metadata';
import { Observable, Subject } from 'rxjs';

@injectable()
export class DestroyService {
  readonly #destroyed: Subject<void> = new Subject<void>();

  public readonly destroyed$: Observable<void> = this.#destroyed.asObservable();

  public destroy(): void {
    this.#destroyed.next();
    this.#destroyed.complete();
  }
}
