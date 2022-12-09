import { terminal } from 'terminal-kit';
import { RendererFn } from '../declarations/types/renderer-fn.type';

let counter = 0;

export const navbarRenderer: RendererFn = () => {
  counter++;
  terminal.bgGreen(`GIGACHAT ${counter}\n`);
};
