import { terminal } from 'terminal-kit';
import { CommandName } from '../declarations/enums/command-name.enum';
import { RendererFn } from '../declarations/types/renderer-fn.type';
import { CommandsService } from '../services/commands.service';
import { RenderingService } from '../services/rendering.service';
import { TOKENS } from '../tokens';

const autoCompleteCommands: CommandName[] = Object.values(CommandName);

export const commandInputRenderer: RendererFn = ({ container }) => {
  terminal.green.bold('> ');
  terminal.inputField(
    { autoComplete: autoCompleteCommands, autoCompleteMenu: true },
    (_: unknown, input: string) => {
      container
        .get<CommandsService>(TOKENS.commandsService)
        .runTextAsCommand(input);

      container.get<RenderingService>(TOKENS.renderingService).requestRender();
    }
  );
};
