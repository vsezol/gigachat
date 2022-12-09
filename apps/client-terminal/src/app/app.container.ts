import { Container } from 'inversify';
import { CommandsService } from './services/commands.service';
import { DestroyService } from './services/destroy.service';
import { RenderingService } from './services/rendering.service';
import { RoutingService } from './services/routing.service';
import { routingStore } from './stores/routing.store';
import { TOKENS } from './tokens';

const appContainer = new Container();

appContainer.bind(TOKENS.routingStore).toConstantValue(routingStore);

appContainer
  .bind(TOKENS.renderingService)
  .to(RenderingService)
  .inSingletonScope();

appContainer.bind(TOKENS.routingService).to(RoutingService).inSingletonScope();

appContainer
  .bind(TOKENS.commandsService)
  .to(CommandsService)
  .inSingletonScope();

appContainer.bind(TOKENS.destroyService).to(DestroyService).inSingletonScope();

export { appContainer };
