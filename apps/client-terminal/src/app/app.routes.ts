import { Route } from './declarations/enums/route.enum';
import { RendererFn } from './declarations/types/renderer-fn.type';
import { chatRenderer } from './pages/chat.page';
import { defaultRenderer } from './pages/default.page';

export const appRoutes: Map<Route, RendererFn> = new Map<Route, RendererFn>([
  [Route.Chat, chatRenderer],
  [Route.Default, defaultRenderer],
]);
