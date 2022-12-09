import { terminal } from 'terminal-kit';
import { appContainer } from './app/app.container';
import { appRenderer } from './app/app.renderer';
import { DestroyService } from './app/services/destroy.service';
import { RenderingService } from './app/services/rendering.service';
import { TOKENS } from './app/tokens';

appRenderer({
  container: appContainer,
  height: terminal.height,
  width: terminal.width,
  x: 0,
  y: 1,
});

appContainer.get<RenderingService>(TOKENS.renderingService).requestRender();

appContainer.get<DestroyService>(TOKENS.destroyService).destroyed$.subscribe({
  complete: () => {
    terminal.clear();
    process.exit();
  },
});
