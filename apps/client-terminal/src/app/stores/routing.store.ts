import { Store } from '../declarations/classes/store.class';
import { Route } from '../declarations/enums/route.enum';
import { RoutingState } from '../declarations/interfaces/routing-state.interface';

export const routingStore = new Store<RoutingState>({
  currentRoute: Route.Default,
});
