import { Terminal } from 'terminal-kit';
import { Position } from '../interfaces/position.interface';

export class TerminalCursorManipulator {
  #position: Position;
  readonly #initialPosition: Position;

  public get position(): Position {
    return this.#position;
  }

  constructor(private readonly terminal: Terminal, initialPosition: Position) {
    this.#initialPosition = initialPosition;
    this.#position = { ...initialPosition };
  }

  public moveByDiff(x = 0, y: number): void {
    this.adjust(x, y);
    this.moveToCurrent();
  }

  public moveToInitial(): void {
    this.reset();
    this.moveToCurrent();
  }

  public moveToCurrent(): void {
    this.terminal.moveTo(this.position.x, this.position.y);
  }

  public reset(): void {
    this.#position = { ...this.#initialPosition };
  }

  private adjust(x, y): void {
    this.#position.x += x;
    this.#position.y += y;
  }
}
