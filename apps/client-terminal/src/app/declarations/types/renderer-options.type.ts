import { RendererOptionsBase } from '../interfaces/renderer-options-base.interface';

export type RendererOptions<T = void> = T extends void
  ? RendererOptionsBase
  : RendererOptions & {
      inputs: T;
    };
