import { RendererOptions } from './renderer-options.type';

export type RendererFn<T = void> = (options: RendererOptions<T>) => void;
