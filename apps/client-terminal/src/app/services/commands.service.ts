import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { CommandName } from '../declarations/enums/command-name.enum';
import { Route } from '../declarations/enums/route.enum';
import { TOKENS } from '../tokens';
import { DestroyService } from './destroy.service';
import { RoutingService } from './routing.service';

@injectable()
export class CommandsService {
  constructor(
    @inject(TOKENS.routingService)
    private readonly routingService: RoutingService,
    @inject(TOKENS.destroyService)
    private readonly destroyService: DestroyService
  ) {}

  public runTextAsCommand(text: string): void {
    switch (text) {
      case CommandName.GoChat:
        this.routingService.goTo(Route.Chat);
        return;
      case CommandName.GoDefault:
        this.routingService.goTo(Route.Default);
        return;
      case CommandName.Exit:
        this.destroyService.destroy();
        return;
      default:
        return;
    }
  }
}
