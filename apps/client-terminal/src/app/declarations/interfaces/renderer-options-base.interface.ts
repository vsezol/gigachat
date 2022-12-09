import { Container } from 'inversify';

export interface RendererOptionsBase {
  container: Container;
  height: number;
  width: number;
  x: number;
  y: number;
}
