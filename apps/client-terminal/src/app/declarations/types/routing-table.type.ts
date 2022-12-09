import { RendererFn } from './renderer-fn.type';

export type RoutingTable<T extends string = string> = Record<T, RendererFn>;
