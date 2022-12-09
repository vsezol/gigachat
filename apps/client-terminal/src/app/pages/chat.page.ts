import { terminal } from 'terminal-kit';
import { RendererFn } from '../declarations/types/renderer-fn.type';

export const chatRenderer: RendererFn = () => terminal('chat\n');
