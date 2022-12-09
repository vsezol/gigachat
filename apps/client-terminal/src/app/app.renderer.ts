import { map, Observable, takeUntil } from 'rxjs';
import { terminal } from 'terminal-kit';
import { appRoutes } from './app.routes';
import { Store } from './declarations/classes/store.class';
import { TerminalCursorManipulator } from './declarations/classes/terminal-cursor-manipulator.class';
import { Route } from './declarations/enums/route.enum';
import { RoutingState } from './declarations/interfaces/routing-state.interface';
import { RendererFn } from './declarations/types/renderer-fn.type';
import { commandInputRenderer } from './renderers/command-input.renderer';
import { navbarRenderer } from './renderers/navbar.renderer';
import { DestroyService } from './services/destroy.service';
import { RenderingService } from './services/rendering.service';
import { TOKENS } from './tokens';

const navbarHeight = 1;

const commandInputHeight = 2;

export const appRenderer: RendererFn = ({
  container,
  height,
  width,
  x,
  y,
}): void => {
  const renderingService: RenderingService = container.get(
    TOKENS.renderingService
  );

  const destroyService = container.get<DestroyService>(TOKENS.destroyService);

  const routingStore = container.get<Store<RoutingState>>(TOKENS.routingStore);

  const currentChildRenderer$: Observable<RendererFn> = routingStore
    .selectOnce((state: RoutingState) => state.currentRoute)
    .pipe(map((currentRoute: Route) => appRoutes.get(currentRoute)));

  const cursorManipulator: TerminalCursorManipulator =
    new TerminalCursorManipulator(terminal, { x, y });

  renderingService.renderRequested$
    .pipe(takeUntil(destroyService.destroyed$))
    .subscribe(() => {
      terminal.clear();

      cursorManipulator.moveToInitial();

      navbarRenderer({
        container,
        height: navbarHeight,
        width,
        ...cursorManipulator.position,
      });

      cursorManipulator.moveByDiff(0, navbarHeight);
      const bodyHeight: number = height - navbarHeight - commandInputHeight;
      currentChildRenderer$.subscribe((childRenderer: RendererFn) =>
        childRenderer({
          container,
          height: bodyHeight,
          width,
          ...cursorManipulator.position,
        })
      );

      cursorManipulator.moveByDiff(0, bodyHeight);
      commandInputRenderer({
        container,
        height: commandInputHeight,
        width,
        ...cursorManipulator.position,
      });
    });
};
