import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { Store } from '../declarations/classes/store.class';
import { Route } from '../declarations/enums/route.enum';
import { RoutingState } from '../declarations/interfaces/routing-state.interface';
import { TOKENS } from '../tokens';

@injectable()
export class RoutingService {
  constructor(
    @inject(TOKENS.routingStore)
    private readonly routingStore: Store<RoutingState>
  ) {}

  public goTo(route: Route): void {
    this.routingStore.patch(() => ({ currentRoute: route }));
  }
}
